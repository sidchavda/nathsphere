import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import nodemailer from 'nodemailer'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const contactRecipient = 'nathsphere19@gmail.com'
let cachedClient
let cachedTransporter

function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured')
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  return cachedTransporter
}


async function getDatabase() {
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL is not configured')
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGO_URL)
    await cachedClient.connect()
  }

  return cachedClient.db()
}

function json(data, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

export async function GET(request, { params }) {
  const segments = (await params)?.path || []
  const endpoint = segments[0]

  if (endpoint === 'health') {
    return json({ ok: true, service: 'nathsphere-api' })
  }

  if (endpoint === 'download-source') {
    try {
      const archivePath = path.join(process.cwd(), 'nathsphere-technolabs-source.zip')
      const archive = await readFile(archivePath)
      return new Response(archive, {
        status: 200,
        headers: {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename="nathsphere-technolabs-source.zip"',
          'Content-Length': String(archive.length),
          'Cache-Control': 'no-store',
        },
      })
    } catch (error) {
      console.error('Source archive error:', error)
      return json({ error: 'The source archive is not available.' }, 404)
    }
  }

  return json({ error: 'Not found' }, 404)
}

export async function POST(request, { params }) {
  const segments = (await params)?.path || []
  const endpoint = segments[0]

  if (endpoint !== 'contact') {
    return json({ error: 'Not found' }, 404)
  }

  try {
    const body = await request.json()
    const name = body?.name?.trim()
    const email = body?.email?.trim().toLowerCase()
    const company = body?.company?.trim() || ''
    const message = body?.message?.trim()

    if (!name || !email || !message) {
      return json({ error: 'Name, email, and message are required.' }, 400)
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailIsValid) {
      return json({ error: 'Please provide a valid email address.' }, 400)
    }

    if (name.length > 120 || email.length > 160 || company.length > 160 || message.length > 4000) {
      return json({ error: 'One or more fields are too long.' }, 400)
    }

    const database = await getDatabase()
    await database.collection('contact_submissions').insertOne({
      id: crypto.randomUUID(),
      name,
      email,
      company,
      message,
      createdAt: new Date(),
      source: 'website-contact-form',
    })
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: contactRecipient,
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        '',
        'Project details:',
        message,
      ].join('\n'),
    })


    return json({ ok: true, message: 'Thanks — we will be in touch shortly.' }, 201)
  } catch (error) {
    console.error('Contact submission error:', error)
    return json({ error: 'We could not send your message right now. Please try again.' }, 500)
  }
}