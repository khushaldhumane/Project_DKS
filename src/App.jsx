import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Owner from './components/Owner'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import OrderForm from './components/OrderForm'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Owner />
        <Categories />
        <HowItWorks />
        <OrderForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
