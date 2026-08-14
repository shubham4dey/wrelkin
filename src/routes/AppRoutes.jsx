import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import Home from "../pages/Home";
import About from "../pages/About";
import EPC from "../components/services/EPC";
import Projects from "../components/projects/Projects";
import Gallery from "../components/gallery/Gallery";
import Government from "../components/government/Government";
import Contact from "../components/contact/Contact";
import Products from "../components/products/Products";
import Solar from "../components/products/Solar";
import Enquiry from "../components/enquiry/Enquiry";


function Placeholder({ title }) {
  return (
    <main className="min-h-screen bg-white px-6 py-32 dark:bg-[#031009]">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
      </div>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* =====================================
          GLOBAL NAVBAR
      ===================================== */}

      <Navbar />

      {/* =====================================
          GLOBAL SCROLL TO TOP
      ===================================== */}

      <ScrollToTop />

      {/* =====================================
          ALL ROUTES
      ===================================== */}

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/epc" element={<EPC />} />

        {/* PRODUCTS */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/solar" element={<Solar />} />

        {/* PROJECTS */}
       <Route path="/projects" element={<Projects />} />

        {/* GALLERY */}
       <Route path="/gallery" element={<Gallery />} />

        {/* GOVERNMENT SCHEMES */}
        <Route path="/government" element={<Government />} />

        {/* DOWNLOADS */}
        <Route
          path="/downloads"
          element={<Placeholder title="Downloads" />}
        />

        {/* TEAM */}
        <Route
          path="/team"
          element={<Placeholder title="Team" />}
        />

        {/* CLIENTS */}
        <Route
          path="/clients"
          element={<Placeholder title="Clients" />}
        />

        {/* CERTIFICATES */}
        <Route
          path="/certificates"
          element={<Placeholder title="Certificates" />}
        />

        {/* CAREERS */}
        <Route
          path="/careers"
          element={<Placeholder title="Careers" />}
        />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* ENQUIRY */}
        <Route path="/enquiry" element={<Enquiry />} />

        {/* FALLBACK */}
        {/* <Route
          path="*"
          element={<Placeholder title="Page Not Found" />}
        /> */}
      </Routes>

      {/* =====================================
          GLOBAL FOOTER
      ===================================== */}

      <Footer />
    </BrowserRouter>
  );
}