export interface Industry {
  slug: string;
  icon: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  painPointsVi: string[];
  painPointsEn: string[];
  solutions: string[];
  color: string;
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "ban-le",
    icon: "Store",
    titleVi: "Bán lẻ",
    titleEn: "Retail",
    descVi: "Giải pháp số hoá toàn diện cho chuỗi bán lẻ — từ quản lý cửa hàng, POS, tồn kho đến loyalty program và omnichannel.",
    descEn: "Comprehensive digitization for retail chains — store management, POS, inventory, loyalty programs and omnichannel.",
    painPointsVi: [
      "Quản lý tồn kho thủ công, hay sai lệch",
      "Chưa kết nối đồng bộ online-offline",
      "Thiếu dữ liệu khách hàng và hành vi mua",
      "Quy trình vận hành chuỗi chưa chuẩn hoá",
    ],
    painPointsEn: [
      "Manual inventory management with frequent discrepancies",
      "Online-offline channels not synchronized",
      "Lack of customer data and purchase behavior insights",
      "Non-standardized chain operations",
    ],
    solutions: ["omnichannel-ecommerce", "supply-chain-tms", "mendix-low-code"],
    color: "#EF4444",
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: "phan-phoi",
    icon: "Network",
    titleVi: "Phân phối",
    titleEn: "Distribution",
    descVi: "Hệ thống quản lý phân phối hiện đại — DMS, TMS, route optimization — kiểm soát toàn bộ chuỗi cung ứng.",
    descEn: "Modern distribution management — DMS, TMS, route optimization — controlling the entire supply chain.",
    painPointsVi: [
      "Quản lý đại lý và nhà phân phối rời rạc",
      "Thiếu visibility trên toàn chuỗi vận chuyển",
      "Đặt hàng và thanh toán thủ công",
      "Khó kiểm soát promotions và trade spend",
    ],
    painPointsEn: [
      "Fragmented agent and distributor management",
      "Lack of visibility across the delivery chain",
      "Manual order and payment processes",
      "Difficult to control promotions and trade spend",
    ],
    solutions: ["supply-chain-tms", "erp-implementation", "mendix-low-code"],
    color: "#F59E0B",
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: "san-xuat",
    icon: "Factory",
    titleVi: "Sản xuất",
    titleEn: "Manufacturing",
    descVi: "Chuyển đổi số nhà máy với MES, ERP tích hợp, IoT monitoring — tăng OEE, giảm downtime, cải thiện chất lượng.",
    descEn: "Digitize manufacturing with MES, integrated ERP, IoT monitoring — increase OEE, reduce downtime, improve quality.",
    painPointsVi: [
      "Lập kế hoạch sản xuất thủ công, chậm",
      "Thiếu truy xuất nguồn gốc và quality traceability",
      "Máy móc thiếu monitoring real-time",
      "Tích hợp ERP với sàn sản xuất còn yếu",
    ],
    painPointsEn: [
      "Manual, slow production planning",
      "Lack of origin and quality traceability",
      "Insufficient real-time machine monitoring",
      "Weak ERP integration with production floor",
    ],
    solutions: ["erp-implementation", "ai-agent-automation", "mendix-low-code"],
    color: "#00D4AA",
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: "e-commerce",
    icon: "ShoppingBag",
    titleVi: "E-commerce",
    titleEn: "E-commerce",
    descVi: "Nền tảng TMĐT mạnh mẽ — từ website, app đến tích hợp các sàn Việt Nam, quản lý vận chuyển và thanh toán.",
    descEn: "Powerful e-commerce platforms — from websites, apps to Vietnamese marketplace integration, shipping and payment.",
    painPointsVi: [
      "Vận hành đa sàn rời rạc, tốn nguồn lực",
      "Tỷ lệ hoàn trả cao, khó quản lý",
      "Thiếu personalization cho khách hàng",
      "Logistics và fulfillment chưa tối ưu",
    ],
    painPointsEn: [
      "Fragmented multi-marketplace operations",
      "High return rates, difficult to manage",
      "Lack of customer personalization",
      "Non-optimized logistics and fulfillment",
    ],
    solutions: ["omnichannel-ecommerce", "ai-agent-automation", "custom-software"],
    color: "#0055FF",
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
];
