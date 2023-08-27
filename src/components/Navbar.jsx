const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row navbar justify-evenly items-center bg-[#ce752cd4] text-white flex-wrap">
        <div className="left">
          <h1 className="text-4xl">
            <a href="#">Biowastewise.com</a>
          </h1>
        </div>
        <div className="right flex flex-row gap-4 flex-wrap">
          <div>
            <a href="#" className="text-xl hover:text-orange-200">
              Home
            </a>
          </div>
          <div>
            <a href="#" className="text-xl hover:text-orange-200">
              SearchAI
            </a>
          </div>
          <div>
            <a href="#" className="text-xl hover:text-orange-200">
              Waste Management
            </a>
          </div>
          <div>
            <a href="#" className="text-xl hover:text-orange-200">
              About
            </a>
          </div>
          <div>
            <a href="#" className="text-xl hover:text-orange-200">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
