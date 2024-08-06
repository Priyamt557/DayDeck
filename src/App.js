import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductFeatures from "./components/ProductFeatures";
import SpotifyCards from "./components/SpotifyCards";
import "./common/scss/style.scss";
import Blog from "./Pages/Blog";
import PricingPlan from "./components/PricingPlan";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import ContactPopup from "./components/ContactPopup";
import CookiesModal from "./components/CookiesModal";
import BlogContactus from "./components/BlogContactus";
import BookADemo from "./components/BookADemo";

function App() {
  let Path = window.location.href.split("/")[3].toLowerCase();
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }, [isDarkMode]);

  const [open, setOpen] = React.useState(false);

  const [pressed, setPressed] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = (event, reasor) => {
    setOpen(false);
  };

  const [Cookiesopen, setCookiesopen] = React.useState(
    localStorage.getItem("visited") ? false : true
  );
  const handleCookiesOpen = () => setCookiesopen(true);
  const handleCookiesClose = () => {
    localStorage.setItem("visited", "true");
    setCookiesopen(false);
  };

  const [IsOnOtherPage, setIsOnOtherPage] = useState(
    Path == "blog" || Path == "faq" ? false : true
  );

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />

      <CookiesModal
        Cookiesopen={Cookiesopen}
        setCookiesopen={setCookiesopen}
        handleCookiesOpen={handleCookiesOpen}
        handleCookiesClose={handleCookiesClose}
      />

      <ContactPopup
        setPressed={setPressed}
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      {IsOnOtherPage && (
        <div
          style={{ justifyContent: "space-around", zIndex: "400" }}
          className="w-[15%]  h-[60%] bottom-[20%] fixed right-0 flex flex-col items-center"
        >
          <div
            onClick={() => {
              handleOpen();
              if (pressed === "contact") {
                setPressed(null);
                handleClose();
              } else {
                setPressed("contact");
              }
            }}
            style={{
              backgroundImage:
                pressed === "contact"
                  ? "linear-gradient(#8E4DFF, #251E30)"
                  : "linear-gradient(rgb(143 126 126), rgb(56 50 50))",
              boxShadow: "rgb(14 2 4) 1px 2px 9px",
              justifyContent: "center",
            }}
            className="h-[25%] flex items-center content-center  rounded-full aspect-square cursor-pointer hover:scale-105"
          >
            <span
              style={{
                color: pressed === "contact" ? "white" : "black",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "satoshi",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Contact
            </span>
          </div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgb(143 126 126), rgb(56 50 50))",
              boxShadow: "rgb(14 2 4) 1px 2px 9px",
              justifyContent: "center",
            }}
            className="book-a-demo h-[25%] flex items-center content-center  rounded-full aspect-square cursor-pointer hover:scale-105"
          >
            <BookADemo />
            {/* <span style={{ color: 'black', fontSize: '20px', fontWeight: "500", fontFamily: 'satoshi', alignSelf: 'center', textAlign: 'center' }}>Book a demo</span> */}
          </div>
          <Link
            to="/faq"
            style={{
              backgroundImage:
                "linear-gradient(rgb(143 126 126), rgb(56 50 50))",
              boxShadow: "rgb(14 2 4) 1px 2px 9px",
              justifyContent: "center",
            }}
            className="h-[25%] flex items-center content-center  rounded-full aspect-square cursor-pointer hover:scale-105"
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "satoshi",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              FAQ
            </span>
          </Link>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection isDarkMode={isDarkMode} />
              <SpotifyCards isDarkMode={isDarkMode} />
              <ProductFeatures isDarkMode={isDarkMode} />
              <PricingPlan isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />

              {/* <NewProductFeature isDarkMode={isDarkMode} /> */}
              <BlogContactus isDarkMode={isDarkMode} />
            </div>
          }
        />

        <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
        <Route path="/faq" element={<Faq isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
