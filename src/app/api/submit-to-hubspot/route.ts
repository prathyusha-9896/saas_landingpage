//import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const HUBSPOT_PORTAL_ID = '242799232'
  const HUBSPOT_FORM_GUID = '23793d75-627f-4c4b-b45a-da4e1ee63882'

  const hubspotResponse = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: body.firstname },
          { name: 'email', value: body.email },
          { name: 'website', value: body.website },
          { name: 'services', value: body.services },
          { name: 'growth_blocker', value: body.growth_blocker },
        ],
      }),
    }
  )

  const hubspotResult = await hubspotResponse.json()

  // Email transport
 {/*} const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL_USER,
      pass: process.env.MY_EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.MY_EMAIL_USER,
    to: ['hello@shitanshudigital.com', 'prathyusha@bluvodigital.com'],
    subject: '🔥 New Lead Submitted from Website',
    html: `
      <h2>New Form Submission</h2>
      <p><b>Name:</b> ${body.firstname}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Website:</b> ${body.website}</p>
      <p><b>Services:</b> ${body.services}</p>
      <p><b>Growth Blocker:</b> ${body.growth_blocker}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ Email sending failed:', error.message);
    } else {
      console.error('❌ Email sending failed:', error);
    }
  }*/}

  return NextResponse.json(hubspotResult)
}
