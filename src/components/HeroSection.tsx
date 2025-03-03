import heroImage from "../assets/meth.jpg";

const HeroSection = () => {
  const handleExploreClick = () => {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-1">
      <div className="lg:w-1/2 text-center lg:text-left p-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide font-semibold">
          Explore our medical services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our range of medical tests!
        </p>
        <button
          onClick={handleExploreClick}
          className="mt-6 bg-gradient-to-r from-[#74c3a4] to-[#294c91] text-white px-6 py-2 rounded-md cursor-pointer"
        >
          Explore
        </button>
      </div>

      <div className="lg:w-1/2">
        <img
          src={heroImage}
          alt="Medical Services"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
