import { useState } from "react";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-amber-100 p-4">
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
            <p className="font-[DM_Sans]
                font-normal
                text-[clamp(1.5rem,3vw,8rem)]
                leading-[0.9]
                tracking-[0.01em]
                mt-[2rem]">
              Software Engineer at LTI Mindtree
            </p>
            <div className="flex justify-center items-center gap-16 mt-[4rem]">
              <Button btnName="exp"/>
              <Button btnLink="pro"/>
              <Button btnLink="res"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
