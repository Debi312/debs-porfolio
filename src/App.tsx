import AboutMe from './components/AboutMe.tsx'
import Projects from './components/Projects.tsx'
import Technologies from './components/Technologies.tsx'
import Layout from './components/Layout.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <Layout>
      <Header />
      <Projects />
      <AboutMe />
      <Technologies />
      <Footer />
    </Layout>
  )
}

export default App
