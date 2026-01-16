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
        <div className="font-[DM_Sans] font-normal text-black max-w-2/4 min-w-[50rem] h-auto p-10">
          <div className="flex gap-2 items-center text-black text-xl">
            <a href="/">
              <Back className="hover:scale-120 transition-all ease-in-out" />
            </a>
          </div>

          <div className="font-[Zalando_Sans_Expanded] font-bold text-black text-6xl flex justify-center mt-[1rem]">
            <h1>EXPERIENCE</h1>
          </div>

          {/* Work */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Work</h2>
          </div>
          <div className="border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
            <div>
              <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                Software Engineer
              </h2>
              <p className="tracking-wide"><span className="font-bold">LTI Mindtree </span>| June, 2025 - Present</p>
            </div>
            <div>
              <p className="italic">Python, FastAPI, AgenticAI, PostgreSQL</p>
              <ul className="mt-[1rem]">
                <li className="mt-[0.5rem]">&gt; Designed and developed Azure Data Factory (ADF) pipelines to automate end-to-end ETL workflows, enabling reliable data ingestion, transformation, and loading from multiple structured data sources. Optimized SQL databases by implementing indexing strategies, query tuning, and stored procedures, improving query performance and reducing execution time by 30–40%.</li>
                <li className="mt-[0.5rem]">&gt; Developed 4 custom Agentic AI systems using multi-agent architectures to solve diverse business use cases, including automated reasoning, workflow orchestration, and intelligent decision-making. Implemented Retrieval-Augmented Generation (RAG) pipelines to enhance LLM responses with contextual data, improving response relevance and accuracy by 40%+.</li>
                <li className="mt-[0.5rem]">&gt; Built scalable RESTful APIs using FastAPI to expose AI services, ensuring low latency, modular design, and production readiness. Integrated Python-based AI pipelines with Azure infrastructure, enabling secure deployment, monitoring, and scalability of AI workloads.</li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
            <div>
              <h2 className="text-3xl font-[Zalando_Sans_Expanded] font-bold">
                Artificial Intelligence Intern
              </h2>
              <p className="tracking-wide"><span className="font-bold">IBM </span>| June, 2024 - August, 2024</p>
            </div>
            <div>
              <p className="italic">Python, Numpy, Pandas, Tensorflow</p>
              <ul  className="mt-[1rem]">
                <li className="mt-[0.5rem]">&gt; Architected and deployed highly accurate and scalable NLP and Deep Learning workflows by designing, training and fine-tuning custom Artificial Neural Networks achieving 92% average classification accuracy.</li>
                <li className="mt-[0.5rem]">&gt; Built a rule-based chatbot with IBM Watson Assistant and custom API endpoints, integrating with JavaScript front-end to automate 70% of FAQs and order-management processes.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Skills</h2>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-4 text-[1.2rem] font-medium mt-[1rem] transition-all ease-in-out duration-300">
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
          <div className="border-2 border-black text-[1.2rem] p-4  mt-[1rem] mb-[2rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
            <div>
              <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                Bachelor of Technology
              </h2>
              <h2 className="text-3xl font-bold">
                Computer Science & Engineering (AIML)
              </h2>
              <p>2021 - 2025</p>
            </div>
          </div>

          {/* Bonus */}
          <div className="text-4xl font-bold font-[Zalando_Sans_Expanded] mt-[4rem]">
            <h2>Bonus</h2>
          </div>
          <div className="border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>I actively follow and play football (soccer) and Formula 1; represented college teams in football and basketball.</p>
          </div>
          <div className="border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>Avid reader with a strong interest in classic and modern literature, particularly works by Franz Kafka, Haruki Murakami, H.P. Lovecraft, Osamu Dazai, and George Orwell.</p>
          </div>
          <div className="border-2 border-black text-[1.2rem] p-4  mt-[1rem] mb-[2rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
            <p>I like to sit down, and write down few lines, and sometimes they rhyme sometimes they don't.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Exp;
