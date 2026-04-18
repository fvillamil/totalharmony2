import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email endpoint
  app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, phone, email, location, service, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: 'mailer@ax1oma.com',
          pass: 'K@nd4d0$',
        },
      });

      const htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background-color: #2a9d8f; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-family: serif;">Total Harmony</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">New Harmony Diagnosis Request</p>
          </div>
          <div style="padding: 40px; background-color: white;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">You have received a new request from the website form.</p>
            
            <div style="margin-top: 30px; border-left: 4px solid #e76f51; padding-left: 20px;">
              <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Name</p>
              <p style="margin: 5px 0 15px; font-size: 18px; color: #264653; font-weight: bold;">${firstName} ${lastName}</p>
              
              <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Contact Information</p>
              <p style="margin: 5px 0 15px; font-size: 16px; color: #264653;">
                📞 ${phone}<br/>
                ✉️ ${email}
              </p>
              
              <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Location</p>
              <p style="margin: 5px 0 15px; font-size: 16px; color: #264653;">${location}</p>
              
              <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Service of Interest</p>
              <p style="margin: 5px 0 15px; font-size: 16px; color: #e76f51; font-weight: bold;">${service}</p>
            </div>
            
            <div style="margin-top: 30px;">
              <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Message / Space Details</p>
              <p style="margin: 10px 0; font-size: 15px; color: #444; line-height: 1.6; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
                ${message}
              </p>
            </div>
          </div>
          <div style="background-color: #f4f1ea; padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Total Harmony Services contact form.</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: '"Total Harmony Mailer" <mailer@ax1oma.com>',
        to: 'freddyvillamil@ymail.com',
        subject: 'New Request for Free Total Harmony Diagnosis',
        html: htmlContent,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
