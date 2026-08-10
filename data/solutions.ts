export interface Solution {
  slug: string;
  icon: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  color: string;
  image: string;
  features: { vi: string; en: string }[];
  ctaVi: string;
  ctaEn: string;
}

export const solutions: Solution[] = [
  {
    slug: "mendix-low-code",
    icon: "Layers",
    titleVi: "Nền Tảng Low-Code Mendix",
    titleEn: "Mendix Low-Code Platform",
    descVi: "Next Agent mang đến giải pháp phát triển phần mềm đột phá thông qua Mendix - nền tảng Low-Code dẫn đầu toàn cầu. Chúng tôi loại bỏ các rào cản lập trình truyền thống để rút ngắn thời gian triển khai đến 10 lần, đồng thời đảm bảo kiến trúc Cloud-native bảo mật, khả năng tích hợp vô hạn và sự cộng tác tối đa giữa bộ phận Nghiệp vụ (Business) và Kỹ thuật (IT).",
    descEn: "Next Agent delivers breakthrough software development solutions via Mendix - the global leading Low-Code platform. We eliminate traditional coding bottlenecks to compress time-to-market by 10x, while ensuring secure Cloud-native architecture, infinite integration capability, and seamless collaboration between Business and IT teams.",
    color: "#0887C9",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    features: [
      { vi: "Phát triển ứng dụng tốc độ vượt trội (RAD) kết hợp kéo thả trực quan", en: "Rapid Application Development (RAD) with visual drag-and-drop modelers" },
      { vi: "Mô hình cộng tác liên tục (BizDevOps) phá vỡ khoảng cách Nghiệp vụ - Kỹ thuật", en: "Continuous collaboration (BizDevOps) bridging the gap between Business and IT" },
      { vi: "Kiến trúc Cloud-native hiện đại, tự động mở rộng và có độ tin cậy cấp doanh nghiệp", en: "Modern Cloud-native architecture with auto-scaling and enterprise-grade reliability" },
      { vi: "Khả năng mở rộng không giới hạn với custom Java/Javascript và API mở", en: "Infinite extensibility with custom Java/Javascript and open API integration" },
    ],
    ctaVi: "Trải nghiệm Low-Code ngay",
    ctaEn: "Experience Low-Code Now",
  },
  {
    slug: "supply-chain-solutions",
    icon: "Truck",
    titleVi: "Giải pháp Chuỗi Cung Ứng (Supply Chain Planning & TMS)",
    titleEn: "Supply Chain planning & TMS Solutions",
    descVi: "Lấy cảm hứng từ các tiêu chuẩn quản trị chuỗi cung ứng hiện đại, giải pháp của Next Agent giúp doanh nghiệp làm chủ luồng hàng hóa và thông tin. Từ hệ thống lập kế hoạch nhu cầu thông minh (Demand Planning), tối ưu hóa phân bổ kênh bán (Allocation), tự động hóa tích hợp hóa đơn điện tử E-invoice, quản lý chứng từ số đến tối ưu hóa lộ trình giao hàng (TMS) và kiểm kê kho thời gian thực.",
    descEn: "Inspired by global supply chain management standards, Next Agent's solutions empower businesses to master inventory and information flows. From intelligent demand planning, optimized multi-channel goods allocation, automated bi-directional E-invoice integration, digital document management, to Route Optimization (TMS) and real-time inventory control.",
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    features: [
      { vi: "Transportation Management System (TMS) tối ưu lộ trình và quản lý nhà xe thông minh", en: "Transportation Management System (TMS) optimizing routes and carrier collaboration" },
      { vi: "Phân bổ tồn kho tự động (Allocation) dựa trên tốc độ bán và nhu cầu thị trường", en: "Automated inventory allocation based on real-time sales velocity and demand signals" },
      { vi: "Tích hợp E-invoice & Số hóa toàn bộ quy trình chứng từ điện tử hai chiều", en: "E-invoice integration & complete bi-directional digitization of electronic documents" },
      { vi: "Quản lý kho hàng thông minh tích hợp kiểm kê quét mã vạch và quy trình giao nhận", en: "Smart warehouse management with barcode inventory counting and delivery workflows" },
    ],
    ctaVi: "Tối ưu hóa chuỗi cung ứng",
    ctaEn: "Optimize Your Supply Chain",
  },
  {
    slug: "360-kpi-management",
    icon: "Target",
    titleVi: "Hệ thống Quản lý Hiệu suất & Đánh giá Nhân viên 360",
    titleEn: "360 Employee Performance & KPI Evaluation",
    descVi: "Giải pháp quản trị nhân sự thế hệ mới giúp tối ưu hóa hiệu suất làm việc của đội ngũ. Tham chiếu các mô hình quản trị hiệu suất tiên tiến trên thế giới, hệ thống cung cấp công cụ theo dõi năng suất, thiết lập & phân rã mục tiêu (KPIs/OKRs), đánh giá 360 độ minh bạch và tự động hóa báo cáo hiệu quả công việc thời gian thực, liên kết trực tiếp với cơ chế tính thưởng và đãi ngộ.",
    descEn: "Next-gen HR management solutions designed to unlock employee productivity. Referencing advanced global performance frameworks, the system provides real-time productivity tracking, KPI/OKR cascading, multi-perspective 360-degree reviews, and automated performance analytics linked directly to incentives.",
    color: "#00D4AA",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      { vi: "Thiết lập và phân rã chỉ tiêu KPIs/OKRs từ cấp công ty đến từng nhân sự", en: "Define and cascade KPIs/OKRs from corporate level down to individuals" },
      { vi: "Đánh giá 360 độ toàn diện (Quản lý, Đồng nghiệp, Tự đánh giá và Khách hàng)", en: "Comprehensive 360-degree reviews (Manager, Peer, Self, and Customer feedback)" },
      { vi: "Theo dõi năng suất và tiến độ công việc thời gian thực trực quan", en: "Visual real-time productivity tracking and task progress monitoring" },
      { vi: "Báo cáo phân tích hiệu suất tự động và liên kết chính sách đãi ngộ linh hoạt", en: "Automated performance analytics and flexible reward integration" },
    ],
    ctaVi: "Nâng cao năng suất ngay",
    ctaEn: "Boost Productivity Now",
  },
  {
    slug: "intelligence-tools",
    icon: "Cpu",
    titleVi: "Bộ Công Cụ Quản Trị Thông Minh (Intelligence Tools)",
    titleEn: "Smart Management Tools (Intelligence Tools)",
    descVi: "Các công cụ AI Agent của Next Agent được thiết kế riêng để giải quyết các bài toán vận hành cụ thể cho doanh nghiệp bán lẻ, phân phối và sản xuất — từ công cụ Tự động chuyển đổi sao kê ngân hàng thành dữ liệu kế toán (Bank Statement AI) đến công cụ Kiểm kho thông minh AI (Smart Stocktake Agent), tích hợp trực tiếp với SAP, Microsoft Dynamics AX, MISA.",
    descEn: "Next Agent's AI Agent tools are custom-built to solve specific operational bottlenecks in retail, distribution, and manufacturing — from Bank Statement AI reconciliation to Smart Stocktake AI Agents, directly integrating with SAP, Microsoft Dynamics AX, and MISA.",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      { vi: "Bank Statement AI: Tự động trích xuất sao kê (PDF, Excel, Ảnh Scan) thành dữ liệu kế toán chuẩn hoá, giảm 90% thời gian đối soát", en: "Bank Statement AI: Automate statement extraction (PDF, Excel, Scan) into structured accounting data, reducing reconciliation time by 90%" },
      { vi: "Tích hợp ERP tài chính: Kết nối trực tiếp với SAP, Microsoft Dynamics AX, MISA & tương thích 40+ ngân hàng tại Việt Nam", en: "Financial ERP Integration: Direct sync with SAP, Microsoft Dynamics AX, MISA & compatible with 40+ banks in Vietnam" },
      { vi: "Smart Stocktake Agent: Kiểm kho AI tự động đối chiếu số liệu thực tế với ERP/WMS thời gian thực, phát hiện chênh lệch rủi ro", en: "Smart Stocktake Agent: AI inventory auditing real-time matching actual physical stock with ERP/WMS, detecting discrepancies instantly" },
      { vi: "Tối ưu chi phí & nhân lực: Giảm 80% thời gian kiểm kho, duy trì sai lệch dưới 1%, áp dụng không giới hạn danh mục kho & SKU", en: "Cost & Labor Optimization: Reduce stocktake time by 80%, keep inventory error below 1%, unlimited warehouse & SKU scalability" },
    ],
    ctaVi: "Đặt lịch demo sản phẩm",
    ctaEn: "Schedule Product Demo",
  },
];
