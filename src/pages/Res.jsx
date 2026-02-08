import React from "react";
import CustomCursor from "../components/CustomCursor";
import { Back } from "../components/Back";
import { Link } from "../components/Link";
import { Phone } from "../components/Phone";
import { Mail } from "../components/Mail";
import { Github } from "../components/Github";
import { Linked } from "../components/Linked";
import { Code } from "../components/Code";
import { Twitter } from "../components/Twitter";

function Res() {
  return (
    <>
      <CustomCursor />
      <div className="h-screen w-screen bg-blue-50 p-4">
        <div className="text-white overflow-x-hidden w-full h-full bg-grid flex justify-center">
          <div className="font-[DM_Sans] font-normal text-black max-w-2/4 min-w-[20rem] pt-10 pb-10 h-auto">
            <div className="flex gap-2 items-center text-black text-xl">
              <a href="/">
                <Back className="hover:scale-120 transition-all ease-in-out" />
              </a>
            </div>

            <div className="font-[Zalando_Sans_Expanded] mt-[2rem] font-bold text-black text-5xl flex justify-center mt-[1rem]">
              <h1>Arindal Char</h1>
            </div>

            {/* 1st */}

            <div className="mt-[4rem] text-2xl">
              <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
                <Phone width="2rem" height="2rem" />
                <p>+91 90949 40551</p>
              </div>
              <a href="mailto:arindalchar17@gmail.com" target="_blank">
                <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                  <Mail width="2rem" height="2rem" />
                  <p>arindalchar17@gmail.com</p>
                </div>
              </a>
                <a
                  href="https://drive.google.com/file/d/1fr5Q_tk8NOZttplj1vNiwHsaw8Ptgx2f/view?usp=sharing"
                  target="_blank"
                >
                  <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                    <Back width="2rem" height="2rem" className="rotate-180" />
                    <p>resume.pdf</p>
                  </div>
                </a>
                <a href="https://github.com/arindal1" target="_blank">
                  <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                    <Github width="2rem" height="2rem" />
                    <p>Github</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/arindalchar" target="_blank">
                  <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                    <Linked width="2rem" height="2rem" />
                    <p>Linked In</p>
                  </div>
                </a>
                <a href="https://twitter.com/arindal_17" target="_blank">
                  <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                    <Twitter width="2rem" height="2rem" />
                    <p>X [Twitter]</p>
                  </div>
                </a>
                <a href="https://leetcode.com/u/arindal/" target="_blank">
                  <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                    <Code width="2rem" height="2rem" />
                    <p>Leetcode</p>
                  </div>
                </a>
                <a href="https://medium.com/@arindalchar17" target="_blank">
                  <div className="bg-[#ffffff00] backdrop-blur-xs border-2 flex gap-4 mt-[1rem] items-center p-2 hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300 hover:cursor-pointer">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968885.png" alt="medium" className="w-[2rem] h-[2rem]"/>
                    <p>Medium</p>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Res;

{
  /* 
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
            */
}
