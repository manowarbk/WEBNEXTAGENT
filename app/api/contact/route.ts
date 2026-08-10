import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // TODO: Integrate with real Email service (e.g., Resend, SendGrid) or CRM here.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'admin@nextagent.com.vn',
    //   subject: 'New Demo Request',
    //   html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p>...`
    // });
    
    console.log('Received contact form submission:', body);
    
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
