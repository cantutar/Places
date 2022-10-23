import Image from "next/image";
import Shimmer, { toBase64 } from "../Loading";

const IconicPlaceItems = [
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "",
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "",
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "",
  },
];

function IconicPlace() {
  return (
    <section className="h-full w-full px-2 md:px-4 py-8">
      <h1 className="text-2xl">Travel Around most iconic places...</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 px-4">
        {IconicPlaceItems.map((item, index) => (
          <>
            <div className="w-72 h-40 md:w-54 md:h-72 relative" key={index}>
              <Image
                src={item.image}
                alt="Iconic place"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-xl"
                layout="fill"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  Shimmer(700, 475)
                )}`}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
export default IconicPlace;
