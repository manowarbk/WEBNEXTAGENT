export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  solution: string;
  tagVi: string;
  tagEn: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  challengeVi: string;
  challengeEn: string;
  challengePointsVi?: string[];
  challengePointsEn?: string[];
  solutionVi: string;
  solutionEn: string;
  solutionPointsVi?: string[];
  solutionPointsEn?: string[];
  expansionStoryVi?: {
    title: string;
    desc: string;
    points: string[];
  };
  expansionStoryEn?: {
    title: string;
    desc: string;
    points: string[];
  };
  results: {
    metricVi: string;
    metricEn: string;
    value: string;
    icon: string;
  }[];
  testimonial?: {
    quoteVi: string;
    quoteEn: string;
    author: string;
    position: string;
  };
  featured: boolean;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "quan-tri-he-thong-cntt-ban-le",
    client: "Công Ty TNHH Bonali",
    industry: "ban-le",
    solution: "tu-van-chuyen-doi-so",
    tagVi: "Bán lẻ · Managed IT Services & AI",
    tagEn: "Retail · Managed IT Services & AI",
    titleVi: "Công Ty TNHH Bonali: Chuyển đổi số toàn diện & Hiện đại hoá hạ tầng CNTT",
    titleEn: "Bonali Co., Ltd: Comprehensive Digital Transformation & IT Infrastructure Modernization",
    descVi: "Cách Next Agent trở thành đối tác IT vận hành đáng tin cậy cho Công Ty TNHH Bonali, giúp doanh nghiệp ổn định hệ thống đa kênh và mở rộng hợp tác sang tư vấn chuyển đổi số toàn diện, ứng dụng AI.",
    descEn: "How Next Agent became a trusted Managed IT Services partner for Bonali Co., Ltd, stabilizing multichannel operations and expanding into digital transformation consulting & AI integration.",
    challengeVi: "Công Ty TNHH Bonali trước khi hợp tác vận hành hệ thống CNTT phân tán trên nhiều nền tảng, thiếu một đầu mối kỹ thuật thống nhất, dẫn đến nhiều sự cố gián đoạn và rủi ro vận hành.",
    challengeEn: "Prior to partnership, Bonali Co., Ltd operated fragmented IT systems across multiple platforms without unified technical management, leading to operational disruptions.",
    challengePointsVi: [
      "Hạ tầng CNTT (email, domain, hosting, website) thiếu giám sát tập trung, dễ gián đoạn khi hết hạn hoặc gặp sự cố an ninh.",
      "Dữ liệu và quyền truy cập trên Google Workspace chưa được quản trị chặt chẽ, tiềm ẩn rủi ro khi nhân sự biến động.",
      "Vận hành nghiệp vụ Kế toán, Kho hàng, CRM trên MISA còn nhiều thao tác thủ công, thiếu hỗ trợ kỹ thuật kịp thời.",
      "Hệ thống Ecommerce SAPO chưa đồng bộ mượt với kho hàng và các kênh bán, ảnh hưởng tốc độ xử lý đơn hàng.",
      "Quản lý tài khoản quảng cáo Facebook, TikTok, Google Ads phân tán, thiếu đầu mối kỹ thuật xử lý sự cố."
    ],
    challengePointsEn: [
      "IT infrastructure (email, domain, hosting, website) lacked centralized monitoring, prone to expiration and security incidents.",
      "Google Workspace user data and permissions were loosely managed, posing risks during staff turnover.",
      "MISA accounting, warehouse, and CRM operations involved heavy manual tasks without timely technical support.",
      "SAPO E-commerce platform lacked smooth sync with central inventory and channels, slowing order processing.",
      "Ad accounts on Facebook, TikTok, and Google Ads were fragmented without unified tech support for issues."
    ],
    solutionVi: "Next Agent triển khai mô hình Hỗ trợ hệ thống CNTT toàn diện (Managed IT Services), đóng vai trò như đội ngũ IT chuyên trách nội bộ cho Bonali chuẩn hóa theo hợp đồng phụ lục minh bạch.",
    solutionEn: "Next Agent deployed a comprehensive Managed IT Services framework, acting as a dedicated internal IT team for Bonali Co., Ltd with standardized transparent SLAs.",
    solutionPointsVi: [
      "Email Server & Hạ tầng: Quản lý, giám sát Domain, Hosting, Website; đảm bảo an ninh và gia hạn đúng hạn.",
      "Google Workspace: Quản trị người dùng, phân quyền an toàn, tự động sao lưu dữ liệu định kỳ.",
      "Thiết bị IT: Hỗ trợ chuẩn hóa cấu hình thiết bị cho nhân sự mới và xử lý sự cố kỹ thuật.",
      "Hệ thống MISA: Hỗ trợ nghiệp vụ Kế toán, Kho hàng, CRM; xử lý sự cố và tối ưu quy trình.",
      "Ecommerce SAPO: Đồng bộ tự động đơn hàng, tồn kho và báo cáo doanh thu đa kênh.",
      "Quảng cáo đa kênh: Giám sát kỹ thuật và hỗ trợ xử lý sự cố tài khoản Facebook, TikTok, Google Ads."
    ],
    solutionPointsEn: [
      "Email Server & Infrastructure: Monitoring Domain, Hosting, Website; securing uptime and timely renewals.",
      "Google Workspace: User administration, security permission controls, and automated routine data backups.",
      "IT Devices: Standardizing workstation setups for new employees and resolving hardware/software issues.",
      "MISA Systems: Supporting Accounting, Inventory, CRM workflows; troubleshooting and optimizing procedures.",
      "SAPO E-commerce: Automated synchronization of orders, stock levels, and multi-channel revenue analytics.",
      "Multi-channel Advertising: Technical monitoring and incident support for Facebook, TikTok, Google Ads accounts."
    ],
    expansionStoryVi: {
      title: "Từ Hỗ Trợ Vận Hành Đến Đối Tác Chuyển Đổi Số Toàn Diện",
      desc: "Từ nền tảng tin cậy xây dựng qua hợp đồng hỗ trợ hệ thống, Công Ty TNHH Bonali đã tiếp tục ký kết hợp đồng tư vấn IT mở rộng với Next Agent:",
      points: [
        "Tư vấn chiến lược CNTT tổng thể dài hạn cho doanh nghiệp",
        "Bảo trì và tối ưu toàn bộ hệ thống công nghệ thông tin & ứng dụng hiện có",
        "Tư vấn và triển khai ứng dụng AI vào quy trình vận hành, tự động hoá tác vụ và hỗ trợ ra quyết định"
      ]
    },
    expansionStoryEn: {
      title: "From Operations Support to Full Digital Transformation Partner",
      desc: "Building upon trusted operations support, Bonali Co., Ltd expanded partnership with Next Agent through long-term technology consulting:",
      points: [
        "Comprehensive long-term corporate IT strategy consulting",
        "Systematic maintenance & optimization of existing IT architecture & applications",
        "Consulting & deploying AI applications into daily workflows, task automation & decision support"
      ]
    },
    results: [
      { metricVi: "Giảm thời gian xử lý sự cố", metricEn: "Incident resolution time reduced", value: "60%", icon: "Clock" },
      { metricVi: "Uptime hệ thống CNTT", metricEn: "System uptime SLA", value: "99.9%", icon: "CheckCircle" },
      { metricVi: "Tốc độ đồng bộ SAPO & Kho", metricEn: "SAPO & Inventory sync speed", value: "3×", icon: "Zap" },
      { metricVi: "Hợp tác tư vấn mở rộng", metricEn: "Expanded AI & Consulting scope", value: "AI + IT", icon: "TrendingUp" },
    ],
    testimonial: {
      quoteVi: "Next Agent Tech không chỉ giải quyết triệt để các sự cố gián đoạn CNTT hàng ngày mà còn là người đồng hành đáng tin cậy giúp Bonali hoạch định chiến lược chuyển đổi số và đưa AI vào vận hành thực tế.",
      quoteEn: "Next Agent Tech not only completely resolved our daily IT bottlenecks but also became a trusted partner guiding Bonali's digital transformation and practical AI integration.",
      author: "Ban Giám Đốc",
      position: "Công Ty TNHH Bonali",
    },
    featured: true,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mykingdom-omnichannel",
    client: "TheBlueTSHIRT",
    industry: "ban-le",
    solution: "pos-loyalty",
    tagVi: "Bán lẻ · Omnichannel & Sales Incentive",
    tagEn: "Retail · Omnichannel & Sales Incentive",
    titleVi: "Đồng bộ vận hành khối bán lẻ và tính thưởng trên doanh số bán hàng",
    titleEn: "Retail operations synchronization & sales commission reward system",
    descVi: "Xây dựng hệ thống tính thưởng Incentive tự động theo doanh số bán hàng và tối ưu hóa vận hành khối bán lẻ cho TheBlueTSHIRT.",
    descEn: "Building automated Incentive reward calculation based on sales revenue and optimizing retail block operations for TheBlueTSHIRT.",
    challengeVi: "TheBlueTSHIRT cần đồng bộ hóa toàn bộ kênh bán lẻ và quản lý chính sách tính thưởng bán hàng minh bạch, thời gian thực cho đội ngũ nhân sự.",
    challengeEn: "TheBlueTSHIRT needed to synchronize all retail channels and establish a transparent, real-time sales incentive calculation for retail staff.",
    solutionVi: "Triển khai nền tảng vận hành bán lẻ thống nhất tích hợp POS, WMS và CRM. Xây dựng động cơ tính thưởng doanh số bán hàng tự động, chính xác.",
    solutionEn: "Deployed a unified retail operations platform integrating POS, WMS, and CRM. Built automated and accurate sales commission incentive engines.",
    results: [
      { metricVi: "Giảm thời gian xử lý đơn", metricEn: "Order processing time reduced", value: "65%", icon: "Clock" },
      { metricVi: "Độ chính xác tồn kho", metricEn: "Inventory accuracy", value: "99.2%", icon: "CheckCircle" },
      { metricVi: "Tăng trưởng doanh số bán lẻ", metricEn: "Retail revenue growth", value: "3.2×", icon: "TrendingUp" },
      { metricVi: "Điểm bán tích hợp", metricEn: "Points of sale integrated", value: "Multi-channel", icon: "Store" },
    ],
    testimonial: {
      quoteVi: "NEXT AGENT đã giúp chúng tôi chuyển đổi hoàn toàn cách vận hành — từ thủ công, rời rạc sang tự động hoá, liền mạch. Hệ thống tính thưởng doanh số mới giúp thúc đẩy mạnh mẽ động lực kinh doanh của nhân viên.",
      quoteEn: "NEXT AGENT completely transformed our operations — from manual and fragmented to automated and seamless. The new sales incentive engine strongly boosted employee sales motivation.",
      author: "Ban Quản Lý",
      position: "TheBlueTSHIRT",
    },
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "iwims-supply-chain",
    client: "IWIMS",
    industry: "phan-phoi",
    solution: "supply-chain-solutions",
    tagVi: "Phân phối · TMS / WMS Mendix",
    tagEn: "Distribution · TMS / WMS Mendix",
    titleVi: "Hệ thống quản lý kho và vận chuyển thông minh trên nền Mendix Low-Code",
    titleEn: "Smart warehouse and transportation management on Mendix Low-Code",
    descVi: "Giải pháp WMS & TMS tùy biến linh hoạt giúp kiểm soát toàn bộ chuỗi cung ứng và tự động hóa điều phối giao nhận.",
    descEn: "Flexible WMS & TMS solution enabling full supply chain control and automated transport dispatching.",
    challengeVi: "IWIMS cần hệ thống tích hợp để quản lý toàn bộ quy trình từ tiếp nhận hàng, lưu kho, xuất hàng đến theo dõi vận chuyển, thay thế spreadsheet và quy trình thủ công.",
    challengeEn: "IWIMS needed an integrated system to manage the entire process from goods receipt, warehousing, dispatch to shipping tracking, replacing spreadsheets and manual processes.",
    solutionVi: "Xây dựng hệ thống WMS + TMS tích hợp trên nền Mendix Low-Code, với module quản lý lộ trình vận chuyển, tối ưu hoá tuyến đường và tracking real-time.",
    solutionEn: "Built an integrated WMS + TMS on Mendix Low-Code platform, with shipping route management, route optimization, and real-time tracking.",
    results: [
      { metricVi: "Giảm chi phí vận chuyển", metricEn: "Transportation cost reduction", value: "28%", icon: "TrendingDown" },
      { metricVi: "Tốc độ xử lý đơn tăng", metricEn: "Order processing speed increase", value: "4×", icon: "Zap" },
      { metricVi: "Thời gian triển khai", metricEn: "Deployment time", value: "8 tuần", icon: "Clock" },
      { metricVi: "ROI năm đầu", metricEn: "First year ROI", value: "280%", icon: "DollarSign" },
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];
