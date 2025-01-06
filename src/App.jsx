import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Design from "./Components/Design/Design";

function App() {
  const x = createBrowserRouter([
    {
      path: "",
      element: <Design />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      {/* <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <MainPage/>
    <Footer/> */}
      <RouterProvider router={x} />
    </>
  );
}

export default App;
