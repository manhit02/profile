"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
const translations = {
  vi: {
    sections: {
      hero: "Trang chủ",
      about: "Thông tin",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Sản phẩm",
    },
    hero: {
      name: "Đỗ Đình Mạnh",
      title: "Frontend Developer",
      subtitle:
        "Tạo ra trải nghiệm web tuyệt vời với React, Next.js và TypeScript",
      cta: "Khám phá thêm",
    },
    about: {
      title: "Về tôi",
      personalInfo: "Thông tin cá nhân",
      location: "Quê quán: Thanh Hóa, Việt Nam",
      experience: "Kinh nghiệm: 3+ năm Frontend Development",
      expertise: "Chuyên môn: React, Next.js, TypeScript",
      careerTitle: "Mục tiêu nghề nghiệp",
      careerDesc:
        "Frontend Developer đam mê tạo ra giao diện người dùng đẹp mắt và hiệu quả. Luôn học hỏi công nghệ mới để mang lại trải nghiệm tốt nhất cho người dùng.",
    },
    skills: {
      title: "Kỹ năng",
      frontend: "Frontend",
      styling: "Styling",
      tools: "Tools",
      other: "Other",
      react: "React",
      nextjs: "Next.js",
      typescript: "TypeScript",
      javascript: "JavaScript",
      tailwind: "Tailwind CSS",
      scss: "SCSS",
      grid: "CSS Grid",
      flexbox: "Flexbox",
      git: "Git",
      vscode: "VS Code",
      figma: "Figma",
      webpack: "Webpack",
      api: "REST API",
      responsive: "Responsive",
      performance: "Performance",
      seo: "SEO",
    },
    experience: {
      title: "Kinh nghiệm",
      company: "VTC Intecom",
      position: "Frontend Developer",
      period: "08/2023 - 02/2026",
      desc1: "Phát triển hơn 100+ màn hình từ thiết kế Figma sang HTML/CSS",
      desc2: "Tối ưu hóa hiệu suất: giảm thời gian load từ 4s xuống 1.8s",
      desc3: "Cải thiện điểm Lighthouse hơn 30%",
      desc4: "Đảm bảo responsive trên tất cả thiết bị",
    },
    projects: {
      title: "Dự án",
      newspaper: "Báo Điện Biên Phủ",
      newspaperDesc: "Website tin tức với thiết kế hiện đại",
      portal: "Cổng 1400",
      portalDesc: "Cổng thông tin doanh nghiệp",
      game: "Trang chủ SRO",
      gameDesc: "Website game với hiệu ứng động",
      exam: "Sát hạch số",
      examDesc: "Ứng dụng sát hạch online",
      viewProject: "Xem dự án →",
    },
    footer: {
      contact: "Liên hệ",
      email: "📧 Email",
      github: "🐙 GitHub",
      linkedin: "💼 LinkedIn",
      copyright: "© 2026 Đỗ Đình Mạnh. Tất cả quyền được bảo lưu.",
    },
  },
  en: {
    sections: {
      hero: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
    },
    hero: {
      name: "Do Dinh Manh",
      title: "Frontend Developer",
      subtitle:
        "Creating amazing web experiences with React, Next.js and TypeScript",
      cta: "Explore More",
    },
    about: {
      title: "About Me",
      personalInfo: "Personal Information",
      location: "Location: Thanh Hóa, Vietnam",
      experience: "Experience: 3+ years Frontend Development",
      expertise: "Expertise: React, Next.js, TypeScript",
      careerTitle: "Career Goals",
      careerDesc:
        "Frontend Developer passionate about creating beautiful and efficient user interfaces. Always learning new technologies to provide the best user experience.",
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      styling: "Styling",
      tools: "Tools",
      other: "Other",
      react: "React",
      nextjs: "Next.js",
      typescript: "TypeScript",
      javascript: "JavaScript",
      tailwind: "Tailwind CSS",
      scss: "SCSS",
      grid: "CSS Grid",
      flexbox: "Flexbox",
      git: "Git",
      vscode: "VS Code",
      figma: "Figma",
      webpack: "Webpack",
      api: "REST API",
      responsive: "Responsive",
      performance: "Performance",
      seo: "SEO",
    },
    experience: {
      title: "Experience",
      company: "VTC Intecom",
      position: "Frontend Developer",
      period: "08/2023 - 02/2026",
      desc1: "Developed over 100+ screens from Figma designs to HTML/CSS",
      desc2: "Performance optimization: reduced load time from 4s to 1.8s",
      desc3: "Improved Lighthouse score by over 30%",
      desc4: "Ensured responsive design across all devices",
    },
    projects: {
      title: "Projects",
      newspaper: "Dien Bien Phu Newspaper",
      newspaperDesc: "Modern news website with contemporary design",
      portal: "Portal 1400",
      portalDesc: "Enterprise information portal",
      game: "SRO Homepage",
      gameDesc: "Game website with dynamic effects",
      exam: "Digital Exam",
      examDesc: "Online examination application",
      viewProject: "View Project →",
    },
    footer: {
      contact: "Contact",
      email: "📧 Email",
      github: "🐙 GitHub",
      linkedin: "💼 LinkedIn",
      copyright: "© 2026 Do Dinh Manh. All rights reserved.",
    },
  },
};

const sections = [
  { id: "hero", labelKey: "hero" },
  { id: "about", labelKey: "about" },
  { id: "skills", labelKey: "skills" },
  { id: "experience", labelKey: "experience" },
  { id: "projects", labelKey: "projects" },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollToPosition =
        elementTop - windowHeight / 2 + elementHeight / 2;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2; // Center of viewport

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const elementCenter = elementTop + elementHeight / 2;

          if (Math.abs(scrollPosition - elementCenter) < elementHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Mạnh Dev
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 min-w-[100px] text-center cursor-pointer ${
                    activeSection === section.id
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium"
                  }`}
                >
                  {t.sections[section.labelKey as keyof typeof t.sections]}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                className="px-4 py-2 rounded-lg transition-all duration-300 min-w-[60px] text-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium border border-gray-200 cursor-pointer"
              >
                {language === "vi" ? "EN" : "VI"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl"
          >
            M
          </motion.div>
          <h1 className="text-6xl leading-normal font-bold mb-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.hero.name}
          </h1>
          <p className="text-2xl text-gray-600 mb-8">{t.hero.title}</p>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                {t.about.personalInfo}
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">
                    {t.about.location.split(":")[0]}:
                  </span>{" "}
                  {t.about.location.split(":")[1]}
                </p>
                <p>
                  <span className="font-semibold">
                    {t.about.experience.split(":")[0]}:
                  </span>{" "}
                  {t.about.experience.split(":")[1]}
                </p>
                <p>
                  <span className="font-semibold">
                    {t.about.expertise.split(":")[0]}:
                  </span>{" "}
                  {t.about.expertise.split(":")[1]}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                {t.about.careerTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.careerDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-linear-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              {t.skills.title}
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t.skills.frontend,
                skills: [
                  t.skills.react,
                  t.skills.nextjs,
                  t.skills.typescript,
                  t.skills.javascript,
                ],
                color: "from-green-400 to-blue-500",
              },
              {
                title: t.skills.styling,
                skills: [
                  t.skills.tailwind,
                  t.skills.scss,
                  t.skills.grid,
                  t.skills.flexbox,
                ],
                color: "from-purple-400 to-pink-500",
              },
              {
                title: t.skills.tools,
                skills: [
                  t.skills.git,
                  t.skills.vscode,
                  t.skills.figma,
                  t.skills.webpack,
                ],
                color: "from-orange-400 to-red-500",
              },
              {
                title: t.skills.other,
                skills: [
                  t.skills.api,
                  t.skills.responsive,
                  t.skills.performance,
                  t.skills.seo,
                ],
                color: "from-blue-400 to-indigo-500",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 bg-linear-to-br ${category.color}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-current rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              {t.experience.title}
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600">
                  {t.experience.company}
                </h3>
                <p className="text-gray-600">{t.experience.position}</p>
              </div>
              <p className="text-gray-500 mt-2 md:mt-0">
                {t.experience.period}
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 mt-2 shrink-0"></span>
                {t.experience.desc1}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 mt-2 shrink-0"></span>
                {t.experience.desc2}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 mt-2 shrink-0"></span>
                {t.experience.desc3}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 mt-2 shrink-0"></span>
                {t.experience.desc4}
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-linear-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              {t.projects.title}
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: t.projects.newspaper,
                url: "https://willowy-capybara-4bb7d1.netlify.app/",
                desc: t.projects.newspaperDesc,
                color: "from-blue-400 to-purple-500",
              },
              {
                name: t.projects.portal,
                url: "https://harmonious-cobbler-5604d2.netlify.app/",
                desc: t.projects.portalDesc,
                color: "from-green-400 to-blue-500",
              },
              {
                name: t.projects.game,
                url: "https://glowing-youtiao-b3fa34.netlify.app/",
                desc: t.projects.gameDesc,
                color: "from-purple-400 to-pink-500",
              },
              {
                name: t.projects.exam,
                url: "https://visionary-gumption-878b1c.netlify.app/",
                desc: t.projects.examDesc,
                color: "from-orange-400 to-red-500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(project.url, "_blank")}
              >
                <div
                  className={`w-full h-32 rounded-lg mb-6 bg-linear-to-br ${project.color} flex items-center justify-center text-white text-4xl font-bold`}
                >
                  {project.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  {t.projects.viewProject}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{t.footer.contact}</h3>
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:vipmanhvip9x@gmail.com"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.email}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/manhit02"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.github}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/manh-do-dinh-974306352"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.linkedin}
              </motion.a>
            </div>
            <p className="text-gray-400">{t.footer.copyright}</p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-linear-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-40"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
