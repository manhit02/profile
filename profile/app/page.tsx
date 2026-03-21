"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { id: "about", label: "Thông tin" },
  { id: "skills", label: "Kỹ năng" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "projects", label: "Sản phẩm" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<string>("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Thông tin cá nhân</h2>
            <p>Họ tên: Đỗ Đình Mạnh</p>
            <p>Quê quán: Hà Nội</p>
            <p>Học vấn: (Bạn bổ sung thêm)</p>

            <h3 className="text-lg font-semibold">Mục tiêu nghề nghiệp</h3>
            <p>
              Frontend Developer gần 3 năm kinh nghiệm xây dựng website game và
              landing page marketing. Mong muốn phát triển chuyên sâu về
              React/NextJS.
            </p>
          </motion.div>
        );

      case "skills":
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Kỹ năng</h2>
            <p>
              <b>Frontend:</b> ReactJS, NextJS, TypeScript, Redux Toolkit
            </p>
            <p>
              <b>UI:</b> TailwindCSS, SCSS, CSS Grid, Flexbox
            </p>
            <p>
              <b>Tools:</b> Git, GitLab, Vite, Webpack
            </p>
            <p>
              <b>Khác:</b> REST API, Responsive Design, Mobile-first
            </p>
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Kinh nghiệm</h2>
            <h3 className="font-semibold">VTC Intecom (8/2023 - 2/2026)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>100+ màn hình từ Figma → HTML/CSS</li>
              <li>Load 4s → 1.8s</li>
              <li>+30% Lighthouse</li>
              <li>Responsive đa thiết bị</li>
              <li>Animation + teamwork</li>
              <li>Git + code review</li>
            </ul>
          </motion.div>
        );

      case "projects":
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Sản phẩm</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://willowy-capybara-4bb7d1.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Báo Điện Biên Phủ
                </Link>
              </li>
              <li>
                <Link
                  href="https://harmonious-cobbler-5604d2.netlify.app/
"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Cổng 1400
                </Link>
              </li>
              <li>
                <Link
                  href="https://glowing-youtiao-b3fa34.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Trang chủ SRO
                </Link>
              </li>
              <li>
                <Link
                  href="https://visionary-gumption-878b1c.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Sát hạch số
                </Link>
              </li>
            </ul>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Sidebar */}
      <div className="w-1/4 p-6 backdrop-blur-lg bg-white/5 border-r border-white/10">
        <h1 className="text-2xl font-bold mb-6">🔥 Mạnh Dev</h1>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`cursor-pointer p-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="w-3/4 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </div>
  );
}
