import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {RiTwitterXFill} from "react-icons/ri";

export default function Home() {
  return (
    <main className="bg-white px-10">
      
      <section className="min-h-screen">
          {/* Top-Bar */}
          <div className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl">DevelopedBySochuks</h1>
              
              <ul className="flex px-8 items-center">
                  <li> 
                    <BsFillMoonStarsFill className="cursor-pointer text-xl" /> 
                  </li>

                  <li>
                    <a className="bg-gradient-to-r from-cyan-400 to-teal-500 px-4 py-2 rounded-md ml-8" href="#">Resume</a>
                  </li>
              </ul>

          </div>

          {/* Intro-Text --*/}
          <div className="text-center p-10">
              <h2 className="text-5xl text-teal-400 py-2 font-medium">Moses Sochukwuma Kajang</h2>
              <h3 className="text-2xl py-2">Software Engineer - Web Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores rerum vel vero quaerat atque obcaecati libero aperiam velit recusandae repellat.</p>
          </div>

          {/*-- Social-Icons --*/}
          <div className="flex justify-center text-4xl gap-6 py-3 text-gray-800">
              < AiFillGithub />
              < AiFillLinkedin />
              < RiTwitterXFill />
          </div>

      </section>

    </main>
  );
}
