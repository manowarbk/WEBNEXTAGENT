import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Simple rule-based responses for now
    // This will be replaced with Eve agent integration once AI Gateway is fully configured
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
    
    let content = '';
    
    if (lastMessage.includes('mendix') || lastMessage.includes('low-code') || lastMessage.includes('low code')) {
      content = `Mendix là nền tảng Low-Code hàng đầu thế giới, cho phép doanh nghiệp xây dựng ứng dụng nhanh gấp 10 lần so với phương pháp truyền thống.

NextAgent là đối tác triển khai Mendix tại Việt Nam, chúng tôi cung cấp:
• Tư vấn và đào tạo Mendix
• Phát triển ứng dụng Low-Code theo yêu cầu
• Tích hợp hệ thống (ERP, CRM, API)
• Hỗ trợ và bảo trì sau triển khai

Bạn muốn tìm hiểu thêm về khía cạnh nào?`;
    } else if (lastMessage.includes('dịch vụ') || lastMessage.includes('service') || lastMessage.includes('cung cấp')) {
      content = `NextAgent cung cấp các dịch vụ chính:

🔹 **Mendix Low-Code Development** — Xây dựng ứng dụng doanh nghiệp nhanh chóng
🔹 **AI Agent Solutions** — Tích hợp trí tuệ nhân tạo vào quy trình kinh doanh
🔹 **ERP Implementation** — Triển khai hệ thống quản trị tài nguyên doanh nghiệp
🔹 **Omnichannel Solutions** — Giải pháp đa kênh thống nhất
🔹 **Digital Transformation Consulting** — Tư vấn chuyển đổi số toàn diện

Bạn quan tâm đến dịch vụ nào?`;
    } else if (lastMessage.includes('liên hệ') || lastMessage.includes('contact') || lastMessage.includes('đặt lịch') || lastMessage.includes('book')) {
      content = `Bạn có thể liên hệ NextAgent qua:

📧 Email: contact@nextagent.com.vn
📞 Hotline: 1900-xxxx
🌐 Website: https://nextagent.com.vn
📍 Địa chỉ: TP. Hồ Chí Minh, Việt Nam

Hoặc bạn có thể đặt lịch demo trực tiếp tại trang Book Demo trên website của chúng tôi!`;
    } else if (lastMessage.includes('ai agent') || lastMessage.includes('trí tuệ nhân tạo') || lastMessage.includes('artificial intelligence')) {
      content = `NextAgent chuyên xây dựng AI Agent thông minh cho doanh nghiệp:

🤖 **Chatbot & Virtual Assistant** — Tự động hỗ trợ khách hàng 24/7
📊 **Data Analytics AI** — Phân tích dữ liệu và dự báo thông minh
⚙️ **Process Automation** — Tự động hóa quy trình với AI
🔗 **AI Integration** — Tích hợp AI vào hệ thống hiện có

Công nghệ AI giúp doanh nghiệp tiết kiệm chi phí, tăng hiệu suất và nâng cao trải nghiệm khách hàng. Bạn muốn biết thêm chi tiết?`;
    } else if (lastMessage.includes('hello') || lastMessage.includes('hi') || lastMessage.includes('xin chào') || lastMessage.includes('chào')) {
      content = `Xin chào! 👋 Rất vui được hỗ trợ bạn!

Tôi là trợ lý ảo của NextAgent, tôi có thể giúp bạn tìm hiểu về:
• Giải pháp Mendix Low-Code
• Dịch vụ AI Agent
• Giải pháp ERP & Omnichannel
• Thông tin liên hệ và đặt lịch demo

Bạn cần hỗ trợ gì hôm nay?`;
    } else {
      content = `Cảm ơn câu hỏi của bạn! Tôi là trợ lý ảo của NextAgent — chuyên về Mendix Low-Code, AI Agent và Chuyển đổi số.

Bạn có thể hỏi tôi về:
• Nền tảng Mendix và Low-Code Development
• Giải pháp AI Agent cho doanh nghiệp
• Các dịch vụ của NextAgent
• Cách liên hệ hoặc đặt lịch demo

Hãy thử hỏi một trong các chủ đề trên nhé! 😊`;
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { content: 'Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
