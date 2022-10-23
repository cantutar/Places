import Logo from "../Layout/Logo";

function Parallax() {
  return (
    <section className="h-[50vh] relative">
      <div className="w-full h-full flex justify-around flex-col lg:flex-row items-center lg:px-20 py-20 absolute z-30 ">
        <h2 className="font-DancingScript text-6xl lg:text-9xl px-4">
          Take us with your next{" "}
        </h2>
        <Logo
          pngOrSvg="svg"
          classes="h-full w-3/4 lg:h-full lg:w-full flex justify-center items-center md:mt-4"
        />
      </div>
      <div className="bg-Trust blur-sm bg-center bg-no-repeat bg-fixed z-0 h-full"></div>
    </section>
  );
}

export default Parallax;
