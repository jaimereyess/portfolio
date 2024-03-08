import type { Metadata } from "next";
import {
  Greeting,
  ArrowScroll,
  Menu,
  ProyectList,
  Footer,
  ThemeSwitcher,
  Skills,
} from "@/components/index";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Jaime Reyes",
  description: "Página principal portfolio",
};

interface RenderPageProps {
  children: ReactNode;
}

const RenderPage = ({ children }: RenderPageProps) => {
  return (
    <>
      <div className="absolute visible dark:invisible">
        <WavyBackground speed="slow" blur={8} backgroundFill="white">
          {children}
        </WavyBackground>
      </div>
      <div className="absolute invisible dark:visible">
        <WavyBackground speed="slow" blur={8} backgroundFill="black">
          {children}
        </WavyBackground>
      </div>
    </>
  );
};
export default function HomePage() {
  return (
    <RenderPage>
      <section className="fixed top-5 w-full z-10 flex">
        <Menu />
        <span className="absolute top-5 right-5 md:right-10">
          <ThemeSwitcher />
        </span>
      </section>
      <section
        className="flex flex-col justify-center p-10 h-screen md:p-24 md:pt-5 mt-20 md:mt-0"
        id="inicio"
      >
        <Greeting />
      </section>
      <ArrowScroll />
      <section id="skills" className="flex flex-col items-center top-10">
        <h2 className="pt-16 text-4xl md:text-6xl mb-6">Tecnologías</h2>
        <article className="m-5 grid grid-cols-2 md:flex md:flex-wrap md:m-0 md:gap-10 md:justify-center md:align-middle">
          <Skills />
        </article>
      </section>
      <section id="proyectos" className="mt-40">
        <article className="pt-10">
          <ProyectList />
        </article>
      </section>
      <Footer />
    </RenderPage>
  );
}
