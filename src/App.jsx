import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections";
import Provider from "./components/Provider";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

const App = () => (
  <main className="relative">
    <Nav />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <section className="xl:padding-l wide:padding-r padding-b">
              <Hero />
            </section>
            <section className="padding">
              <PopularProducts />
            </section>
            <section className="padding">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding bg-pale-blue">
              <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="padding-x padding-t pb-8 bg-black">
              <Footer />
            </section>
          </>
        }
      />
      <Route path="/provider" element={<Provider />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </main>
);

export default App;
