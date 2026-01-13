import { useState } from "react";
import { Twitter } from "./components/Twitter";
import { Linked } from "./components/Linked";
import { Github } from "./components/Github";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-blue-50 p-4">
        <div className="text-white overflow-x-hidden w-full h-full bg-grid">
          <div className="z-10 text-black flex justify-center items-center">
            <h1
              className="
                font-[Zalando_Sans_Expanded]
                font-bold
                text-[clamp(4rem,14vw,20rem)]
                leading-[0.9]
                tracking-[-0.05em]
                opacity-20
                mt-[15rem]
                "
            >
              ARINDAL
            </h1>
          </div>
          <div className="text-black flex justify-center items-center flex-col">
            <p
              className="font-[DM_Sans]
                font-normal
                text-[clamp(1.5rem,3vw,8rem)]
                leading-[0.9]
                tracking-[0.01em]
                mt-[2rem]
                "
            >
              Software Engineer at LTI Mindtree
            </p>
            <div className="flex justify-center items-center gap-18 mt-[8rem]">
              <Button btnName="Experience" btnLink="exp" />
              <Button btnName="Projects" btnLink="pro" />
              <Button btnName="Resume" btnLink="res" />
            </div>
            <div className="flex gap-8 mt-[2rem]">
              <a
                href="https://twitter.com/arindal_17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="text-6xl text-black transition-all duration-500 ease-out hover:scale-110" />
              </a>

              <a
                href="https://linkedin.com/in/arindalchar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linked className="text-6xl text-black transition-all duration-500 ease-out hover:scale-110" />
              </a>

              <a
                href="https://github.com/arindal1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="text-6xl text-black transition-all duration-500 ease-out hover:scale-110" />
              </a>
            </div>

            <div className="mt-[4rem]">
              {/* <Switch checked={enabled} onChange={setEnabled} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
