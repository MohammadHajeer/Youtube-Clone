const Header = () => (
  <header className="fixed w-full bg-[--bg-color] shadow-xl z-50">
    <div className="px-10 relative flex justify-between items-center py-5 gap-5 max-sm:flex-col-reverse">
      <div className="text-4xl font-bold text-[--primary] flex items-end tracking-widest">
        <i className="fa-brands fa-youtube"></i>
        Youtube
      </div>
      <div className="relative z-10  w-[500px] max-w-full">
        <input
          className="text-xl px-8 pl-5 rounded-xl py-4 bg-[--primary-alt] w-full outline-none focus:ring-2 ring-[--primary]"
          type="text"
          placeholder="serach"
        />
        <i className="fa-solid fa-search absolute right-[10px] top-1/2 -translate-y-1/2 -z-[1]"></i>
      </div>
    </div>
  </header>
);

export default Header;
