import Image from "next/image";
import LandingNavbar from "./LandingNavbar";

const imageLink =
  "https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80";

function Hero() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-start h-full w-full lg:px-8">
        <div className="absolute z-30 lg:static lg:z-0">
          <LandingNavbar />
          <h1 className="text-6xl md:text-8xl mt-10 md:mt-32 px-4">
            Everyone Looks for a{" "}
            <span className="font-righteous rgb">Place</span>
          </h1>
          <div className="mt-10 md:mt-32 px-4 ">
            <h6 className="text-3xl font-semibold mx-auto">
              What place you want to check?
            </h6>
            <div className="flex justify-between items-center mt-4 lg:px-4">
              <input
                type="text"
                className="rounded-l w-full h-12 md:h-16 lg:h-12 border border-black"
              />
              <button className="rounded-r bg-black text-white h-12 md:h-16 lg:h-12 px-4">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full  block blur-sm lg:blur-0 bg-slate-500">
          <Image
            src={imageLink}
            alt="hero image"
            width={752}
            height={1162}
            layout="responsive"
          />
        </div>
      </section>
    </>
  );
}
export default Hero;
