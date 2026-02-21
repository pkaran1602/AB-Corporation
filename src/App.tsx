import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const HomePage = React.lazy(() => import("./pages/home/Home"));
  const AboutPage = React.lazy(() => import("./pages/about/About"));
  const GalleryPage = React.lazy(() => import("./pages/gallery/Galley"));
  const ContactPage = React.lazy(() => import("./pages/contact us/Contact"));
  const Header = React.lazy(() => import("./components/header/Header"));
  const Footer = React.lazy(() => import("./components/footer/Footer"));
  const Products = React.lazy(() => import("./pages/products/Products"));
  const EmailPage = React.lazy(() => import("./pages/email us/Email"));

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/email" element={<EmailPage />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </Router>
  );
}

export default App;
