import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Donate from "../components/home/Donate";
import About from "../components/home/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>NGO-T Web3all</title>
        <link rel="icon" href="/logo1.png" />
        {/* Meta Tags Dynamically generated by metaseo.itsvg.in */}
        <meta name="title" content="NGO-T BY Manu" />
        <meta
          name="description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
        />
        <meta name="copyright" content="Manojgowda" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta property="og:title" content="No More" />
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <Carousal />
        <Stats />
        <Donate />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </>
  );
}
