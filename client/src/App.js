import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Nav';
import { categories, features, footerSections } from './constants/constants';
import Footer from './components/Footer';
// import footerSections from "./constants/constants"
// import { categories, features } from "../constants/constants";

const Layout = () => {
  return (
    <>
      <Navbar
        logo="/path/to/logo.png"
        features={features}
        categories={categories}
        buttonText="Log In"
        buttonLink="/login"
      />
      <Outlet />
      <Footer
        companyName="Cameroon HealthConnect"
        companyLogo="images/favicon.jpg"
        sections={footerSections}
      />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: "{<Home />"
      },
      {
        path: "/services",
        element: "{<Services >}"
      },
      {
        path: "/about",
        element: "{<about />"
      },
      {
        path: "/login",
        element: "{<login />"
      },
      {
        path: "/category 1",
        element: "{<div>Category 1 Page</div>}"
      },
      {
        path: "/category 2",
        element: "{<div>Category 2 Page</div>}"
      },
      {
        path: "/category 3",
        element: "{<div>Category 3 Page</div>}"
      },

    ]
  }
])


const App = () => {




  return (
    // <Router>

    <div className="container mx-auto mt-4">
      {/* <Routes>
          <Route path="/" element="{<Home />" />
          <Route path="/services" element="{<Services >}" />
          <Route path="/about" element="{<About />}" />
          <Route path="/contact" element="{<Contact />} " />
          <Route path="/login" element="{<Login />}" />
          <Route path="/category1" element={<div>Category 1 Page</div>} />
          <Route path="/category2" element={<div>Category 2 Page</div>} />
          <Route path="/category3" element={<div>Category 3 Page</div>} />
        </Routes> */}
      <RouterProvider router={router} />
    </div>

  );
};

export default App;
