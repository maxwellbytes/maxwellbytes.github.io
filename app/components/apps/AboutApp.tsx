'use client'
import { useState } from 'react';
type AboutTab = 'bio' | 'skills'

/* Blank figure tag setup for any future entries :)
    <figure className="flex flex-col items-center">
      <img src="/skills/.svg" className="min-w-20 min-h-20" alt=" logo" />
      <figcaption></figcaption>
    </figure>
*/

export default function AboutApp() {
  const [currTab, setCurrTab] = useState<AboutTab>('bio')

  return (
    <>
    <div className="flex flex-row text-center">
      <button 
      className={`px-6 py-2 grow ${currTab === 'bio' ? 'bg-base' : 'bg-mantle'}`}
      onClick={() => {setCurrTab('bio')}}>
        Bio
      </button>
      <button 
      className={`px-6 py-2 grow ${currTab === 'skills' ? 'bg-base' : 'bg-mantle'}`}
      onClick={() => {setCurrTab('skills')}}>
        Skills
      </button>
    </div>
    <section>
      {currTab === 'bio' && (
        <div className="p-2">
          <p>
            Hi there! Welcome to my portfolio website. I'm Maxwell Brown and I'm a CS senior with a passion for the creative side of coding. I love turning ideas into interactive projects
          </p>
          <p>
            Outside of class, I've worked as a freelance software developer, where I built small-scale projects ranging from static websites to desktop applications, developed and tested APIs, and contributed to software validation work based on detailed client criteria and project rubrics. That experience allowed me to explore multiple programming languages outside the classroom and strengthened my ability to take on more advanced personal projects.
          </p>
          <p>
            I've always been a very curious person, and that has been my main driving force for entering this field. Whether it's debugging a stubborn piece of code or perfecting a 3D model, I'm enthralled by the challenge and the satisfaction of getting it just right. My curious nature has taught me resilience and adaptability, qualities I bring to every project I start.
          </p>
          <p>
            When I'm not coding, you'll probably find me experimenting with 3D modeling in Blender and exploring game development in Godot. I enjoy projects that let me combine problem-solving with creative design, whether that's developing unique web interfaces or bringing an idea to life in 3D.
          </p>
        </div>
      )}
    </section>
    <section>
      {currTab === 'skills' && (
        <>
        <div className="flex flex-col p-3 gap-4">
          <section>
            <h2 className="text-text text-xl">Languages</h2>
            <div className="grid grid-cols-7 gap-3">
              <figure className=" flex flex-col items-center">
                <img src="/skills/typescript.svg" className="w-30 h-30" alt="TypeScript logo" />
                <figcaption>TypeScript</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/javascript.svg" className="w-30 h-30"  alt="JavaScript logo" />
                <figcaption>JavaScript</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/java.svg" className="w-30 h-30" alt="Java logo" />
                <figcaption>Java</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src='/skills/cpp.svg' className="w-30 h-30" alt='C++ logo' />
                <figcaption>C++</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/python.svg" className="w-30 h-30" alt="Python logo" />
                <figcaption>Python</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/html-5.svg" className="w-30 h-30" alt="HTML logo" />
                <figcaption>HTML</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/css3.svg" className="w-30 h-30" alt="CSS logo" />
                <figcaption>CSS</figcaption>
              </figure>
            </div>
          </section>
          <section>
            <h2 className="text-text text-xl">Frameworks & Libraries</h2>
            <div className="grid grid-cols-7 gap-6">
              <figure className="flex flex-col items-center">
                <img src="/skills/react.svg"  className="min-w-20 min-h-20"  alt="React logo" />
                <figcaption>React</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/tailwind.svg"  className="min-w-20 min-h-20"  alt="Tailwind CSS logo" />
                <figcaption>Tailwind CSS</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/nextjs.svg"  className="min-w-20 min-h-20"  alt="Next.js logo" />
                <figcaption>Next.js</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/nodejs.svg"  className="min-w-20 min-h-20"  alt="Node.js logo" />
                <figcaption>Node.js</figcaption>
              </figure>
            </div>
          </section>
          <section>
            <h2 className="text-text text-xl">Tools & Platforms</h2>
            <div className="grid grid-cols-7 gap-6">
              <figure className="flex flex-col items-center">
                <img src="/skills/git.svg" className="min-w-20 min-h-20" alt="Git logo" />
                <figcaption>Git</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/github.svg" className="min-w-20 min-h-20" alt="Github logo" />
                <figcaption>Github</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img src="/skills/mongodb.svg" className="min-w-20 min-h-20" alt="MongoDB logo" />
                <figcaption>MongoDB</figcaption>
              </figure>

            </div>
          </section>
        </div>
        </>
      )}
    </section>
    </>
  );
}