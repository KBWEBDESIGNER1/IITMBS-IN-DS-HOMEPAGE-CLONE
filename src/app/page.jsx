"use client";
import React from "react";
import * as Recharts from "recharts";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import * as MarkdownRenderer from "@/libraries/markdown-renderer";

function MainComponent() {
  const [programsOpen, setProgramsOpen] = React.useState(false);
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

  return (
    <div className="font-roboto bg-gray-100">
      <header className="bg-white text-gray-700 shadow-sm sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center">
              <img
                src="https://ucarecdn.com/968d69c7-359e-462f-a883-c113da4d1743/-/format/auto/"
                alt="IIT Madras Logo"
                className="h-12 transform hover:scale-105 transition-transform duration-200"
              />
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
                <div key={index} className="relative group">
                  <button className="flex flex-col items-center space-y-1 hover:text-[#6C0000] transition-colors">
                    <span className="text-xs lg:text-sm">{item}</span>
                    <i className="fas fa-chevron-down text-xs lg:text-sm"></i>
                  </button>
                  <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Option 1
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Option 2
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Option 3
                    </a>
                  </div>
                </div>
              ))}
              <a
                href="#"
                className="bg-[#6C0000] text-[#FFC107] px-3 lg:px-4 py-1 rounded-md font-semibold hover:bg-[#8B0000] transition-colors"
              >
                SIGN IN
              </a>
            </nav>
            <button className="md:hidden text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
      <div className="bg-[#6C0000] text-[#FFC107] p-3 text-center font-semibold animate-[slideIn_0.5s_ease-out] sticky top-[60px] z-40">
        Registration for January 2025 is now open! Last date: December 15, 2024
      </div>

      <main className="p-4">
        <div className="max-w-full mx-auto">
          <div className="mt-8 mb-[4rem]">
            <h2 className="text-3xl font-bold text-[#6C0000] mb-6 text-center animate-[fadeIn_1s_ease-out]">
              IITM BS Degree in Data Science
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div
                className="bg-[#6C0000] text-[#FFC107] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "0s" }}
              >
                <div className="text-5xl font-bold mb-2">
                  {studentCount.toLocaleString()}+
                </div>
                <div className="text-xl">
                  Students doing this program along with another degree
                </div>
              </div>
              <div
                className="bg-[#6C0000] text-[#FFC107] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-5xl font-bold mb-2">
                  {profCount.toLocaleString()}+
                </div>
                <div className="text-xl">
                  Working Professionals studying in the program
                </div>
              </div>
              <div
                className="bg-[#6C0000] text-[#FFC107] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-5xl font-bold mb-2">
                  {masterCount.toLocaleString()}+
                </div>
                <div className="text-xl">
                  Secured Admission to Masters/PhD programs within and outside
                  India
                </div>
              </div>
              <div
                className="bg-[#6C0000] text-[#FFC107] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-[fadeIn_1s_ease-out] text-center"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-5xl font-bold mb-2">
                  {gateCount.toLocaleString()}+
                </div>
                <div className="text-xl">
                  BS students in Top 100 Ranks of GATE Exam 2024
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg mb-6 flex flex-col md:flex-row animate-[scaleIn_0.5s_ease-out]">
            <div className="md:w-1/3 flex flex-col space-y-4">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
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
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-4xl font-extrabold mb-4 text-[#6C0000]">
                Welcome to IIT Madras
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                India's top technical institute, welcomes you to the world's
                first 4-year Bachelor of Science (BS) Degree in Data Science and
                Applications with options to exit earlier in the foundation,
                diploma or BSc degree level.  For the first time, you can work
                towards an undergraduate degree / diploma from an IIT regardless
                of your age, location, or academic backgrounds. More than 29000
                students currently studying with us in the program.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="bg-[#6C0000] text-[#FFC107] px-4 py-2 rounded-md font-semibold hover:bg-[#8B0000] transition-colors">
                  For more details
                </button>
                <button className="bg-[#6C0000] text-[#FFC107] px-4 py-2 rounded-md font-semibold hover:bg-[#8B0000] transition-colors">
                  For Fee structure
                </button>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="relative w-full" style={{ paddingTop: "37%" }}>
              <img
                src={imageSlides[currentImageSlide]}
                alt={`IIT Madras Campus View ${currentImageSlide + 1}`}
                className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500"
                style={{ opacity: 0, animation: "fadeIn 1s forwards" }}
              />
            </div>
            <button
              onClick={prevImageSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/75 transition-colors"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextImageSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/75 transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {imageSlides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageSlide ? "bg-gray-700" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Program Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-chalkboard-teacher text-xl mb-2"></i>
                <p>Learn from IIT Madras Faculty</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-book text-xl mb-2"></i>
                <p>Industry-aligned curriculum</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-clock text-xl mb-2"></i>
                <p>Flexible learning path</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-chart-line text-xl mb-2"></i>
                <p>Career advancement opportunities</p>
              </div>
            </div>
          </div>
          <div className="mt-8 overflow-hidden">
            <div className="flex space-x-8 animate-slideLogos">
              <img
                src="https://ucarecdn.com/acc263f3-f04a-43c8-b343-eecfc5101d3f/-/format/auto/"
                alt="ABP Network Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/7a03a6e2-e2b1-468e-9e56-6d670ce565a6/-/format/auto/"
                alt="Aditya Birla Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/f5123cff-f64b-46a7-a6e1-b4ae94f30933/-/format/auto/"
                alt="Amazon Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/6a90c340-4920-4841-81d5-482979f9ae10/-/format/auto/"
                alt="Applied Materials Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/b8f55341-10e0-4641-9f23-947e05b22f3d/-/format/auto/"
                alt="Bharat Forge Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/7e655016-bfc1-4ccb-b35c-8bc04c1188c0/-/format/auto/"
                alt="Capgemini Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/c3668a05-003c-42ee-bde4-2ae820a0d627/-/format/auto/"
                alt="Cargill Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/31af1241-79a9-44b4-8c38-3e2fdbc0569d/-/format/auto/"
                alt="Cisco Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/bf120b24-c39b-42ba-82aa-c7478c838396/-/format/auto/"
                alt="Cognizant Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/6faacb82-8f92-4517-83b5-b5e9f2b56d2f/-/format/auto/"
                alt="Course5i Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/49d97f17-a3d5-442f-940f-56265d1c669f/-/format/auto/"
                alt="Delhivery Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/bb6c7b57-c4ab-4327-9a97-5ec34dd59ece/-/format/auto/"
                alt="Deloitte Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/6fe73a1a-704d-44ce-991d-b2af8536763a/-/format/auto/"
                alt="DRDO Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/2e0b4a89-2b37-4f5a-be79-b01bf0a1db34/-/format/auto/"
                alt="Dun & Bradstreet Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/4a0abf1d-9e1f-4ec0-9253-e79c96c3a934/-/format/auto/"
                alt="Ecolab Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/d67969bc-b437-43f4-b0b5-1a200e0f2829/-/format/auto/"
                alt="Epsilon Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/353f9dcd-b69c-4058-be01-d0467fe3aefb/-/format/auto/"
                alt="Ernst and Young Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/c45f0bcf-886a-44be-8dbd-320c0f6f5555/-/format/auto/"
                alt="Ford Motor Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/76383d88-2dc5-485e-9124-bb0e559bab66/-/format/auto/"
                alt="Gavs Technology Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/869dc1d9-f5f4-4da7-8894-2df365bccccb/-/format/auto/"
                alt="Genpact Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/1a17d6db-34eb-4dcc-9119-c8e273bb2a5a/-/format/auto/"
                alt="HCL Tech Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/3105b3b8-99c1-4c49-9be4-27fec96db0ac/-/format/auto/"
                alt="HP Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/1103cd94-4e51-468e-a2c7-0251f60fa76c/-/format/auto/"
                alt="Indian Oil Corporation Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/c54e77f8-cb36-43a6-9eb3-46f719ef7fb7/-/format/auto/"
                alt="Intel Corporation Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/8ce98986-215b-4de2-a141-82917b6ad477/-/format/auto/"
                alt="L&T Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/38ecff24-3e01-4de5-9dc4-c047dc47bb8f/-/format/auto/"
                alt="Latentview Analytics Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/202ae010-b45c-43f2-b363-ca8d40210e68/-/format/auto/"
                alt="Logitech Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/82ccdf22-ac8f-4a29-9036-40ce988853a1/-/format/auto/"
                alt="Lowes India Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/0b36d3b2-0f14-455f-9cc8-2989191b6073/-/format/auto/"
                alt="Marlabs Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/c5c8fe14-f986-45c3-ad81-f6f33e30a311/-/format/auto/"
                alt="Medi Assist Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/9ef5f50b-3a5e-4d3c-acbf-1dc2e17efa75/-/format/auto/"
                alt="Microsoft Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/692bea6d-7b1d-4e00-981d-7e8a5cddd1a4/-/format/auto/"
                alt="Myntra Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/71a788a6-5d77-4ae8-a24c-7e06457bb74c/-/format/auto/"
                alt="Natwest Group Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/732ccf4a-fc4c-4921-baed-551165990d49/-/format/auto/"
                alt="Oracle Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/baf4c79d-961c-439c-914f-c737afba0814/-/format/auto/"
                alt="Pidilite Industries Limited Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/e14775e3-56c3-4603-8bb3-3108088e7d7f/-/format/auto/"
                alt="Rakuten India Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/9cc11fd0-9e5d-43fe-9059-d46952bce50a/-/format/auto/"
                alt="Sabio Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/c1912183-58b4-4fdd-86b6-77fea426387d/-/format/auto/"
                alt="Saint Gobain Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/e633fdb8-8676-46eb-b079-5d792c3d603c/-/format/auto/"
                alt="Samsung Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/8d7011b3-86d1-4e30-908f-05903848061a/-/format/auto/"
                alt="Schneider Electric Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/db196d7f-6e64-4f07-8bc3-26d16703cd1a/-/format/auto/"
                alt="Symphony AI Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/ed7f3301-cf54-4d07-b709-dc2f216ec6f9/-/format/auto/"
                alt="Syngenta Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/bd1cad52-2465-469d-ba03-03f20c465477/-/format/auto/"
                alt="Tech Mahindra Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/eee2366a-bf72-4384-9e6b-1eac392ebbd2/-/format/auto/"
                alt="Tiger Analytics Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/8dd94318-451c-4ece-84c3-e5f8336ba2c4/-/format/auto/"
                alt="Titan Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/5bcf9c24-bff0-4b08-8a53-4e71212369d2/-/format/auto/"
                alt="Tredence Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/13d107e3-550a-417d-9258-df5b465b7e81/-/format/auto/"
                alt="Verizon Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/11ff6cf2-83bc-4941-9b4a-135993231109/-/format/auto/"
                alt="VuNet Logo"
                className="h-20"
              />
              <img
                src="https://ucarecdn.com/108a9858-08b0-4f20-a371-03683269c69c/-/format/auto/"
                alt="Wipro Logo"
                className="h-20"
              />
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
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
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
        @keyframes slideLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        animation: slideLogos 32s linear infinite;
      `}</style>
    </div>
  );
}

export default MainComponent;