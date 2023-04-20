const nodemailer = require('nodemailer')

export default function handler(req, res) {
  if (req.method === 'POST') {
    async function main() {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        },
        rejectUnauthorized: false
      })

      let info = await transporter.sendMail({
        from: `${req.body.name}`,
        to: `${process.env.GMAIL_USER}`,
        subject: `${req.body.email}`,
        html: `<h3>${req.body.message}</h3><br/> phone number: <h4>${req.body.contact}</h4>`
      })

      console.log("message sent: %s", info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    }

    main().catch(console.error(`error`))
  }
}
