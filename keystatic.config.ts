import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'NextAgent CMS' },
    navigation: {
      'Content': ['solutions', 'services', 'industries', 'caseStudies'],
    }
  },
  collections: {
    solutions: collection({
      label: 'Giải pháp',
      slugField: 'titleVi',
      path: 'content/solutions/*',
      format: { data: 'json' },
      schema: {
        titleVi: fields.slug({ name: { label: 'Tên Giải pháp (VI)' } }),
        titleEn: fields.text({ label: 'Tên Giải pháp (EN)' }),
        descVi: fields.text({ label: 'Mô tả ngắn (VI)', multiline: true }),
        descEn: fields.text({ label: 'Mô tả ngắn (EN)', multiline: true }),
        icon: fields.text({ label: 'Icon (lucide-react name, e.g., Layers)' }),
        color: fields.text({ label: 'Màu chủ đạo (Hex, e.g., #DC2626)' }),
        image: fields.text({ label: 'Ảnh minh họa (URL)' }),
        ctaVi: fields.text({ label: 'Nút CTA (VI)' }),
        ctaEn: fields.text({ label: 'Nút CTA (EN)' }),
        features: fields.array(
          fields.object({
            vi: fields.text({ label: 'Tính năng (VI)' }),
            en: fields.text({ label: 'Tính năng (EN)' }),
          }),
          { label: 'Các tính năng nổi bật', itemLabel: props => props.fields.vi.value }
        ),
      },
    }),
    services: collection({
      label: 'Dịch vụ',
      slugField: 'titleVi',
      path: 'content/services/*',
      format: { data: 'json' },
      schema: {
        titleVi: fields.slug({ name: { label: 'Tên Dịch vụ (VI)' } }),
        titleEn: fields.text({ label: 'Tên Dịch vụ (EN)' }),
        descVi: fields.text({ label: 'Mô tả ngắn (VI)', multiline: true }),
        descEn: fields.text({ label: 'Mô tả ngắn (EN)', multiline: true }),
        icon: fields.text({ label: 'Icon (lucide-react name)' }),
        color: fields.text({ label: 'Màu chủ đạo (Hex)' }),
        image: fields.text({ label: 'Ảnh minh họa (URL)' }),
        features: fields.array(
          fields.object({
            vi: fields.text({ label: 'Tính năng (VI)' }),
            en: fields.text({ label: 'Tính năng (EN)' }),
          }),
          { label: 'Tính năng cốt lõi', itemLabel: props => props.fields.vi.value }
        ),
      },
    }),
    industries: collection({
      label: 'Ngành',
      slugField: 'titleVi',
      path: 'content/industries/*',
      format: { data: 'json' },
      schema: {
        titleVi: fields.slug({ name: { label: 'Tên Ngành (VI)' } }),
        titleEn: fields.text({ label: 'Tên Ngành (EN)' }),
        descVi: fields.text({ label: 'Mô tả (VI)', multiline: true }),
        descEn: fields.text({ label: 'Mô tả (EN)', multiline: true }),
        color: fields.text({ label: 'Màu chủ đạo (Hex)' }),
        icon: fields.text({ label: 'Icon' }),
        image: fields.text({ label: 'Ảnh nền (URL hoặc đường dẫn)' }),
        painPointsVi: fields.array(fields.text({ label: 'Nỗi đau (VI)' }), { label: 'Các Nỗi đau/Vấn đề (VI)', itemLabel: props => props.value }),
        painPointsEn: fields.array(fields.text({ label: 'Nỗi đau (EN)' }), { label: 'Các Nỗi đau/Vấn đề (EN)', itemLabel: props => props.value }),
        benefitsVi: fields.array(fields.text({ label: 'Lợi ích (VI)' }), { label: 'Các Lợi ích (VI)', itemLabel: props => props.value }),
        benefitsEn: fields.array(fields.text({ label: 'Lợi ích (EN)' }), { label: 'Các Lợi ích (EN)', itemLabel: props => props.value }),
        solutions: fields.array(
          fields.relationship({ collection: 'solutions', label: 'Giải pháp' }),
          { label: 'Các giải pháp liên quan', itemLabel: props => props.value }
        ),
      },
    }),
    caseStudies: collection({
      label: 'Case Studies',
      slugField: 'client',
      path: 'content/case-studies/*',
      format: { data: 'json' },
      schema: {
        client: fields.slug({ name: { label: 'Tên Khách hàng' } }),
        industry: fields.text({ label: 'Ngành (Slug)' }),
        solution: fields.text({ label: 'Giải pháp chính (Slug)' }),
        titleVi: fields.text({ label: 'Tiêu đề (VI)' }),
        titleEn: fields.text({ label: 'Tiêu đề (EN)' }),
        tagVi: fields.text({ label: 'Tag (VI)' }),
        tagEn: fields.text({ label: 'Tag (EN)' }),
        descVi: fields.text({ label: 'Mô tả ngắn (VI)', multiline: true }),
        descEn: fields.text({ label: 'Mô tả ngắn (EN)', multiline: true }),
        challengeVi: fields.text({ label: 'Thách thức (VI)', multiline: true }),
        challengeEn: fields.text({ label: 'Thách thức (EN)', multiline: true }),
        challengePointsVi: fields.array(fields.text({ label: 'Điểm thách thức (VI)' }), { label: 'Các thách thức (VI)', itemLabel: props => props.value }),
        challengePointsEn: fields.array(fields.text({ label: 'Điểm thách thức (EN)' }), { label: 'Các thách thức (EN)', itemLabel: props => props.value }),
        solutionVi: fields.text({ label: 'Giải pháp áp dụng (VI)', multiline: true }),
        solutionEn: fields.text({ label: 'Giải pháp áp dụng (EN)', multiline: true }),
        solutionPointsVi: fields.array(fields.text({ label: 'Điểm giải pháp (VI)' }), { label: 'Các giải pháp (VI)', itemLabel: props => props.value }),
        solutionPointsEn: fields.array(fields.text({ label: 'Điểm giải pháp (EN)' }), { label: 'Các giải pháp (EN)', itemLabel: props => props.value }),
        expansionStoryVi: fields.object({
          title: fields.text({ label: 'Tiêu đề (VI)' }),
          desc: fields.text({ label: 'Mô tả (VI)', multiline: true }),
          points: fields.array(fields.text({ label: 'Điểm (VI)' }), { label: 'Các điểm nổi bật', itemLabel: props => props.value })
        }),
        expansionStoryEn: fields.object({
          title: fields.text({ label: 'Tiêu đề (EN)' }),
          desc: fields.text({ label: 'Mô tả (EN)', multiline: true }),
          points: fields.array(fields.text({ label: 'Điểm (EN)' }), { label: 'Các điểm nổi bật', itemLabel: props => props.value })
        }),
        image: fields.text({ label: 'Ảnh thumbnail' }),
        featured: fields.checkbox({ label: 'Nổi bật (Hiện trang chủ)', defaultValue: false }),
        testimonial: fields.object({
          quoteVi: fields.text({ label: 'Trích dẫn (VI)', multiline: true }),
          quoteEn: fields.text({ label: 'Trích dẫn (EN)', multiline: true }),
          author: fields.text({ label: 'Tác giả' }),
          position: fields.text({ label: 'Chức vụ' })
        }),
        results: fields.array(
          fields.object({
            metricVi: fields.text({ label: 'Tiêu chí (VI)' }),
            metricEn: fields.text({ label: 'Tiêu chí (EN)' }),
            value: fields.text({ label: 'Giá trị (vd: 28%)' }),
            icon: fields.text({ label: 'Icon (lucide-react)' }),
          }),
          { label: 'Kết quả đạt được', itemLabel: props => props.fields.metricVi.value }
        ),
      },
    }),
  },
});
