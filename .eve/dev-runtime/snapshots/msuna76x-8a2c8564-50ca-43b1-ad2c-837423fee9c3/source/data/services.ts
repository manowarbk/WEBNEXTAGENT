export interface Service {
  slug: string;
  icon: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  features: { vi: string; en: string }[];
  color: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "tu-van-chuyen-doi-so",
    icon: "Lightbulb",
    titleVi: "Tư vấn Chiến lược Chuyển đổi số",
    titleEn: "Digital Transformation Strategy Consulting",
    descVi: "Ứng dụng các phương pháp luận chuyển đổi số chuẩn mực toàn cầu, Next Agent đồng hành cùng doanh nghiệp khảo sát hiện trạng, phân tích mức độ sẵn sàng, kiến trúc giải pháp tối ưu và xây dựng lộ trình số hóa thiết thực, giúp giải phóng sức mạnh công nghệ tối đa.",
    descEn: "Applying global digital transformation methodologies, Next Agent partners with businesses to assess digital readiness, architect optimized solutions, and construct practical roadmap strategies.",
    color: "#0887C9",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    features: [
      { vi: "Khảo sát và đánh giá chỉ số sẵn sàng số hóa (Digital Readiness)", en: "Comprehensive digital readiness and maturity index assessment" },
      { vi: "Thiết kế Kiến trúc Doanh nghiệp tổng thể (Enterprise Architecture)", en: "High-level Enterprise Architecture and systems blueprint design" },
      { vi: "Chuẩn hóa và tối ưu quy trình nghiệp vụ (Business Process Re-engineering)", en: "Business Process Re-engineering (BPR) and workflows optimization" },
      { vi: "Hoạch định ngân sách dài hạn và phân kỳ đầu tư thông minh", en: "Long-term budgeting and intelligent phased investment planning" },
    ]
  },
  {
    slug: "erp-implementation",
    icon: "LayoutGrid",
    titleVi: "Tư vấn & Triển khai ERP",
    titleEn: "ERP Implementation and Consulting",
    descVi: "Tư vấn nghiệp vụ và triển khai các hệ thống phần mềm doanh nghiệp (ERP) đảm bảo tiến độ, chất lượng và phù hợp.",
    descEn: "Business consulting and implementation of enterprise resource planning (ERP) systems ensuring quality and business fit.",
    color: "#00D4AA",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    features: [
      { vi: "Triển khai ERP chuyên sâu", en: "In-depth ERP implementation" },
      { vi: "Phân tích quy trình và gap analysis", en: "Process analysis & gap analysis" },
      { vi: "Kiểm thử tự động & QA/QC", en: "Automated testing & QA/QC" },
      { vi: "Đào tạo & Chuyển giao công nghệ", en: "Training & Technology transfer" },
    ]
  },
  {
    slug: "datawarehouse-intelligence",
    icon: "Database",
    titleVi: "Kho dữ liệu & Báo cáo thông minh",
    titleEn: "Datawarehouse and Intelligence Report",
    descVi: "Xây dựng Datawarehouse tập trung và các hệ thống báo cáo BI thông minh giúp ra quyết định kinh doanh chính xác.",
    descEn: "Build centralized Datawarehouse and BI reporting systems to help make accurate business decisions.",
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      { vi: "Thiết kế Datawarehouse", en: "Datawarehouse design" },
      { vi: "Xử lý & làm sạch dữ liệu (ETL)", en: "Data processing & ETL" },
      { vi: "Xây dựng Dashboard BI trực quan", en: "Visual BI Dashboards" },
      { vi: "Phân tích dữ liệu & Báo cáo động", en: "Data analytics & Dynamic reporting" },
    ]
  },
  {
    slug: "pos-loyalty",
    icon: "CreditCard",
    titleVi: "Tư vấn & Triển khai Hệ thống POS & Khách Hàng Thân Thiết (Loyalty)",
    titleEn: "Omnichannel POS & Loyalty System Implementation",
    descVi: "Xây dựng trải nghiệm mua sắm liền mạch dựa trên các chuẩn mực quốc tế về quản lý bán lẻ. Next Agent giúp doanh nghiệp triển khai giải pháp điểm bán lẻ (POS) thế hệ mới, tối ưu hóa giao dịch đa kênh, thiết kế động cơ Loyalty thông minh để tự động hóa tích điểm, phân hạng thẻ thành viên và đồng bộ hóa tức thời với hệ thống ERP.",
    descEn: "Deliver seamless shopping experiences based on global retail management standards. Next Agent implements next-generation Point of Sale (POS) solutions, optimizing omnichannel transactions, designing intelligent Loyalty engines, and automating points accrual, membership tiers, and instant ERP synchronization.",
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      { vi: "Triển khai hệ thống POS đa nền tảng và vận hành ngoại tuyến (offline)", en: "Deploy multi-platform POS with offline operations capability" },
      { vi: "Động cơ Loyalty thông minh cấu hình tích điểm và phân hạng thẻ linh hoạt", en: "Intelligent Loyalty engine with flexible points rules and membership tiers" },
      { vi: "Khuyến mãi động và cá nhân hóa trải nghiệm khách hàng tại quầy", en: "Dynamic promotions and personalized customer experiences at checkouts" },
      { vi: "Tích hợp đồng bộ thời gian thực với ERP và quản lý kho tổng", en: "Real-time synchronization with ERP and central inventory systems" },
    ]
  },
  {
    slug: "tich-hop-he-thong",
    icon: "Network",
    titleVi: "Tích hợp hệ thống",
    titleEn: "System Integration",
    descVi: "Kết nối các hệ thống rời rạc, legacy systems với các nền tảng mới thông qua APIs, Middleware và Microservices.",
    descEn: "Connect siloed systems and legacy systems with new platforms via APIs, Middleware, and Microservices.",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    features: [
      { vi: "Thiết kế và phát triển API/Middleware", en: "API/Middleware design and development" },
      { vi: "Chuyển đổi dữ liệu & Data Migration", en: "Data transformation & Data Migration" },
      { vi: "Tích hợp ứng dụng on-premise với Cloud", en: "On-premise to Cloud integration" },
      { vi: "Kiến trúc Microservices", en: "Microservices architecture" },
    ]
  }
];
