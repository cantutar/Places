import Image from "next/image";
import Shimmer, { toBase64 } from "../Loading";

const firstImagesArray = [
  {
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
  },
];
const secondImagesArray = [
  {
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
  },
];

function Featured() {
  return (
    <section className="w-full h-full py-10 lg:py-20 px-4">
      <h2 className="text-3xl">Check this places for your next trip...</h2>
      <div className="flex justify-between items-center mt-10 lg:mt-20 gap-x-4">
        {firstImagesArray.map((image, index) => {
          return (
            <div className="h-full w-full relative" key={index}>
              <Image
                src={image.image}
                alt="first image"
                width="350"
                height="400"
                layout="responsive"
                objectFit="cover"
                className="rounded"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  Shimmer(350, 400)
                )}`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-10 lg:mt-20 gap-x-4">
        {secondImagesArray.map((image, index) => {
          return (
            <div
              className="w-full h-full bg-slate-500 relative rounded"
              key={index}
            >
              <Image
                src={image.image}
                alt="first image"
                width="350"
                height="400"
                layout="responsive"
                objectFit="cover"
                className="rounded"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  Shimmer(350, 400)
                )}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Featured;
