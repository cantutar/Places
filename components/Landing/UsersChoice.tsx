import Image from "next/image";
import Logo from "../Layout/Logo";
import UsersChoiceImage from "../../public/assets/images/Rectangle17.png";

function UsersChoice() {
  return (
    <section className="bg-darkGreen w-full h-full grid grid-flow-row md:grid-cols-2 justify-center items-center text-white">
      <div className="h-full flex flex-col justify-evenly items-center md:py-10 md:px-4">
        <Logo
          classes="flex justify-center items-center h-auto w-3/4"
          pngOrSvg="svg"
        />
        <h4 className="text-2xl lg:text-6xl">
          Placers Choice Best of the Best
        </h4>
        <button className="bg-black rounded-2xl my-4 md:mt-2 md:my-0 px-4 py-1 lg:text-3xl lg:px-8 lg:py-2">
          Join us
        </button>
      </div>
      <div className="h-full w-auto flex flex-col justify-center">
        <Image
          src={UsersChoiceImage}
          alt="Users choice image"
          width="350"
          height="350"
          layout="responsive"
          objectFit="cover"
          className="rounded"
        />
      </div>
    </section>
  );
}
export default UsersChoice;
