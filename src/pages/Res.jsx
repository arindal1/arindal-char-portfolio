import React from "react";

function Res() {
  return (
    <div className="h-screen w-screen bg-blue-50 p-4">
      <div className="text-white overflow-x-hidden w-full h-full bg-grid">
        <div className="z-10 text-black flex justify-center items-center">
          <h1
            className="
                font-[Zalando_Sans_Expanded]
                font-bold
                text-[clamp(1rem,14vw,6rem)]
                leading-[0.9]
                tracking-[-0.05em]
                opacity-20
                mt-[1rem]
                "
          >
            Arindal Char
          </h1>
        </div>
        <div className="text-black flex justify-center gap-5 mt-[1rem]">
            <p>+91 90649 40551</p> |
            <p>arindalchar17@gmail.com</p> |
            <a
                href="https://github.com/arindal1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <p>Github</p>
            </a> |
            <a
                href="https://linkedin.com/in/arindalchar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <p>LinkedIn</p>
            </a> |
            <a
                href="https://leetcode.com/arindal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leetcode"
            >
                <p>Leetcode</p>
            </a>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Res;
