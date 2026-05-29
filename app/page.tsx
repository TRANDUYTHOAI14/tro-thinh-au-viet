"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    BatteryCharging,
    CalendarCheck,
    CheckCircle2,
    ChevronRight,
    Clock,
    Ear,
    Gauge,
    Globe,
    HeartHandshake,
    MapPin,
    MessageCircle,
    Music2,
    Phone,
    ShieldCheck,
    Sparkles,
    Star,
    Stethoscope,
    Volume2,
    Wrench,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});
const BRAND = "Trợ Thính Âu Việt";
const PHONE = "0931 702 768";
const PHONE_TEL = "0931702768";
const ADDRESS = "1079 Phan Văn Trị, P. Gò Vấp, TP.HCM";
const HOURS = "8h00 - 17h30";
const WORKING_DAYS = "Thứ 2 - Thứ 7";

const heroImage =
    "https://trothinhauviet.com/wp-content/uploads/2025/12/may-tro-thinh-au-viet.jpg";

const services = [{
        icon: Ear,
        name: "Máy trợ thính chính hãng",
        description: "Tư vấn các dòng máy trợ thính phù hợp với từng mức độ nghe kém, nhu cầu sử dụng và khả năng thao tác của khách hàng.",
        price: "Tư vấn theo nhu cầu",
        image: "https://tantrumbeer.com/wp-content/uploads/2025/04/man-holding-hearing-aid-.jpg",
        alt: "Máy trợ thính chính hãng tại Trợ Thính Âu Việt",
    },
    {
        icon: Stethoscope,
        name: "Đo thính lực & tư vấn",
        description: "Kiểm tra khả năng nghe, phân tích tình trạng thực tế và đề xuất giải pháp trợ thính phù hợp cho từng khách hàng.",
        price: "Liên hệ đặt lịch",
        image: "https://trothinhauviet.com/wp-content/uploads/2025/12/kham-thinh-luc-2-Tro-thinh-au-viet-scaled.jpg",
        alt: "Đo thính lực và tư vấn máy trợ thính",
    },
    {
        icon: Wrench,
        name: "Sửa chữa máy trợ thính",
        description: "Tiếp nhận kiểm tra, vệ sinh, xử lý lỗi âm thanh yếu, rè, mất tiếng hoặc máy hoạt động không ổn định.",
        price: "Kiểm tra trước khi báo giá",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
        alt: "Sửa chữa máy trợ thính chuyên nghiệp",
    },
    {
        icon: Gauge,
        name: "Bảo trì & hiệu chỉnh máy trợ thính",
        description: "Kiểm tra âm thanh, vệ sinh máy và điều chỉnh lại cài đặt để máy nghe rõ, êm tai và hoạt động ổn định hơn.",
        price: "Hỗ trợ sau bán",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZP077sk19psw8qijkFOVhW0Et94A44BQ_A&s",
        alt: "Hiệu chỉnh máy trợ thính tại Gò Vấp",
    },
    {
        icon: BatteryCharging,
        name: "Pin & phụ kiện trợ thính",
        description: "Cung cấp pin, núm tai, dây dẫn, phụ kiện thay thế và vật tư chăm sóc máy trợ thính.",
        price: "Có sẵn tại cửa hàng",
        image: "https://www.hab.online/wp-content/uploads/2023/04/Hearing-Aid-Batteries-300x300.jpeg",
        alt: "Pin và phụ kiện máy trợ thính",
    },
    {
        icon: HeartHandshake,
        name: "Chăm sóc khách hàng lớn tuổi",
        description: "Hướng dẫn sử dụng nhẹ nhàng, dễ hiểu, đồng hành cùng gia đình trong quá trình làm quen với máy.",
        price: "Tận tâm từng trường hợp",
        image: "https://s3.amazonaws.com/media.audiologydesign.com/wp-content/uploads/sites/331/2022/12/07205608/man-in-blue-shirt-seeing-his-audiologist-for-hearing-aid-evaluation.jpg",
        alt: "Tư vấn máy trợ thính cho người lớn tuổi",
    },
];

const trustBadges = [{
        icon: BadgeCheck,
        title: "Hàng Chính Hãng",
        text: "Máy trợ thính Mỹ - Đức - Thụy Sỹ",
    },
    {
        icon: Stethoscope,
        title: "Tư Vấn Theo Thính Lực",
        text: "Chọn máy theo tình trạng nghe thực tế",
    },
    {
        icon: ShieldCheck,
        title: "Bảo Trì & Hiệu Chỉnh",
        text: "Đồng hành sau bán, hỗ trợ sử dụng lâu dài",
    },
    {
        icon: MapPin,
        title: "Cửa Hàng Gò Vấp",
        text: "Dễ ghé trực tiếp tại Phan Văn Trị",
    },
];

const productCategories = [
  {
    name: "IIC - Siêu nhỏ trong tai",
    description: "Thiết kế cực nhỏ, nằm sâu trong ống tai, phù hợp khách cần sự kín đáo cao.",
    image: "/images/category-iic.jpg",
    href: "https://trothinhauviet.com/dich-vu-tro-thinh-au-viet/iic-sieu-nho-trong-tai/",
  },
  {
    name: "CIC - Nhỏ gọn trong tai",
    description: "Dòng máy nhỏ, thẩm mỹ, dễ sử dụng, phù hợp nhiều mức độ nghe kém.",
    image: "/images/category-cic.png",
    href: "https://trothinhauviet.com/dich-vu-tro-thinh-au-viet/cic-nho-gon-trong-tai/",
  },
  {
    name: "ITC - Trong tai",
    description: "Kích thước vừa phải, dễ thao tác, phù hợp người lớn tuổi cần sự tiện dụng.",
    image: "/images/category-itc.jpg",
    href: "https://trothinhauviet.com/dich-vu-tro-thinh-au-viet/itc-trong-tai/",
  },
  {
    name: "BTE - Sau tai",
    description: "Công suất mạnh, bền bỉ, phù hợp người nghe kém từ trung bình đến nặng.",
    image: "/images/category-bte.jpg",
    href: "https://trothinhauviet.com/dich-vu-tro-thinh-au-viet/bte-sau-tai/",
  },
  {
    name: "RIC / RITE - Loa trong tai",
    description: "Thiết kế hiện đại, âm thanh tự nhiên, đeo nhẹ và thẩm mỹ hơn.",
    image: "/images/category-ric.png",
    href: "https://trothinhauviet.com/dich-vu-tro-thinh-au-viet/ric-rite-loa-trong-tai/",
  },
  {
    name: "Pin & Phụ kiện",
    description: "Pin máy trợ thính, núm tai, dây dẫn, phụ kiện vệ sinh và thay thế.",
    image: "/images/pin.jpg",
    href: "https://trothinhauviet.com/san-pham/",
  },
];


const problems = [{
        title: "Nghe không rõ khi trò chuyện",
        text: "Người thân thường phải lặp lại nhiều lần, đặc biệt khi nói chuyện trong môi trường đông người hoặc có tiếng ồn.",
    },
    {
        title: "Lo chọn nhầm máy không phù hợp",
        text: "Mỗi mức độ nghe kém cần dòng máy và cách điều chỉnh khác nhau. Chọn sai có thể khiến âm thanh khó nghe hoặc đeo không thoải mái.",
    },
    {
        title: "Máy cũ nghe yếu, rè hoặc khó chịu",
        text: "Sau thời gian sử dụng, máy trợ thính có thể cần vệ sinh, kiểm tra hoặc điều chỉnh lại để âm thanh dễ nghe hơn.",
    },
];

const whyChooseUs = [{
        icon: Ear,
        title: "Tư vấn đúng nhu cầu nghe",
        text: "Lắng nghe tình trạng thực tế, thói quen sinh hoạt và khả năng thao tác để gợi ý giải pháp trợ thính phù hợp hơn.",
    },
    {
        icon: Wrench,
        title: "Có sửa chữa & bảo trì",
        text: "Hỗ trợ kiểm tra, vệ sinh, thay phụ kiện và hiệu chỉnh máy để thiết bị hoạt động ổn định, dễ nghe hơn.",
    },
    {
        icon: HeartHandshake,
        title: "Tận tâm với người lớn tuổi",
        text: "Hướng dẫn chậm rãi cách đeo, tháo, chỉnh âm lượng, thay pin và bảo quản máy để người dùng dễ làm quen.",
    },
    {
        icon: MapPin,
        title: "Địa chỉ rõ ràng tại TP.HCM",
        text: "Cửa hàng tại 1079 Phan Văn Trị, P. Gò Vấp, thuận tiện để khách hàng ghé tư vấn và kiểm tra trực tiếp..",
    },
];

const process = [{
        step: "01",
        title: "Gọi Zalo đặt lịch",
        text: "Liên hệ hotline để được hẹn thời gian tư vấn phù hợp, tránh chờ lâu tại cửa hàng.",
    },
    {
        step: "02",
        title: "Kiểm tra nhu cầu nghe",
        text: "Lắng nghe tình trạng, thói quen sinh hoạt và mức độ khó nghe của khách hàng.",
    },
    {
        step: "03",
        title: "Tư vấn máy phù hợp",
        text: "Đề xuất dòng máy, kiểu dáng, mức công suất và phụ kiện phù hợp với nhu cầu thực tế.",
    },
    {
        step: "04",
        title: "Hiệu chỉnh & hướng dẫn sử dụng",
        text: "Tinh chỉnh âm thanh, hướng dẫn đeo máy, bảo quản, thay pin và lịch bảo trì định kỳ.",
    },
];

const reviews = [{
        quote: "Ông năm nay đã ngoài 90, Trước đây Ông có đeo máy trong tai, đã được 4-5 năm.Nay Ông nâng cấp hỗ trợ bên Phải.Ông nói: Ông lớn tuổi rồi, muốn nghe rõ hơn, giao tiếp mỗi khi có nói chuyện với con ,cháu và khách đến thăm Ông.",
        name: "Ông Thanh, Gò Vấp",
        image: "/images/tro-thinh-1.jpg",
        alt: "Khách hàng lớn tuổi được tư vấn máy trợ thính tại Trợ Thính Âu Việt",
    },
    {
        quote: "Tôi mang máy cũ tới kiểm tra vì nghe rè. Cửa hàng vệ sinh và hiệu chỉnh lại, dùng ổn hơn hẳn.",
        name: "Cô Quỳnh, Bình Thạnh",
        image: "/images/tro-thinh-2.jpg",
        alt: "Khách hàng sử dụng máy trợ thính sau khi hiệu chỉnh",
    },
    {
        quote: "Địa chỉ dễ tìm, tư vấn rõ ràng, không ép mua. Có pin và phụ kiện sẵn nên rất tiện cho người lớn tuổi.",
        name: "Chị Lan, Phú Nhuận",
        image: "/images/tro-thinh-3.jpg",
        alt: "Khách hàng đeo máy trợ thính tại cửa hàng Trợ Thính Âu Việt",
    },
];

const faqs = [{
        question: "Người lớn tuổi mới dùng máy trợ thính có cần thời gian làm quen không?",
        answer: "Có. Tai và não cần thời gian thích nghi lại với âm thanh. Âu Việt sẽ hướng dẫn cách đeo, thời lượng sử dụng ban đầu và lịch hiệu chỉnh phù hợp.",
    },
    {
        question: "Máy trợ thính bị rè hoặc nghe yếu có sửa được không?",
        answer: "Tùy tình trạng máy. Cửa hàng sẽ kiểm tra, vệ sinh, đánh giá lỗi và tư vấn phương án sửa chữa hoặc hiệu chỉnh trước khi báo chi phí.",
    },
    {
        question: "Có bán pin và phụ kiện máy trợ thính không?",
        answer: "Có. Trợ Thính Âu Việt cung cấp pin, núm tai, phụ kiện thay thế và hỗ trợ hướng dẫn cách bảo quản để máy dùng bền hơn.",
    },
    {
        question: "Nên chọn máy trợ thính trong tai hay sau tai?",
        answer: "Việc lựa chọn phụ thuộc vào mức độ nghe kém, cấu trúc tai, thói quen sinh hoạt và khả năng thao tác của người dùng. Bạn nên đến cửa hàng để được tư vấn trực tiếp.",
    },
    {
        question: "Cửa hàng làm việc vào thời gian nào?",
        answer: `Trợ Thính Âu Việt làm việc từ ${HOURS}, ${WORKING_DAYS}, tại ${ADDRESS}.`,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

type SectionHeadingProps = {
    eyebrow ? : string;
    title: string;
    subtitle ? : string;
    light ? : boolean;
};

function SectionHeading({ eyebrow, title, subtitle, light = false }: SectionHeadingProps) {
    return (
        <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
            light ? "bg-white/10 text-emerald-100" : "bg-emerald-700/10 text-emerald-700"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-sans text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-emerald-50/80" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
    );
}

type CTAButtonProps = {
    children: React.ReactNode;
    href ? : string;
    variant ? : "primary" | "secondary" | "light";
    className ? : string;
};

function CTAButton({
    children,
    href = `tel:${PHONE_TEL}`,
    variant = "primary",
    className = "",
}: CTAButtonProps) {
    const base =
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-600/20";
    const styles = {
        primary: "bg-emerald-700 text-white shadow-lg shadow-emerald-900/15 hover:-translate-y-0.5 hover:bg-emerald-900",
        secondary: "border border-emerald-700/25 bg-white/80 text-emerald-800 backdrop-blur hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50",
        light: "bg-white text-emerald-800 shadow-lg shadow-emerald-950/20 hover:-translate-y-0.5 hover:bg-emerald-50",
    };

return (
  <a
    href={href}
    target={href.startsWith("http") ? "_top" : undefined}
    className={`${base} ${styles[variant]} ${className}`}
  >
    {children}
  </a>
);
}

export default function TroThinhAuVietLandingPage() {
  React.useEffect(() => {
    const sendHeight = () => {
      window.parent.postMessage(
        {
          type: "resize-iframe",
          height: document.documentElement.scrollHeight,
        },
        "*"
      );
    };

    sendHeight();

    window.addEventListener("load", sendHeight);
    window.addEventListener("resize", sendHeight);

    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("load", sendHeight);
      window.removeEventListener("resize", sendHeight);
      observer.disconnect();
    };
  }, []);
    return (
        <div className={`${montserrat.className} min-h-screen overflow-hidden bg-[#F7FAF6] text-slate-800 antialiased`}>
      <main>
        <section id="hero" className="relative isolate px-4 pb-16 pt-0 sm:px-6 sm:pb-24 lg:px-8 lg:pt-0">
          <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute -right-20 top-52 -z-10 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl" />
          <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-[0.06] [background-image:linear-gradient(120deg,#065f46_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="font-sans text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
  {BRAND} - Máy Trợ Thính Chính Hãng Mỹ, Đức, Thụy Sỹ Tại Gò Vấp
</h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
                Tư vấn máy trợ thính phù hợp theo nhu cầu nghe, hỗ trợ pin, sửa chữa, bảo trì và hiệu chỉnh máy. Đồng hành nhẹ nhàng cùng người lớn tuổi để nghe rõ hơn mỗi ngày.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <CTAButton href={`tel:${PHONE_TEL}`}>
                  <Phone className="h-5 w-5" />
                  Gọi Tư Vấn Ngay
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CTAButton>
<CTAButton href="https://trothinhauviet.com/dich-vu-tro-thinh-au-viet/" variant="secondary">
  <Volume2 className="h-5 w-5" />
  Xem Dịch Vụ
</CTAButton>
              </div>

              <div className="mt-8 grid gap-3 text-left text-sm text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/75 p-4 shadow-sm ring-1 ring-emerald-950/5">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-700" />
                  Tư vấn chọn máy theo tình trạng nghe
                </div>
                <div className="rounded-2xl bg-white/75 p-4 shadow-sm ring-1 ring-emerald-950/5">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-700" />
                  Sửa chữa, bảo trì, hiệu chỉnh máy
                </div>
                <div className="rounded-2xl bg-white/75 p-4 shadow-sm ring-1 ring-emerald-950/5">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-700" />
                  Làm việc {HOURS}, {WORKING_DAYS}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-300/35 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-2xl shadow-emerald-950/10">
                <img
                  src={heroImage}
                  alt="Tư vấn máy trợ thính chính hãng tại Trợ Thính Âu Việt Gò Vấp"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/92 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-sans text-lg font-semibold text-slate-950">Nghe rõ hơn, sống kết nối hơn</p>
                      <p className="mt-1 text-sm text-slate-600">Tư vấn tận tâm · hiệu chỉnh theo nhu cầu</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-700 p-3 text-white shadow-md">
                      <Ear className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Trust badges" className="px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto grid max-w-7xl gap-3 rounded-[2rem] border border-emerald-950/10 bg-white/70 p-3 shadow-sm backdrop-blur md:grid-cols-4"
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.title} className="flex items-start gap-4 rounded-3xl bg-emerald-50/70 p-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-700/10 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-950">{badge.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{badge.text}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </section>

        <section id="categories" className="px-4 py-20 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Danh mục sản phẩm"
      title="Chọn Dòng Máy Trợ Thính Phù Hợp Với Nhu Cầu"
      subtitle="Mỗi kiểu máy trợ thính có ưu điểm riêng về độ kín đáo, công suất, độ dễ thao tác và khả năng phù hợp với từng mức độ nghe kém."
    />

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {productCategories.map((category, index) => (
        <motion.article
          key={category.name}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-950/10"
        >
          <a href={category.href} target="_top" className="block">
            <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-800 shadow-sm backdrop-blur">
                Máy trợ thính
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-extrabold leading-snug text-slate-950">
                {category.name}
              </h3>

              <p className="mt-3 min-h-[4.5rem] text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-emerald-900">
                Xem sản phẩm
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </motion.article>
      ))}
    </div>
  </div>
</section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Vấn đề thường gặp"
              title="Nghe Rõ Hơn, Giao Tiếp Tự Tin Hơn Mỗi Ngày"
              subtitle="Máy trợ thính phù hợp giúp người nghe kém tiếp nhận âm thanh tốt hơn, giảm bất tiện khi trò chuyện và sinh hoạt cùng gia đình."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {problems.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-[1.75rem] border border-emerald-950/10 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-700 text-white">
                    <Volume2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute left-0 top-16 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,#04785720_0%,transparent_65%)] blur-2xl" />
          <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,#84cc1620_0%,transparent_62%)] blur-2xl" />

          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Dịch vụ chính"
              title="Máy Trợ Thính, Pin & Sửa Chữa Tận Tâm Tại TP.HCM"
              subtitle="Âu Việt hỗ trợ từ tư vấn chọn máy, thay pin, kiểm tra thính lực đến vệ sinh – hiệu chỉnh máy trợ thính, giúp khách hàng nghe thoải mái và ổn định hơn mỗi ngày."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                    whileHover={{ y: -8 }}
                    className="group rounded-[1.75rem] border border-emerald-950/10 bg-white/80 p-3 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-950/10"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-emerald-50">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-emerald-700/10 text-emerald-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-sans text-xl font-semibold text-slate-950">{item.name}</h3>
                      <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-600">{item.description}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <p className="text-sm font-extrabold text-emerald-700">{item.price}</p>
                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-900"
                          aria-label={`Liên hệ tư vấn ${item.name}`}
                        >
                          Tư vấn
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Vì sao chọn Âu Việt"
              title="Địa Chỉ Trợ Thính Đáng Tin Cậy Cho Gia Đình Tại Gò Vấp"
              subtitle="Âu Việt đồng hành từ tư vấn chọn máy, hướng dẫn sử dụng đến bảo trì sau bán, giúp khách hàng nghe thoải mái và an tâm hơn trong sinh hoạt hằng ngày."
              light
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-emerald-800">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-sans text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-emerald-50/80">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Quy trình tư vấn"
              title="4 Bước Đơn Giản Để Chọn Máy Trợ Thính Phù Hợp"
              subtitle="Quy trình rõ ràng giúp khách hàng và người thân yên tâm hơn trước khi quyết định sử dụng máy trợ thính."
            />

            <div className="grid gap-5 md:grid-cols-4">
              {process.map((item, index) => (
                <motion.article
                  key={item.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="relative rounded-[1.75rem] border border-emerald-950/10 bg-white p-6 shadow-sm"
                >
                  <p className="font-sans text-4xl font-semibold text-emerald-700/25">{item.step}</p>
                  <h3 className="mt-4 font-sans text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="relative bg-[#F0F7F2] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Khách hàng chia sẻ"
              title="Gia Đình Nói Gì Sau Khi Đến Trợ Thính Âu Việt?"
              subtitle="Những phản hồi tự nhiên từ khách hàng cần tư vấn máy trợ thính, sửa chữa và hiệu chỉnh máy tại TP.HCM."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((review, index) => (
                <motion.article
  key={review.name}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
  whileHover={{ y: -6 }}
  className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-950/10"
>
  <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
    <img
      src={review.image}
      alt={review.alt}
      className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />
    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-800 shadow-sm backdrop-blur">
      Khách hàng thực tế
    </div>
  </div>

  <div className="p-5">
    <div className="mb-4 flex gap-1 text-amber-500" aria-label="5 sao">
      {Array.from({ length: 5 }).map((_, starIndex) => (
        <Star key={starIndex} className="h-4 w-4 fill-current" />
      ))}
    </div>

    <MessageCircle className="mb-3 h-5 w-5 text-emerald-700" />

    <p className="text-sm leading-7 text-slate-600">
      “{review.quote}”
    </p>

    <p className="mt-4 font-bold text-slate-950">- {review.name}</p>
  </div>
</motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Câu hỏi thường gặp"
              title="FAQ Về Máy Trợ Thính, Pin Và Bảo Trì"
              subtitle="Một số câu hỏi phổ biến trước khi khách hàng đến cửa hàng để tư vấn hoặc kiểm tra máy."
            />

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                  className="group rounded-3xl border border-emerald-950/10 bg-white p-5 shadow-sm open:bg-emerald-50/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-emerald-700 transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto flex max-w-5xl flex-col items-center rounded-[2rem] bg-emerald-700 px-6 py-10 text-center text-white shadow-2xl shadow-emerald-900/20 sm:px-10"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-emerald-100">Đặt lịch tư vấn hôm nay</p>
            <h2 className="font-sans text-3xl font-semibold sm:text-4xl">Cần nghe rõ hơn? Hãy để Âu Việt hỗ trợ bạn chọn giải pháp phù hợp.</h2>
            <p className="mt-4 max-w-2xl text-emerald-50/85">
              Gọi hoặc nhắn Zalo để được tư vấn máy trợ thính chính hãng, kiểm tra máy cũ, mua pin và phụ kiện tại Gò Vấp.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={`tel:${PHONE_TEL}`} variant="light">
                <Phone className="h-5 w-5" />
                Gọi {PHONE}
              </CTAButton>
              <CTAButton href="#contact" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <CalendarCheck className="h-5 w-5" />
                Xem địa chỉ cửa hàng
              </CTAButton>
            </div>
          </motion.div>
        </section>
      </main>

      <footer id="contact" className="border-t border-emerald-950/10 bg-emerald-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <a href="#hero" className="flex items-center gap-3 font-sans text-2xl font-bold tracking-tight text-white">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-emerald-800">
                <Ear className="h-6 w-6" />
              </span>
              {BRAND}
            </a>
            <p className="mt-4 max-w-sm leading-7 text-emerald-50/75">
              Chìa khóa âm thanh của bạn. Phân phối máy trợ thính chính hãng, pin, sửa chữa, bảo trì và hiệu chỉnh máy tại TP.HCM.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-semibold text-white">Thông Tin Liên Hệ</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-50/75">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span>Hotline/Zalo: {PHONE}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span>Địa chỉ: {ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span>Giờ làm việc: {HOURS}</span>
              </li>
              <li className="flex gap-3">
                <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span>Lịch làm việc: {WORKING_DAYS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xl font-semibold text-white">Kết Nối Với Âu Việt</h3>
            <p className="mt-4 leading-7 text-emerald-50/75">
              Theo dõi thông tin sản phẩm, hướng dẫn sử dụng máy trợ thính và cập nhật phụ kiện mới.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Website Trợ Thính Âu Việt" className="grid h-11 w-11 place-items-center rounded-full bg-white text-emerald-800 shadow-sm transition hover:-translate-y-1 hover:bg-emerald-100">
                <Globe className="h-5 w-5" />
              </a>
              <a href={`tel:${PHONE_TEL}`} aria-label="Gọi Trợ Thính Âu Việt" className="grid h-11 w-11 place-items-center rounded-full bg-white text-emerald-800 shadow-sm transition hover:-translate-y-1 hover:bg-emerald-100">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Kênh video Trợ Thính Âu Việt" className="grid h-11 w-11 place-items-center rounded-full bg-white text-emerald-800 shadow-sm transition hover:-translate-y-1 hover:bg-emerald-100">
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-emerald-50/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BRAND}. Máy trợ thính chính hãng tại Gò Vấp, TP.HCM.</p>
          <p>SEO Local · Mobile-first · CRO-ready</p>
        </div>
      </footer>
    </div>
    );
}
