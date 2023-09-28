import { links } from "../utils/constants";
import { SidebarProps } from "../types/types";

const SideBar = ({
  activeChannel,
  setActiveChannel,
  menu,
  setMenu,
}: SidebarProps & { setMenu(bool: boolean): void }) => {
  return (
    <div className="fixed top-[100px] left-0 max-md:right-0 max-sm:top-[160px] z-50 bg-[--bg-color]">
      <button
        onClick={() => {
          setMenu(!menu);
        }}
        className="pl-10 text-4xl max-md:hidden"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className="flex flex-col gap-2 max-md:overflow-x-scroll flow-sidebar max-md:flex-row shadow-2xl md:py-5 max-md:pb-7 px-5 max-md:py-3 ">
        {categories.map((category) => (
          <li key={category}>
            <span
              className={`${
                activeChannel.category === category
                  ? "text-[--primary]"
                  : "text-[--text-color-2]"
              } text-lg flex gap-5 items-center border-t-[1px] border-[--text-color-2] pl-2 pt-5`}
            >
              <i className="fa-solid fa-layer-group"></i>
              {category}
            </span>
            <ul className="mt-2 flex flex-col gap-2 flow max-md:flex-row shadow-2xl md:py-5 px-5 max-md:py-3 flow-cat-sidebar ">
              {
                <CategoryLinks
                  menu={menu}
                  category={category}
                  activeChannel={activeChannel}
                  setActiveChannel={setActiveChannel}
                />
              }
            </ul>
          </li>
        ))}
        <li className="absolute md:bottom-0 md:translate-y-full max-md:top-0 max-md:-translate-y-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:whitespace-nowrap">
          <p className="text-sm text-[--text-color-2] text-center py-2">
            Copyright&copy; by Mohammad Hajeer
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

const Link = ({
  name,
  category,
  menu,
  activeChannel,
  setActiveChannel,
}: SidebarProps & {
  name: string;
  category: string;
}) => {
  return (
    <li
      onClick={() => setActiveChannel({ name: name, category: category })}
      className={`shadow-xl max-md:w-fit flex items-center gap-5 py-4 px-6 rounded-lg cursor-pointer flex-none relative ${
        name === activeChannel.name ? "bg-[--primary]" : ""
      } ${menu ? "w-72" : "flex-col w-20 text-center gap-1"}`}
    >
      <i
        className={`${
          category === "Dawah"
            ? "fa-solid fa-star-and-crescent"
            : category === "Quran"
            ? "fa-solid fa-book-quran"
            : "fa-solid fa-code"
        }`}
      ></i>
      <span className={`${menu ? "" : "text-[10px]"}`}>{name}</span>
    </li>
  );
};

const CategoryLinks = ({
  category,
  menu,
  activeChannel,
  setActiveChannel,
}: SidebarProps & {
  category: string;
}) => {
  return links.map(
    (link, index) =>
      link.category === category && (
        <Link
          key={index}
          menu={menu}
          {...link}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
        />
      )
  );
};

const categories: string[] = ["Quran", "Coding", "Influencers", "Dawah"];
