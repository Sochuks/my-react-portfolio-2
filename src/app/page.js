import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-white px-10">
      
      <section className="min-h-screen">

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

      </section>

    </main>
  );
}
