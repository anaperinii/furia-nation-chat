import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { teamimage } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import { VideoBar, VideoChatMessage } from "./design/Services";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Não basta assistir - faça parte do jogo" title="Mais que um chatbot, uma evolução na forma de torcer." />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => {
          // Substituir o segundo item pelo card de serviço (com borda bg-n-6)
          if (index === 1) {
            return (
              <div 
                className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6" // Borda fina mantida
                key="service-card"
              >
                <div className="relative p-4 bg-n-8 rounded-[2.4375rem] overflow-hidden h-full"> {/* Fundo alterado para bg-n-8 */}
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
                              ? "w-[3rem] h-[3rem] p-0.25 bg-gradient-to-br from-red-500 via-orange-500 to-amber-400 md:w-[4.5rem] md:h-[4.5rem]"
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
              </div>
            );
          }

          return (
            <div
            className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
              item.colorful 
                ? "bg-gradient-to-br from-red-500 via-orange-500 to-amber-400"
                : "bg-n-6"
            }`}
            key={item.id}
          >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    

                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      style={index === 0 || index === 2 ? { maxWidth: '80%', margin: '0 auto' } : {}}
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">ACESSE O CHATBOT</Button>
      </div>
    </div> 
    <Gradient />
  </Section>
);

export default Roadmap;