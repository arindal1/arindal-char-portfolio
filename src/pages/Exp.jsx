import React from "react";
import { Back } from "../components/Back";
import Bubble from "../components/Bubble";
import CustomCursor from "../components/CustomCursor";

function Exp() {
  return (
    <>
    <CustomCursor/>
    <div className="h-screen w-screen bg-blue-50 p-4">
      <div className="text-white overflow-x-hidden w-full h-full bg-grid flex justify-center">
        <div className="font-[DM_Sans] font-normal text-black max-w-2/4 min-w-[20rem] pt-10 pb-10 h-auto">
          <div className="flex gap-2 items-center text-black text-xl">
            <a href="/">
              <Back className="hover:scale-120 transition-all ease-in-out" />
            </a>
          </div>

          <div className="font-[Zalando_Sans_Expanded] font-bold text-black text-4xl sm:text-6xl flex justify-center mt-[1rem]">
            <h1>EXPERIENCE</h1>
          </div>

          {/* Work */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Work</h2>
          </div>
          <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold font-[Zalando_Sans_Expanded]">
                Software Engineer
              </h2>
              <p className="tracking-wide  group-hover:text-blue-400 transition-all ease-in-out duration-300 "><span className="font-bold">LTI Mindtree </span>| June, 2025 - Present</p>
            </div>
            <div>
              <p className="italic group-hover:text-blue-200 transition-all ease-in-out duration-300 ">Python, FastAPI, AgenticAI, PostgreSQL</p>
              <ul className="mt-[1rem]">
                <li className="mt-[0.5rem]">&gt; Built 4 production-grade Agentic AI systems, improving business decision automation accuracy by 30%+, by designing multi-agent architectures with workflow orchestration, reasoning chains, and Retrieval-Augmented Generation (RAG) pipelines.</li>
                <li className="mt-[0.5rem]">&gt; Improved LLM response relevance by 40%+, measured via internal evaluation benchmarks, by integrating contextual enterprise data sources into RAG pipelines using vector retrieval and prompt orchestration.</li>
                <li className="mt-[0.5rem]">&gt; Enabled secure, cloud-ready AI deployments, reducing integration friction by 20%, by deploying Python AI services on Azure infrastructure with environment-based configuration and secrets management.</li>
              </ul>
            </div>
          </div>

          <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <div>
              <h2 className="sm:text-3xl text-2xl font-[Zalando_Sans_Expanded] font-bold">
                Artificial Intelligence Intern
              </h2>
              <p className="tracking-wide group-hover:text-blue-400 transition-all ease-in-out duration-300"><span className="font-bold">IBM </span>| June, 2024 - August, 2024</p>
            </div>
            <div>
              <p className="italic group-hover:text-blue-200 transition-all ease-in-out duration-300">Python, Numpy, Pandas, Tensorflow</p>
              <ul  className="mt-[1rem]">
                <li className="mt-[0.5rem]">&gt; Achieved 92% average classification accuracy, measured across validation datasets, by designing, training, and fine-tuning custom ANN and NLP models using TensorFlow.</li>
                <li className="mt-[0.5rem]">&gt; Automated 70% of customer FAQs and order-management flows, reducing manual handling effort, by building a rule-based chatbot using IBM Watson Assistant integrated with custom backend APIs.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Skills</h2>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-2 sm:gap-4 text-[1.2rem] font-medium mt-[1rem] transition-all ease-in-out duration-300">
              <Bubble bubName="Java"/>
              <Bubble bubName="Python"/>
              <Bubble bubName="C/C++"/>
              <Bubble bubName="Javascript"/>
              <Bubble bubName="Shell"/>
              <Bubble bubName="React.js"/>
              <Bubble bubName="TailwindCSS"/>
              <Bubble bubName="Frontend Development"/>
              <Bubble bubName="NodeJs"/>
              <Bubble bubName="FastAPI"/>
              <Bubble bubName="Rest APIs"/>
              <Bubble bubName="Postman"/>
              <Bubble bubName="PostgreSQL"/>
              <Bubble bubName="MongoDB"/>
              <Bubble bubName="Machine Learning"/>
              <Bubble bubName="Artificial Intelligence"/>
              <Bubble bubName="Agentic AI"/>
              <Bubble bubName="Numpy"/>
              <Bubble bubName="Pandas"/>
              <Bubble bubName="Tensorflow"/>
              <Bubble bubName="LangChain"/>
              <Bubble bubName="Jupyter Notebook"/>
              <Bubble bubName="Git"/>
              <Bubble bubName="Docker"/>
              <Bubble bubName="Azure Functions"/>
              <Bubble bubName="Github Copilot"/>
              <Bubble bubName="Object-Oriented Programming"/>
              <Bubble bubName="Problem Solving"/>
              <Bubble bubName="LLD"/>
          </div>

          {/* Education */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Education</h2>
          </div>
          <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[1rem] p-4  mt-[1rem] mb-[2rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold font-[Zalando_Sans_Expanded]">
                Bachelor of Technology
              </h2>
              <h2 className="sm:text-3xl text-xl font-bold">
                Computer Science & Engineering (AIML)
              </h2>
              <p className="group-hover:text-blue-200 transition-all ease-in-out duration-300 mt-[1rem]">2021 - 2025</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Achievements</h2>
          </div>
          <div className="bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>Qualified for GATE in my third year [2023].</p>
          </div>
          <div className="bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>Achieved top 15% in Leetcode contests with a rating of 1700.</p>
          </div>

          {/* Bonus */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Bonus</h2>
          </div>
          <div className="bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>I actively follow and play football (soccer) and Formula 1; represented college teams in football and basketball.</p>
          </div>
          <div className="bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>Avid reader with a strong interest in classic and modern literature, particularly works by Franz Kafka, Haruki Murakami, H.P. Lovecraft, Osamu Dazai, and George Orwell.</p>
          </div>
          <div className="bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[0.9rem] sm:text-[1.2rem] p-4  mt-[1rem] mb-[2rem] hover:bg-slate-900 hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>I like to sit down, and write few lines, and sometimes they rhyme sometimes they don't.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Exp;
