import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/skit-erp.png" alt="SKIT-ERP Interface" />
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://skit-unsparsh.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  College ERP System with full function Local Chrome session
                  Data Management, User Creation, Seperate Panal for Admin and
                  User
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React.js, Javascript, & TailwindCSS for a
                fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/sparshgpt.png" alt="sparshGPT" />
              </div>
              <h2>
                <a
                  href="https://sparshgpt.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ChatGPT Clone with Groq API named it - SparshGPT. Made with
                  React.js and Node.js
                </a>
              </h2>
              {/* <a href="https://skit-unsparsh.netlify.app/">DEMO</a> */}
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/driveAd.png" alt="DriveAD Image" />
              </div>
              <h2>
                <a
                  href="https://drivead.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DriveAD - A Startup Showcase App
                </a>
              </h2>
            </div>

            <div className="w-full text-center mt-8">
              <a
                href="https://github.com/unsparsh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-white"
              >
                View More on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
