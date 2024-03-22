import { useState } from "react";
function Header() {

  function onThemeChangeButtonClick() { }
  const [theme, setTheme] = useState("medium");

  function onThemeChange(theme) {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    setTheme(theme);
  }

  return (
    <header className="app-header flex flex-row items-center justify-between ">
      <div className="logo flex flex-row flex-wrap justify-start items-center" >
        <picture className="">
          <source media="(min-width: 1200px)" srcSet="" type="image/jpeg" />
          <img className="p-3 rounded-full" src="https://picsum.photos/64/64" alt="textmate" />
        </picture>
        <div className="slogan">
          <span className="slogan-text font-bold text-2xl tracking-wide">Taskmate</span>
        </div>
      </div>
      <div className="theme-changer flex flex-row w-48 h-16  mr-2 justify-center items-center">
        <span onClick={() => { onThemeChange("medium") }} className={theme === 'medium' ? " medium active border-8  inline-block bg-fuchsia-500 p-2 ml-1 w-6 h-6 rounded-full text-center" : "medium inline-block bg-fuchsia-500 p-2 ml-1 w-6 h-6 rounded-full text-center"}></span>
        <span onClick={() => { onThemeChange("dark") }} className={theme === 'dark' ? "dark active border-8 inline-block bg-gray-400 p-2 ml-1 w-6 h-6 rounded-full text-center" : "dark  inline-block bg-gray-400 p-2 ml-1 w-6 h-6 rounded-full text-center"}></span>
        <span onClick={() => { onThemeChange("gOne") }} className={theme === 'gOne' ? "gOne active border-8  inline-block bg-indigo-500 p-2 ml-1 w-6 h-6 rounded-full text-center" : "gOne inline-block bg-indigo-500 p-2 ml-1 w-6 h-6 rounded-full text-center"}></span>
        <span onClick={() => { onThemeChange("gTwo") }} className={theme === 'gTwo' ? "gTwo active border-8 inline-block bg-lime-500 p-2 ml-1 w-6 h-6 rounded-full text-center" : "gTwo inline-block bg-lime-500 p-2 ml-1 w-6 h-6 rounded-full text-center"}></span>

      </div>
    </header >
  )
}

export default Header