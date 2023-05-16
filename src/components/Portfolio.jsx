import React from "react";
import reactLyriks from '../assets/portfolio/reactLyriks.png'
import reactWeather from "../assets/portfolio/reactWeather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactLyriks,
      demoLink: "https://joshualyriksapp.netlify.app/",
      codeLink: "https://github.com/holliday91/lyriks_starter_code", // Replace with the actual code link for id 1
    },
    {
      id: 2,
      src: reactWeather,
      demoLink: "https://weather4you.netlify.app",
      codeLink: "https://github.com/holliday91/my_weather_app", // Replace with the actual code link for id 2
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank"); // Open the link in a new tab
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank"); // Open the link in a new tab
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
