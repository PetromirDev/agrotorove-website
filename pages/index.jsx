import Head from "next/head"
// Components
import Navbar from "../components/Navbar"
// Sections
import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import Steps from "../components/Home/Steps"
import Services from "../components/Home/Services"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Head>
        <title>Начало | Агро Торове 77 ЕООД</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Steps />
        <Footer />
      </main>
    </>
  )
}

export default Home