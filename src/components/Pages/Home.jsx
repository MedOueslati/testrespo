import React from "react";
import NavBar from "../Layout/Navbar";
import Header from "../Layout/Header";
import BackgroundWrapper from "../Layout/BackgroundWrapper";
// Import assets
import robotimg from "../assets/images/robot-holding-light-bulb.jpg";
import section2img from "../assets/images/man.jpeg"; // New image for second section
import videoSource from "../assets/video/video.mp4"; // Background video
import { FaRocket, FaLightbulb, FaCogs } from "react-icons/fa"; // Icons

const Home = () => {
  // ServiceItem Component
  const ServiceItem = ({ icon, title, iconColor }) => (
    <div className="flex items-left space-x-4">
      <div className={`text-3xl ${iconColor}`}>{icon}</div>
      <p className="text-lg text-gray-800">{title}</p>
    </div>
  );

  const services = [
    { icon: <FaRocket />, title: "Web Design & Développement", iconColor: "text-customBlue" },
    { icon: <FaLightbulb />, title: "Création de Contenu", iconColor: "text-yellow-500" },
    { icon: <FaCogs />, title: "Optimisation et automatisation", iconColor: "text-gray-600" },
    { icon: <FaRocket />, title: "L'Identité Visuelle & Branding", iconColor: "text-customBlue" },
    { icon: <FaLightbulb />, title: "Stratégie Digitale & Marketing", iconColor: "text-yellow-500" },
    { icon: <FaCogs />, title: "SEO & Analyse de Performance", iconColor: "text-gray-600" },
  ];

  return (
    <>
      {/* Background Section with Video */}
      <BackgroundWrapper videoSource={videoSource}>
        <NavBar />
        <Header />
      </BackgroundWrapper>

      {/* Main Content */}
      <div className="container mx-auto py-12 sm:py-24 space-y-12 sm:space-y-24">
        {/* First Section */}
        <section className="text-gray-600 body-font">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 items-left ">
            {/* Left Content */}
            <div className="text-left md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900  ">
                L’AGENCE QUI FAIT <br />
                BRILLER VOTRE MARQUE
              </h1>
              <p className="mb-8 leading-relaxed animate-custom pt-12">
                <strong>Duo Weslati Agency</strong> crée des solutions
                sur-mesure qui mettent en valeur votre marque à travers un
                accompagnement global : de l'identité visuelle à la création de
                sites web modernes et impactants. Nous combinons créativité,
                innovation et expertise pour répondre à vos besoins uniques.
              </p>

              <button className="inline-flex text-white bg-customBlue border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">
                Demandez un devis
              </button>
            </div>

            {/* Right-aligned Image */}
            <div className="w-full md:w-5/6 lg:max-w-lg">
              <img
                className="object-cover object-left rounded"
                alt="Agency branding"
                src={robotimg}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* New Section */}
        <section className="text-gray-600 body-font bg-[#bfcfcf] py-12">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      DES RÉALISATIONS QUI
                      TÉMOIGNENT DE NOTRE
                      EXPERTISE
                    </h2>
                    <p className="leading-relaxed text-base">
                      Chez Duo Weslati Agency, nous transformons les idées en succès tangibles. Chaque projet que nous réalisons est une preuve de notre engagement envers l'excellence, l'innovation et la créativité.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Notre Approche :
                    </h2>
                    <p className="leading-relaxed text-base">
                      Chaque réalisation est le fruit d’une collaboration étroite avec nos clients. Nous écoutons, analysons et concevons des solutions sur mesure qui s’alignent parfaitement à leurs besoins et à leur vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations Section */}

        {/* Nos Réalisations Gallery Section */}
        <section className="text-gray-600 body-font">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl text-gray-900">NOS RÉALISATIONS</h1>
            <p className="pt-4">
              Découvrez comment nous avons transformé l'image de nos clients
              avec des projets créatifs et efficaces.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
