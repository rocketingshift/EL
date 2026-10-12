import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { CinemaHero } from "@/components/CinemaHero";
import { GovernanceCode } from "@/components/GovernanceCode";

// JSON-LD structured data (Article) — domain-agnostic, boosts rich results
const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MẬT MÃ QUẢN TRỊ — 5 Bài Học Thực Chiến Từ Elon Musk",
  description:
    "Giải mã 5 nguyên tắc quản trị sinh tử được viết bằng máu, mồ hôi và thử lửa trong những khoảnh khắc tăm tối nhất sự nghiệp của Elon Musk.",
  author: { "@type": "Organization", name: "Mật Mã Elon Musk" },
  publisher: { "@type": "Organization", name: "Mật Mã Elon Musk" },
  about: "Elon Musk · 5 nguyên tắc quản trị sinh tử",
  inLanguage: "vi-VN",
  keywords: ["Elon Musk", "quản trị", "first principles", "SpaceX", "Tesla"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MẬT MÃ QUẢN TRỊ — 5 Bài Học Thực Chiến Từ Elon Musk | AI 2027" },
      {
        name: "description",
        content:
          "Giải mã 5 nguyên tắc quản trị sinh tử được viết bằng máu, mồ hôi và thử lửa trong những khoảnh khắc tăm tối nhất sự nghiệp của Elon Musk.",
      },
      { property: "og:title", content: "MẬT MÃ QUẢN TRỊ — 5 Bài Học Thực Chiến Từ Elon Musk" },
      {
        property: "og:description",
        content:
          "Khám phá 5 mật mã quản trị: Khởi nghiệp & giữ nghiệp, Tư duy nguyên lý gốc, Quy trình 5 bước, Nhân sự xuất sắc và Triết lý tăng trưởng.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://preview-1791701220283744072.vibepreview.app/",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const handleScrollToGovernance = () => {
    const el = document.getElementById("governance-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-[#ede4ce] font-sans selection:bg-[#00d296]/30 selection:text-white">
        {/* Skip-to-content link for keyboard / screen-reader users */}
        <a
          href="#governance-section"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[var(--color-gold)] focus:text-black focus:font-mono focus:text-sm focus:shadow-lg"
        >
          Bỏ qua tới nội dung
        </a>

        {/* 1. CINEMA HERO COMPONENT */}
        <CinemaHero onScrollToTimeline={handleScrollToGovernance} />

        {/* Smooth gradient blend between Hero and Governance — no harsh visual break */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative -mt-32 h-32 sm:-mt-44 sm:h-44 z-20 bg-gradient-to-b from-transparent via-black/80 to-[#070709]"
        />

        {/* 2. MẬT MÃ QUẢN TRỊ (RESN #SCIENCE STYLE) */}
        <GovernanceCode />

        {/* JSON-LD structured data (Article) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }}
        />
      </div>
    </MotionConfig>
  );
}
