import React from "react";
import { Back } from "../components/Back";
import Bubble from "../components/Bubble";
import { Link } from "../components/Link";
import CustomCursor from "../components/CustomCursor";
import { GitHubCalendar } from "react-github-calendar";

function Pro() {
  return (
    <>
      <CustomCursor />
      <div className="h-screen w-screen bg-blue-50 p-4">
        <div className="text-white overflow-x-hidden w-full h-full bg-grid flex justify-center">
          <div className="font-[DM_Sans] font-normal text-black max-w-2/4 min-w-[50rem] h-auto p-10">
            <div className="flex gap-2 items-center text-black text-xl">
              <a href="/">
                <Back className="hover:scale-120 transition-all ease-in-out" />
              </a>
            </div>

            <div className="font-[Zalando_Sans_Expanded] font-bold text-black text-5xl flex justify-center mt-[1rem]">
              <h1>PROJECTS</h1>
            </div>

            {/* 1st */}

            <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[1.2rem] p-4  mt-[4rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                    Blynk - A real-time chat app
                  </h2>
                  <p className="italic group-hover:text-blue-300 transition-all ease-in-out duration-300 tracking-wide">
                    Javascript, React, Express, Node, MongoDB, Zustand
                  </p>
                </div>
                <a
                  href="https://github.com/arindal1/blynk-mern-app"
                  target="_blank"
                  className="text-5xl hover:scale-110 transition-all ease-in-out duration-300"
                >
                  <Link />
                </a>
              </div>
              <div className="mt-2">
                <p>
                  &gt; Blynk is a real-time messaging application built using
                  the MERN stack. This project is designed to provide a platform
                  for users to sign up, create their accounts, and engage in
                  real-time text conversations with other users. The application
                  utilizes modern web technologies to offer a seamless and
                  interactive user experience.
                </p>
              </div>
            </div>

            {/* 2nd */}

            <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                    XAI w/ Counterfactuals on Attention Enhanced CNNs
                  </h2>
                  <p className="italic group-hover:text-blue-300 transition-all ease-in-out duration-300 tracking-wide">
                    Python, Tensorflow, Explainable AI, Neural Networks, Deep
                    Learning, Numpy
                  </p>
                </div>
                <a
                  href="https://github.com/arindal1/xai-counterfactuals-on-blackbox"
                  target="_blank"
                  className="text-5xl hover:scale-110 transition-all ease-in-out duration-300"
                >
                  <Link />
                </a>
              </div>
              <div className="mt-2">
                <p>
                  &gt; Research project that investigates the integration of
                  attention mechanisms and contrastive counterfactual
                  explanations into convolutional neural networks (CNNs). <br />{" "}
                  The goal being,{" "}
                  <span className="italic">
                    "What minimal change would flip the model’s wrong
                    prediction?"
                  </span>
                </p>
              </div>
            </div>

            {/* 3rd */}

            <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                    Memoirex AI - Notes App
                  </h2>
                  <p className="italic group-hover:text-blue-300 transition-all ease-in-out duration-300 tracking-wide">
                    Javascript, NextJs, TailwindCSS, Gemini
                  </p>
                </div>
                <a
                  href="https://github.com/arindal1/memoirex-AI"
                  target="_blank"
                  className="text-5xl hover:scale-110 transition-all ease-in-out duration-300"
                >
                  <Link />
                </a>
              </div>
              <div className="mt-2">
                <p>
                  &gt; Memoirex is a web-based application that uses Google
                  Gemini 1.5 Flash to generate detailed and comprehensive notes
                  on any given topic. Designed with students and learners in
                  mind, the app provides well-structured, easy-to-read notes to
                  streamline the studying process.
                </p>
              </div>
            </div>

            {/* 4th */}

            <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                    Hotel Booking Analytics & RAG QnA
                  </h2>
                  <p className="italic group-hover:text-blue-300 transition-all ease-in-out duration-300 tracking-wide">
                    Python, FastAPI, RAG, LLM, Postman
                  </p>
                </div>
                <a
                  href="https://github.com/arindal1/LLM-Booking-Analytics-and-RAG-QA"
                  target="_blank"
                  className="text-5xl hover:scale-110 transition-all ease-in-out duration-300"
                >
                  <Link />
                </a>
              </div>
              <div className="mt-2">
                <p>
                  &gt; Processing hotel booking data, extracting business
                  insights, and enabling retrieval-augmented question answering
                  (RAG) through an LLM-powered API. The system combines data
                  analytics, vector-based retrieval with FAISS, and a
                  lightweight language model to answer questions about hotel
                  bookings.
                </p>
              </div>
            </div>

            {/* 5th */}

            <div className="group bg-[#ffffff00] backdrop-blur-xs border-2 border-black text-[1.2rem] p-4  mt-[1rem] hover:bg-black hover:text-blue-50 transition-all ease-in-out duration-300">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-3xl font-bold font-[Zalando_Sans_Expanded]">
                    iPhone 15 - Landing Page
                  </h2>
                  <p className="italic group-hover:text-blue-300 transition-all ease-in-out duration-300 tracking-wide">
                    React, GSAP, ThreeJS
                  </p>
                </div>
                <a
                  href="https://github.com/arindal1/iPhone15-pro"
                  target="_blank"
                  className="text-5xl hover:scale-110 transition-all ease-in-out duration-300"
                >
                  <Link />
                </a>
              </div>
              <div className="mt-2">
                <p>
                  &gt; A 3D site resembling the iPhone 15 Pro landing page. The
                  site features dynamic animations powered by GSAP and an
                  interactive 3D model of the iPhone created using Three.JS, and
                  error tracking and performance monitoring through Sentry.
                </p>
              </div>
            </div>
            <div className="mt-[2rem]">
            <GitHubCalendar
              username="arindal1"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={{
                light: ["#eff6ff ", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
                dark: ["#dbeafe", "#bedbff", "#51a2ff", "#155dfc", "#193cb8"],
              }}
              hideTotalCount
              showWeekdayLabels={false}
              showMonthLabels={false}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pro;
