import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout>
      <Hero/>
      <AboutMe/>
    </Layout>
  );
}

export default App;
