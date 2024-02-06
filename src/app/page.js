import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-white px-10">
      
      <section className="min-h-screen">

          <div className="py-10 mb-12 flex justify-between">
              <h1>DevelopedBySochuks</h1>
              
              <ul className="flex px-8 justify-center">
                  <li> 
                    <BsFillMoonStarsFill /> 
                  </li>

                  <li>
                    <a href="#">Resume</a>
                  </li>
              </ul>

          </div>

      </section>

    </main>
  );
}
