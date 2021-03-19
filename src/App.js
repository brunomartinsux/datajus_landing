import React from 'react'
import About from './components/about/About';
import Banner from './components/banner/Banner';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Pricing from './components/pricing/Pricing';
import Products from './components/products/Products';

function App() {


  return (
    <div className="App">
      < Header />
      <Banner />
      <Products />
      <About />
      <Pricing />
      <FAQ />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
