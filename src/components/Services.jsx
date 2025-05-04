import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, chat, teamimage } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Mais que um chatbot, uma evolução na forma de torcer."
          text="Aqui, você não apenas assiste - você participa, analisa, debate e vive cada momento como se estivesse dentro do jogo."
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row gap-5">
            {/* Primeiro card (serviço principal) */}
            <div className="p-4 bg-n- rounded-3xl overflow-hidden lg:w-[50%]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Para os colecionadores de momentos</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Assista aos melhores momentos em formato de clips curtos, com jogos históricos, filtrados por jogador, mapa ou torneio.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={teamimage}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>

            {/* Grid com os 4 cards do roadmap */}
            <div className="lg:w-[50%] grid gap-4 grid-cols-1 md:grid-cols-2">
              {roadmap.map((item) => {
                const status = item.status === "done" ? "Done" : "In progress";

                return (
                  <div
                    className={`p-0.25 rounded-[2rem] h-full ${
                      item.colorful ? "bg-conic-gradient" : "bg-n-6"
                    }`}
                    key={item.id}
                  >
                    <div className="relative p-6 bg-n-8 rounded-[1.9375rem] overflow-hidden h-full">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <Tagline>{item.date}</Tagline>

                          <div className="flex items-center px-3 py-1 bg-n-1 rounded text-n-8">
                            <img
                              className="mr-2"
                              src={item.status === "done" ? check2 : loading1}
                              width={14}
                              height={14}
                              alt={status}
                            />
                            <div className="tagline">{status}</div>
                          </div>
                        </div>

                        <h4 className="h4 mb-2">{item.title}</h4>
                        <p className="body-2 text-n-4 mb-3 flex-grow">{item.text}</p>
                        
                        {item.imageUrl && (
                          <div className="mt-auto -mx-6">
                            <img
                              className="w-full rounded-lg"
                              src={item.imageUrl}
                              width={280}
                              height={160}
                              alt={item.title}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gradient */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;