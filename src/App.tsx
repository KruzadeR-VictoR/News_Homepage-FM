import { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import menuIcon from "./assets/images/icon-menu.svg";
import closeIcon from "./assets/images/icon-menu-close.svg";
import heroImgDesktop from "./assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "./assets/images/image-web-3-mobile.jpg";
import retroPc from "./assets/images/image-retro-pcs.jpg";
import topLaptop from "./assets/images/image-top-laptops.jpg";
import gamingGrowth from "./assets/images/image-gaming-growth.jpg";
// import "./App.css";

function App() {
  const [Screen, setScreen] = useState<number>(window.innerWidth);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth);
    });

    // Screen && Screen <= 768 && setisOpen(false);
  }, []);

  const handleMenu = () => {
    console.log(isOpen);
    isOpen ? setisOpen(false) : setisOpen(true);
  };

  const style = {
    App: "min-h-screen p-5 max-w-[70rem] mx-auto",
    header: "flex justify-between items-center py-2 mb-5 md:mb-10",
    logo: "h-[1.7rem] w-100 cursor-pointer",
    nav: "fixed md:relative top-0 right-0 bg-Verydarkblue/[.6] md:bg-Offwhite h-screen md:h-auto w-full md:w-auto",
    navList:
      "flex flex-col md:flex-row pt-[40%] md:pt-0 pl-10 md:pl-0 gap-10 text-Darkgrayishblue   absolute md:relative right-0 top-0 bg-Offwhite h-full md:h-auto w-[70%] md:w-auto",
    link: "text-lg text-Verydarkblue md:text-Darkgrayishblue hover:text-Softred",
    topSection: "flex flex-col gap-[3.5rem] md:flex-row md:gap-5",
    left: "flex flex-col gap-5",
    caption: "flex flex-col md:flex-row md:gap-10",
    heading:
      "text-4xl font-800 md:basis-1/2 md:text-5xl md:leading-[1.1em] md:max-w-[20rem]",
    captionText: "flex-1 flex flex-col items-start md:basis-1/2",
    text: "text-Darkgrayishblue my-4 md:my-0 md:mb-5 md:max-w-[22rem]",
    readMore:
      "bg-Softred text-Offwhite p-3 px-8 text-[.9rem] font-700 tracking-[3px] hover:bg-Verydarkblue",
    // right new section
    right: "bg-Verydarkblue text-white p-5",
    divider: "h-[1px] w-100 bg-Darkgrayishblue",
    itemHeading:
      "text-[1.1rem] text-Offwhite font-700 cursor-pointer hover:text-Softorange",
    itemText: "text-Grayishblue mt-1",
    // Trending section
    bottomSection: "my-[4rem] md:mb-0",
    trending: "flex flex-col gap-8 md:flex-row md:gap-5",
    trendItem: "flex items-start gap-7  md:gap-5 ",
    description: "flex flex-col justify-between",
    sl_no: "text-3xl font-700 text-Grayishblue mb-2", //4xl if requires
    trendHeading:
      "text-lg font-800 text-Verydarkblue cursor-pointer mb-1 hover:text-Softred",
    trendText: "text-Darkgrayishblue font-400 md:max-w-[18rem]",
  };

  return (
    <>
      <div className={style.App}>
        <header className={style.header}>
          <img src={logo} alt="Logo" className={style.logo} />
          {Screen && Screen <= 768 ? (
            <>
              {isOpen && (
                <nav className={style.nav}>
                  <ul className={style.navList}>
                    <li className={style.link}>Home</li>
                    <li className={style.link}>New</li>
                    <li className={style.link}>Popular</li>
                    <li className={style.link}>Trending</li>
                    <li className={style.link}>Categories</li>
                  </ul>
                </nav>
              )}{" "}
            </>
          ) : (
            <nav className={style.nav}>
              <ul className={style.navList}>
                <li className={style.link}>Home</li>
                <li className={style.link}>New</li>
                <li className={style.link}>Popular</li>
                <li className={style.link}>Trending</li>
                <li className={style.link}>Categories</li>
              </ul>
            </nav>
          )}

          <img
            src={isOpen ? closeIcon : menuIcon}
            alt="menu button"
            className="menuIcon cursor-pointer z-10 md:hidden"
            onClick={handleMenu}
          />
        </header>
        <main>
          <div className={style.topSection}>
            <div className={style.left}>
              <div className="image">
                <img
                  // src={heroImgMobile}
                  src={Screen && Screen > 768 ? heroImgDesktop : heroImgMobile}
                  alt="hero banner"
                  className="heroImg h-100 w-100 object-cover"
                />
              </div>
              <div className={style.caption}>
                <h1 className={style.heading}>The Bright Future of Web 3.0?</h1>
                <div className={style.captionText}>
                  <p className={style.text}>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className={style.readMore}>READ MORE</button>
                </div>
              </div>
            </div>
            <div className={style.right}>
              <h1 className="newheading text-3xl font-700 text-Softorange mb-5">
                New
              </h1>
              <div className="newItems flex flex-col gap-5">
                <div className="item_1 py-3">
                  <h2 className={style.itemHeading}>
                    Hydrogen VS Electric Cars
                  </h2>
                  <p className={style.itemText}>
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </div>
                <div className={style.divider}></div>
                <div className="item_2 py-3">
                  <h2 className={style.itemHeading}>
                    The Downsides of AI Artistry
                  </h2>
                  <p className={style.itemText}>
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
                <div className={style.divider}></div>
                <div className="item_3 py-3">
                  <h2 className={style.itemHeading}>
                    Is VC Funding Drying Up?
                  </h2>
                  <p className={style.itemText}>
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.bottomSection}>
            <div className={style.trending}>
              <div className={style.trendItem}>
                <img
                  src={retroPc}
                  alt="Reviving Retro PCs"
                  className="trend"
                  height={100}
                  width={100}
                />
                <div className={style.description}>
                  <h1 className={style.sl_no}>01</h1>
                  <h2 className={style.trendHeading}>Reviving Retro PCs</h2>
                  <p className={style.trendText}>
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </div>
              <div className={style.trendItem}>
                <img
                  src={topLaptop}
                  alt="Top 10 Laptops of 2022"
                  className="trend"
                  height={100}
                  width={100}
                />
                <div className={style.description}>
                  <h1 className={style.sl_no}>02</h1>
                  <h2 className={style.trendHeading}>Top 10 Laptops of 2022</h2>
                  <p className={style.trendText}>
                    Our best picks for various needs and budgets.
                  </p>
                </div>
              </div>
              <div className={style.trendItem}>
                <img
                  src={gamingGrowth}
                  alt="The Growth of Gaming"
                  className="trend"
                  height={100}
                  width={100}
                />
                <div className={style.description}>
                  <h1 className={style.sl_no}>03</h1>
                  <h2 className={style.trendHeading}>The Growth of Gaming</h2>
                  <p className={style.trendText}>
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
