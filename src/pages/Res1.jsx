import React from 'react'
import { useNavigate } from "react-router-dom";
import { Twitter } from "../components/Twitter";
import { Linked } from "../components/Linked";
import { Github } from "../components/Github";
import Button from "../components/Button";

function Res() {
  const navigate = useNavigate();

  // NOTE: Put your PDF in the public folder as "arindal-resume-dec.pdf"
  // so this link works in production/dev: "/arindal-resume-dec.pdf"
  const pdfLink = "/arindal-resume-dec.pdf";

  return (
    <div className="min-h-screen w-screen bg-blue-50 p-6 bg-grid">
      <div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {/* Left column: contact, socials, skills */}
          <aside className="col-span-1 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-[DM_Sans] font-bold">Arindal Char</h2>
              <p className="mt-1 text-sm font-[DM_Sans]">Software Engineer at LTI Mindtree</p>

              <div className="mt-4 text-sm space-y-1">
                <div>📞 +91 90649 40551</div>
                <div>✉️ arindalchar17@gmail.com</div>
                <div>🔗 linkedin.com/in/arindalchar</div>
                <div>🧑‍💻 github.com/arindal1</div>
                <div>🧠 leetcode.com/arindal</div>
              </div>
            </div>

            <div>
              <h3 className="font-[DM_Sans] font-semibold mb-2">Technical Skills</h3>
              <ul className="text-sm space-y-1 list-disc ml-5">
                <li>Languages: C/C++, Java, Python, JavaScript</li>
                <li>Frontend / Backend: React, FastAPI</li>
                <li>Databases & Tools: MySQL, PostgreSQL, VSCode, Postman</li>
                <li>Cloud & DevOps: AWS, Azure, Git, Linux</li>
              </ul>
            </div>

            <div>
              <h3 className="font-[DM_Sans] font-semibold mb-3">Socials</h3>
              <div className="flex items-center gap-4">
                <a href="https://twitter.com/arindal_17" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <Twitter className="text-3xl text-black transition-all duration-300 hover:scale-105" />
                </a>
                <a href="https://linkedin.com/in/arindalchar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linked className="text-3xl text-black transition-all duration-300 hover:scale-105" />
                </a>
                <a href="https://github.com/arindal1" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="text-3xl text-black transition-all duration-300 hover:scale-105" />
                </a>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <a
                href={pdfLink}
                download="arindal-resume-dec.pdf"
                className="inline-block w-full text-center border-2 border-black py-2 rounded hover:bg-black hover:text-blue-50 transition"
              >
                Download PDF
              </a>
              <button
                className="w-full text-center py-2 rounded bg-black text-blue-50 hover:opacity-90 transition"
                onClick={() => window.print()}
              >
                Print
              </button>
              <button
                className="w-full text-center py-2 rounded border-2"
                onClick={() => navigate("/")}
              >
                Back Home
              </button>
            </div>
          </aside>

          {/* Main column: Education / Experience / Projects / Certs */}
          <main className="col-span-2 space-y-8">
            <section>
              <h3 className="font-[DM_Sans] font-semibold text-xl mb-3">Education</h3>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">University of Engineering and Management — Kolkata, India</div>
                    <div className="text-sm">Bachelor of Technology — Computer Science & Engineering</div>
                  </div>
                  <div className="text-sm text-right">Aug 2021 – June 2025 • CGPA: 8.4/10</div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-[DM_Sans] font-semibold text-xl mb-3">Professional Experience</h3>

              <div className="space-y-4">
                <article className="p-4 bg-white rounded shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">Software Engineer — LTIMindtree</div>
                      <div className="text-sm">Bengaluru, India</div>
                    </div>
                    <div className="text-sm">June 2025 - Present</div>
                  </div>
                  <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                    <li>Designed and deployed Azure Data Factory pipelines & dataflows to automate ETL processes.</li>
                    <li>Improved data quality by implementing transformation, validation, and cleansing workflows.</li>
                    <li>Developed & optimized SQL queries, stored procedures; collaborated on cloud-based data solutions.</li>
                  </ul>
                </article>

                <article className="p-4 bg-white rounded shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">Artificial Intelligence — Summer Intern, IBM</div>
                      <div className="text-sm">Remote</div>
                    </div>
                    <div className="text-sm">June 2024 - Aug 2024</div>
                  </div>
                  <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                    <li>Architected scalable NLP & deep learning workflows (custom ANN), achieving ~92% classification accuracy.</li>
                    <li>Built a rule-based chatbot with IBM Watson Assistant + custom APIs; automated ~70% of FAQs & order flows.</li>
                  </ul>
                </article>
              </div>
            </section>

            <section>
              <h3 className="font-[DM_Sans] font-semibold text-xl mb-3">Projects</h3>

              <div className="space-y-4">
                <article className="p-4 bg-white rounded shadow-sm">
                  <div className="flex justify-between">
                    <div className="font-semibold">Contrastive Counterfactual Explanations on CNNs</div>
                    <div className="text-sm">March 2025</div>
                  </div>
                  <div className="text-sm mt-2">
                    <p className="mb-2">
                      Enhanced ResNet50 with CBAM to enable contrastive counterfactual explanations on MNIST —
                      improved interpretability metrics and built a fast visualization pipeline (&lt;50 ms / image).
                    </p>
                    <ul className="list-disc ml-5 text-sm">
                      <li>Greedy pixel selection algorithm using saliency maps; 94% flip success on 200 samples.</li>
                      <li>Reduced perturbed pixels by 11% while improving human interpretability metrics by 20%.</li>
                    </ul>
                  </div>
                </article>

                <article className="p-4 bg-white rounded shadow-sm">
                  <div className="flex justify-between">
                    <div className="font-semibold">Memoirex — AI Notes Generator</div>
                    <div className="text-sm">Dec 2024</div>
                  </div>
                  <div className="text-sm mt-2">
                    <p className="mb-2">
                      Interactive web app to generate exam-focused study notes from user topics. Built with React + Tailwind.
                    </p>
                    <ul className="list-disc ml-5 text-sm">
                      <li>Integrated Google Gemini 1.5 Flash API via Vercel middleware to lower latency by 40%.</li>
                      <li>Multi-step UI, responsive design — 20+ monthly active users during initial launches.</li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            <section>
              <h3 className="font-[DM_Sans] font-semibold text-xl mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border rounded text-sm">AWS Fundamentals — Amazon (May 2024)</span>
                <span className="px-3 py-1 border rounded text-sm">Machine Learning Specialization — Stanford (Aug 2023)</span>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Res



