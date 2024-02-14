import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {RiTwitterXFill} from "react-icons/ri";
import deved from "/src/img/profile-pic-1.png";

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

          {/* Porfolio-image */}
          <div className="relative mx-auto mt-4 rounded-full h-80 w-80 bg-slate-400">
              <Image src={deved} />
          </div>

      </section>

      {/* Service I offer */}
      <section>

            <div>

                <h3 className="text-3xl py-1">Services I Offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fugit sit officia rem voluptatem atque?
                </p>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>

            {/* Service Cards */}
            <div>
                {/* Services Design */}
                <div className="shadow-lg my-10 p-10 rounded-md">

                  < Image />
                  <h3 className="text-lg font-medium pt-8 pb-2">Elegant Designs</h3>
                  <p className="py-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nihil autem voluptatibus?  
                  </p> 
                  <h4 className="py-4 text-teal-500">Familiar Design Tools</h4>
                  <p className="text-gray-800 py-1">Photoshop</p>
                  <p className="text-gray-800 py-1">Canva</p>
                  <p className="text-gray-800 py-1">Figma</p>

                </div>

                {/* Services Code */}
                <div className="shadow-lg my-10 p-10 rounded-md">

                  < Image />
                  <h3 className="text-lg font-medium pt-8 pb-2">Reusable Code</h3>
                  <p className="py-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nihil autem voluptatibus?  
                  </p> 
                  <h4 className="py-4 text-teal-500">Familiar Design Tools</h4>
                  <p className="text-gray-800 py-1">Photoshop</p>
                  <p className="text-gray-800 py-1">Canva</p>
                  <p className="text-gray-800 py-1">Figma</p>

                </div>

                {/* Services Consulting */}
                <div className="shadow-lg my-10 p-10 rounded-md">

                  < Image />
                  <h3 className="text-lg font-medium pt-8 pb-2">Consulting & IT Support</h3>
                  <p className="py-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nihil autem voluptatibus?  
                  </p> 
                  <h4 className="py-4 text-teal-500">Familiar Design Tools</h4>
                  <p className="text-gray-800 py-1">Photoshop</p>
                  <p className="text-gray-800 py-1">Canva</p>
                  <p className="text-gray-800 py-1">Figma</p>

                </div>

            </div>

      </section>

    </main>
  );
}
