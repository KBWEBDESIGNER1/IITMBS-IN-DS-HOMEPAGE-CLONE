"use client";
import React from "react";
import * as Recharts from "recharts";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import * as MarkdownRenderer from "@/libraries/markdown-renderer";

function MainComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [currentImageSlide, setCurrentImageSlide] = React.useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = React.useState(0);
  const [studentCount, setStudentCount] = React.useState(0);
  const [profCount, setProfCount] = React.useState(0);
  const [masterCount, setMasterCount] = React.useState(0);
  const [gateCount, setGateCount] = React.useState(0);
  const imageSlides = [
    "https://ucarecdn.com/1e6c4a1a-2dba-49a9-b1b9-cbf132f36efa/-/format/auto/",
    "https://ucarecdn.com/99d56c95-323e-4605-a00f-6b23f4870120/-/format/auto/",
    "https://ucarecdn.com/0fd2aa31-484e-42c5-a5d5-d59865f53ac9/-/format/auto/",
    "https://ucarecdn.com/9c46e0d9-1b9f-4bad-9800-9f68c5ae1501/-/format/auto/",
    "https://ucarecdn.com/aa11b960-be0d-40ed-9a10-d3318e32eefc/-/format/auto/",
  ];
  const videoSlides = [
    "https://www.youtube.com/embed/VeNHdAPH-9A",
    "https://www.youtube.com/embed/lEMtlAqlJww",
    "https://www.youtube.com/embed/b0wrLw-Qyl0",
  ];
  const companyLogos = [
    "https://ucarecdn.com/70db313d-f0b0-4bef-9ccc-581f2fc5c412/-/format/auto/",
    "https://ucarecdn.com/d2ceafa5-91c7-4ecd-ad8b-06ee044e1a58/-/format/auto/",
    "https://ucarecdn.com/266a8d0e-17b9-43af-985e-14118f5d765b/-/format/auto/",
    "https://ucarecdn.com/16e2750e-1a9a-4ba9-9741-74817fc78a42/-/format/auto/",
    "https://ucarecdn.com/2340e961-efc5-429d-a39a-21d8f1aff000/-/format/auto/",
    "https://ucarecdn.com/bfff86aa-2eab-4c88-87fe-3d2a5b194a03/-/format/auto/",
    "https://ucarecdn.com/b22c9135-5eae-473a-abae-0242b63483f2/-/format/auto/",
    "https://ucarecdn.com/075f4e1f-5bb6-48d5-aea5-b01fb190e4e5/-/format/auto/",
    "https://ucarecdn.com/16b57630-bb7e-4434-b2bf-acdb746be408/-/format/auto/",
    "https://ucarecdn.com/42ea0c79-c6e2-4508-899f-e8863314bfdf/-/format/auto/",
    "https://ucarecdn.com/b4c63f27-8c8a-4969-a183-5e45cd6a65d0/-/format/auto/",
    "https://ucarecdn.com/2d47de90-4d3d-4d2a-8bb7-fc160e9ea722/-/format/auto/",
    "https://ucarecdn.com/49942426-d23a-4ad7-b2bc-56cb28e90128/-/format/auto/",
    "https://ucarecdn.com/5a052661-6f32-468c-9fe4-a0487a9c3cb6/-/format/auto/",
    "https://ucarecdn.com/d6a9663e-907d-4c9f-a678-64fee3ecefb2/-/format/auto/",
    "https://ucarecdn.com/db470397-0242-4c59-bd54-f731c307ecb4/-/format/auto/",
    "https://ucarecdn.com/6a2b7fb2-72be-4239-8dc5-e5356ff78295/-/format/auto/",
    "https://ucarecdn.com/cb5d243b-2ea1-42d6-90e3-788a60622aee/-/format/auto/",
    "https://ucarecdn.com/39e7706c-4fd7-42a4-ae54-d2d5b366adb5/-/format/auto/",
    "https://ucarecdn.com/677944b9-f0af-4c33-b2ec-a0d58bb60e4b/-/format/auto/",
    "https://ucarecdn.com/b015d8cc-b79f-4d05-94b1-b94ff7646ccd/-/format/auto/",
    "https://ucarecdn.com/771b6bc0-92fc-4ba6-a28f-8192a37be647/-/format/auto/",
    "https://ucarecdn.com/621ed4ce-a212-4df9-9076-29ecb7ec05af/-/format/auto/",
    "https://ucarecdn.com/ae2cf237-67aa-4d77-af9d-1e6e6428d0fd/-/format/auto/",
    "https://ucarecdn.com/7ea0cc91-1519-47f1-ba92-66f3f58ed16b/-/format/auto/",
    "https://ucarecdn.com/ecb71989-82cf-427b-9768-9b7db85a24d9/-/format/auto/",
    "https://ucarecdn.com/f83f7cf9-3001-49b4-8c0a-db8ee18c9ecb/-/format/auto/",
    "https://ucarecdn.com/9a006746-5c97-4974-9caf-5eae10a14d0a/-/format/auto/",
    "https://ucarecdn.com/855a3e53-b41a-4a55-b9d5-60a1e4f847a6/-/format/auto/",
    "https://ucarecdn.com/9508dab4-a1f8-4b96-94bd-93d8ecf28de1/-/format/auto/",
    "https://ucarecdn.com/57b82451-33ce-40a5-ade8-f7d53d3a3818/-/format/auto/",
    "https://ucarecdn.com/564562fb-818d-4510-832a-be5ca75c470c/-/format/auto/",
    "https://ucarecdn.com/e072f06b-6ec4-4968-ba67-8e385a895bdc/-/format/auto/",
    "https://ucarecdn.com/356a55c6-e658-45f4-b025-0b4bbba0fb24/-/format/auto/",
    "https://ucarecdn.com/d1537769-70df-422d-b33e-a24b3245913c/-/format/auto/",
    "https://ucarecdn.com/53973eeb-9bb6-4401-ab77-4fd2abf9bd1f/-/format/auto/",
    "https://ucarecdn.com/8cc7de13-8f3f-4cdd-80b4-b3957e99624f/-/format/auto/",
    "https://ucarecdn.com/1a9305ac-90ee-43fa-9b5e-705dffb7783f/-/format/auto/",
    "https://ucarecdn.com/ffc7061b-b197-434e-94be-272f4a770cb7/-/format/auto/",
    "https://ucarecdn.com/c76ca140-74a2-475a-aaa4-27580e7e631f/-/format/auto/",
    "https://ucarecdn.com/4f248e04-8b4d-4150-aea0-b2a686ca95a9/-/format/auto/",
    "https://ucarecdn.com/6bdc29f0-2f2e-4018-8c0f-f3f7ff22f871/-/format/auto/",
    "https://ucarecdn.com/ae2b524c-860d-4585-9de5-ec691f8cc6b6/-/format/auto/",
    "https://ucarecdn.com/925a758b-43c3-46eb-918b-d41238f7a44c/-/format/auto/",
    "https://ucarecdn.com/0d0d412b-947c-4201-93e3-53a418099f82/-/format/auto/",
    "https://ucarecdn.com/83843f1b-1734-49e7-869e-b7eb12fc8aee/-/format/auto/",
  ];

  React.useEffect(() => {
    const duration = 2000;
    const studentInterval = setInterval(() => {
      setStudentCount((prev) => Math.min(prev + 1000, 20000));
    }, duration / 20);
    const profInterval = setInterval(() => {
      setProfCount((prev) => Math.min(prev + 150, 3000));
    }, duration / 20);
    const masterInterval = setInterval(() => {
      setMasterCount((prev) => Math.min(prev + 42, 850));
    }, duration / 20);
    const gateInterval = setInterval(() => {
      setGateCount((prev) => Math.min(prev + 1, 20));
    }, duration / 20);

    return () => {
      clearInterval(studentInterval);
      clearInterval(profInterval);
      clearInterval(masterInterval);
      clearInterval(gateInterval);
    };
  }, []);

  React.useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentImageSlide((prev) =>
        prev === imageSlides.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [imageSlides.length]);

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) =>
      prev === imageSlides.length - 1 ? 0 : prev + 1
    );
  };
  const prevImageSlide = () => {
    setCurrentImageSlide((prev) =>
      prev === 0 ? imageSlides.length - 1 : prev - 1
    );
  };
  const nextVideoSlide = () => {
    setCurrentVideoSlide((prev) =>
      prev === videoSlides.length - 1 ? 0 : prev + 1
    );
  };
  const prevVideoSlide = () => {
    setCurrentVideoSlide((prev) =>
      prev === 0 ? videoSlides.length - 1 : prev - 1
    );
  };
  const scrollToStats = () => {
    document
      .getElementById("stats-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-roboto bg-gray-100">
      <header className="bg-white text-[#800000] shadow-lg sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center">
              <img
                src="https://ucarecdn.com/d3811688-c73b-4867-976f-f1c490211635/-/format/auto/"
                alt="IIT Madras Logo"
                className="h-10 transform hover:scale-110 transition-transform duration-300"
              />
              <span className="ml-2 text-lg font-bold"></span>
            </a>
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {[
                "Academics",
                "Admissions",
                "Resources",
                "Student Life",
                "School Connect",
                "Achievements",
                "Events",
                "FAQ",
                "About IITM",
                "Partnerships",
                "Placements",
              ].map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === index ? null : index
                      )
                    }
                    className="flex flex-col items-center space-y-1 hover:text-[#FFC107] transition-colors duration-300"
                  >
                    <span className="text-xs lg:text-sm">{item}</span>
                    <i className="fas fa-chevron-down text-xs lg:text-sm transform transition-transform duration-300 ease-in-out"></i>
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute w-48 bg-white text-[#800000] shadow-xl rounded-md mt-2 transform opacity-100 transition-all duration-300 ease-in-out">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300"
                      >
                        Option 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300"
                      >
                        Option 3
                      </a>
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#"
                className="bg-[#FFA500] text-[#800000] px-3 lg:px-4 py-1 rounded-md font-semibold hover:bg-[#FF8C00] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                SIGN IN
              </a>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              <i
                className={`fas ${
                  mobileMenuOpen ? "fa-times" : "fa-bars"
                } transition-transform duration-300`}
              ></i>
            </button>
          </div>
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <nav className="mt-4 space-y-2">
              {[
                "Academics",
                "Admissions",
                "Resources",
                "Student Life",
                "School Connect",
                "Achievements",
                "Events",
                "FAQ",
                "About IITM",
                "Partnerships",
                "Placements",
              ].map((item, index) => (
                <div key={index} className="group">
                  <button className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300">
                    <span>{item}</span>
                    <i className="fas fa-chevron-down transform group-hover:rotate-180 transition-transform duration-300 ease-in-out"></i>
                  </button>
                  <div className="bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-48">
                    <a
                      href="#"
                      className="block px-8 py-2 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-8 py-2 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-8 py-2 hover:bg-gray-100 hover:text-[#6C0000] transition-colors duration-300"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              ))}
              <div className="px-4 py-2">
                <a
                  href="#"
                  className="block w-full bg-[#FFA500] text-[#800000] px-4 py-2 rounded-md font-semibold hover:bg-[#FF8C00] transition-colors duration-200 text-center shadow-md hover:shadow-lg"
                >
                  SIGN IN
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div
        className="bg-[#6C0000] text-[#FFC107] p-2 text-center font-semibold sticky top-[52px] z-40"
        style={{ animation: "pulse 2s infinite" }}
      >
        Registration for January 2025 is now open! Last date: December 15, 2024
      </div>

      <main>
        <div className="relative w-full h-[60vh]">
          <img
            src="https://ucarecdn.com/9950443d-98e0-4676-805a-9d66f7c3a72d/-/format/auto/"
            alt="IIT Madras"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center mt-0">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-crimson-text font-bold text-white animate-[fadeIn_2s_ease-out] text-center mb-4 shadow-lg">
                IIT Madras
              </h1>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#FFC107] animate-[fadeIn_2s_ease-out] text-center shadow-lg mb-8">
                BS Degree
              </h2>
              <button
                onClick={scrollToStats}
                className="bg-[#6C0000] text-[#FFC107] px-6 py-3 rounded-md font-semibold hover:bg-[#8B0000] transition-all duration-300 transform hover:scale-105 animate-[fadeIn_2s_ease-out] flex items-center gap-2"
              >
                Explore <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-full mx-auto p-2 md:p-4">
          <div id="stats-section" className="mt-4 md:mt-8 mb-8 md:mb-[4rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#6C0000] mb-4 md:mb-6 text-center animate-[fadeIn_1s_ease-out] px-2">
              BS Degree in Data Science
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2">
              <div
                className="bg-[#6C0000] text-[#FFC107] p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "0s" }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {studentCount.toLocaleString()}+
                </div>
                <div className="text-base md:text-xl">
                  Students doing this program along with another degree
                </div>
              </div>
              <div
                className="bg-[#6C0000] text-[#FFC107] p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {profCount.toLocaleString()}+
                </div>
                <div className="text-base md:text-xl">
                  Working Professionals studying in the program
                </div>
              </div>
              <div
                className="bg-[#6C0000] text-[#FFC107] p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {masterCount.toLocaleString()}+
                </div>
                <div className="text-base md:text-xl">
                  Secured Admission to Masters/PhD programs within and outside
                  India
                </div>
              </div>
              <div
                className="bg-[#6C0000] text-[#FFC107] p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {gateCount.toLocaleString()}+
                </div>
                <div className="text-base md:text-xl">
                  BS students in Top 100 Ranks of GATE Exam 2024
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 md:p-6 rounded-lg mb-6 flex flex-col md:flex-row animate-[scaleIn_0.5s_ease-out] mx-2">
            <div className="w-full md:w-1/3 flex flex-col space-y-4">
              <div className="relative w-full" style={{ paddingTop: "55.25%" }}>
                <iframe
                  src={videoSlides[currentVideoSlide]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  onClick={prevVideoSlide}
                  className="bg-black/50 text-white px-3 py-1 rounded hover:bg-black/75 transition-colors"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextVideoSlide}
                  className="bg-black/50 text-white px-3 py-1 rounded hover:bg-black/75 transition-colors"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-[#6C0000]">
                Welcome to IIT Madras
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                India's top technical institute, welcomes you to the world's
                first 4-year Bachelor of Science (BS) Degree in Data Science and
                Applications with options to exit earlier in the foundation,
                diploma or BSc degree level. For the first time, you can work
                towards an undergraduate degree / diploma from an IIT regardless
                of your age, location, or academic backgrounds. More than 29000
                students currently studying with us in the program.
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
                <button className="bg-[#6C0000] text-[#FFC107] px-4 py-2 rounded-md font-semibold hover:bg-[#8B0000] transition-colors w-full md:w-auto">
                  For more details
                </button>
                <button className="bg-[#6C0000] text-[#FFC107] px-4 py-2 rounded-md font-semibold hover:bg-[#8B0000] transition-colors w-full md:w-auto">
                  For Fee structure
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#6C0000] w-full py-12 mt-8">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFC107] text-center mb-8">
                Program Highlights & Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#8B0000] p-6 rounded-lg shadow-xl">
                  <i className="fas fa-graduation-cap text-[#FFC107] text-4xl mb-4"></i>
                  <h3 className="text-[#FFC107] text-xl font-bold mb-3">
                    Academic Excellence
                  </h3>
                  <ul className="text-white space-y-2">
                    <li>• World-class curriculum</li>
                    <li>• Industry-relevant coursework</li>
                    <li>• Hands-on learning experience</li>
                  </ul>
                </div>
                <div className="bg-[#8B0000] p-6 rounded-lg shadow-xl">
                  <i className="fas fa-laptop-code text-[#FFC107] text-4xl mb-4"></i>
                  <h3 className="text-[#FFC107] text-xl font-bold mb-3">
                    Flexible Learning
                  </h3>
                  <ul className="text-white space-y-2">
                    <li>• Learn at your own pace</li>
                    <li>• Multiple exit options</li>
                    <li>• Online & hybrid modes</li>
                  </ul>
                </div>
                <div className="bg-[#8B0000] p-6 rounded-lg shadow-xl">
                  <i className="fas fa-chart-bar text-[#FFC107] text-4xl mb-4"></i>
                  <h3 className="text-[#FFC107] text-xl font-bold mb-3">
                    Career Opportunities
                  </h3>
                  <ul className="text-white space-y-2">
                    <li>• Industry partnerships</li>
                    <li>• Placement assistance</li>
                    <li>• Networking events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative px-2">
            <div className="relative w-full" style={{ paddingTop: "36.25%" }}>
              <img
                src={imageSlides[currentImageSlide]}
                alt={`IIT Madras Campus View ${currentImageSlide + 1}`}
                className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500"
                style={{ opacity: 0, animation: "fadeIn 1s forwards" }}
              />
            </div>
            <button
              onClick={prevImageSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-black/75 transition-colors"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextImageSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-black/75 transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {imageSlides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentImageSlide ? "bg-gray-700" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden relative">
            <div className="flex space-x-4 md:space-x-8 animate-[slideIn_30s_linear_infinite] whitespace-nowrap">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  className="h-12 md:h-20 transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#6C0000] text-white p-8">
        <div className="max-w-full mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>support@study.iitm.ac.in</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>7850999966</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                IITM BS Degree Office, 3rd Floor, ICSR Building, IIT Madras,
                Chennai - 600036
              </span>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Important Information</h4>
            <p>
              Please use ONLY the above methods for any queries regarding the
              program. Our normal response time is 3 working days. It might take
              a little longer during busy periods. We will share Google Meet
              links during such periods. Due to the high volume of calls we
              receive every day, there might be long wait times. In some cases,
              you might have to call multiple times to successfully connect to
              us.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>&copy; 2024 IIT Madras. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              View Site Map
            </a>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes slideIn {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
          }
          50% {
            transform: scale(1.05);
            text-shadow: 0 0 20px rgba(255, 193, 7, 0.8);
          }
          100% {
            transform: scale(1);
            text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
          }
        }
        .group:hover .group-hover\:max-h-48 {
          max-height: 12rem;
          transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;