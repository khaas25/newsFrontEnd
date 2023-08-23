import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import HeroNews from "./Components/HeroNews";
import TechNews from "./Components/TechNews";
import SportsNews from "./Components/SportsNews";
import TopHeadlines from "./Components/TopHeadlines";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import AllNews from "./Components/AllNews";
import SubHeader from "./Components/SubHeader";
import Search from "./Components/Search";
import SearchResults from "./Components/SearchResults";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar selected="home" />
                <Search />
                <MainHeader />
                <TopHeadlines />
                <Categories />
                <HeroNews />
                <TechNews />
                <SportsNews />
                <Footer />
              </>
            }
          />
          <Route
            path="/automobileNews"
            element={
              <>
                <Navbar selected="automobiles" />
                <SubHeader
                  linkName="Automobile News"
                  headerName="Auto Industry"
                />
                <AllNews news="Automobile" />
                <Footer />
              </>
            }
          />
          <Route
            path="/techNews"
            element={
              <>
                <Navbar selected="tech" />
                <SubHeader linkName="Tech News" headerName="Tech Industry" />
                <AllNews news="Technology" />
                <Footer />
              </>
            }
          />

          <Route
            path="/sportsNews"
            element={
              <>
                <Navbar selected="sports" />
                <SubHeader linkName="Sports News" headerName="Sports" />
                <AllNews news="Sports" />
                <Footer />
              </>
            }
          />

          <Route
            path="/searchresults"
            element={
              <>
                <Navbar selected="none" />
                <SubHeader linkName="Search Results" headerName="News" />
                <SearchResults />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Navbar selected="contact" />
                <SubHeader linkName="Contact" headerName="Contact Us" />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
