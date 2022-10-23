const array = [
  {
    title: "Home",
    content: [
      { section: "first", link: "/" },
      { section: "second", link: "/" },
      { section: "third", link: "/" },
      { section: "fourth", link: "/" },
    ],
  },
  {
    title: "About",
    content: [
      { section: "first", link: "/" },
      { section: "second", link: "/" },
      { section: "third", link: "/" },
      { section: "fourth", link: "/" },
    ],
  },
  {
    title: "Contact",
    content: [
      { section: "first", link: "/" },
      { section: "second", link: "/" },
      { section: "third", link: "/" },
      { section: "fourth", link: "/" },
    ],
  },
];

function Footer() {
  return (
    <div>
      <footer className="flex justify-between h-full w-full bg-slate-900 py-10 px-10 text-white">
        {array.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <h3 className="text-xl md:text-2xl font-semibold underline">
              {item.title}
            </h3>
            <div className="flex flex-col justify-center items-center md:font-semibold">
              {item.content.map((contentItem, index) => (
                <span key={index}>{contentItem.section}</span>
              ))}
            </div>
          </div>
        ))}
      </footer>
      <div className="bg-black w-full text-white flex justify-center py-2">
        Can Tutar - 2022
      </div>
    </div>
  );
}
export default Footer;
