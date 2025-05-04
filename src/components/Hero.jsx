import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import { gradiente } from "../assets";
import { csimg, furiateam, chatmain } from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          VIVA O CS:GO EM TEMPO REAL COM A FURIA NATION CHAT
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Conecte-se à FURIA como nunca antes, com dados em tempo real, interação imersiva e a adrenalina de torcer junto ao time - direto no seu chat.
          </p>
          <Button href="/pricing" white>
            ACESSE AGORA
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem]  rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={chatmain}
                  className="w-full scale-[1] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[15%]"
                  width={1024}
                  height={490}
                  quality={100}
                  alt="Team"
                />

                

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Posso te atualizar em tempo real. Basta pedir! ⚡"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] opacity-[0.10]">
            <img
              src={gradiente}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] opacity-[0.25]"> 
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] opacity-[0.25]"> 
          <img
            src={furiateam} // Substitua pela sua imagem
            className="w-full mix-blend-overlay" // Adicione blend mode se necessário
            width={1440}
            height={1800}
            alt="furiateam"
          />
        </div>
          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
