import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, interest, message } = body;

    // Get SMTP Configuration
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const smtpFrom = process.env.SMTP_FROM || '"Next Agent Contact Form" <noreply@nextagent.com.vn>';
    const smtpTo = process.env.SMTP_TO || 'contact@nextagent.com.vn';

    console.log('Received contact form submission:', body);

    if (!smtpUser || !smtpPass) {
      console.warn('SMTP credentials are not configured. Logging submission to console only.');
      // Handle gracefully for development when credentials are empty
      return NextResponse.json({ 
        success: true, 
        message: 'Message processed (Dev Mode - Credentials missing)' 
      });
    }

    // Create a transport
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email content
    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject: `[NextAgent Website] Yêu cầu Demo / Tư vấn từ: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #0887C9; border-bottom: 2px solid #0887C9; padding-bottom: 10px; margin-top: 0;">Yêu cầu Demo / Tư vấn mới</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #555;">Họ và Tên:</td>
              <td style="padding: 8px 0; color: #333;">${name || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Số điện thoại:</td>
              <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}">${phone || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Công ty:</td>
              <td style="padding: 8px 0; color: #333;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Giải pháp quan tâm:</td>
              <td style="padding: 8px 0; color: #333;">${interest || 'Khác / Tư vấn chung'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0887C9; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #555;">Lời nhắn / Mô tả nhu cầu:</h4>
            <p style="margin: 0; color: #333; white-space: pre-wrap; line-height: 1.5;">${message || 'Không có lời nhắn.'}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 11px; color: #888; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
            Email này được gửi tự động từ hệ thống website NextAgent.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully to:', smtpTo);

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
