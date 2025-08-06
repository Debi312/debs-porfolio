import AboutMe from './components/AboutMe.tsx'
import Projects from './components/Projects.tsx'
import Technologies from './components/Technologies.tsx'
import Layout from './components/Layout.tsx'
import Navbar from './components/Navbar.tsx'
import Header from './components/Header.tsx'
function App() {

  return (
    <Layout>
      <Navbar />
      <Header />
      <Projects />
      <AboutMe />
      <Technologies />
    </Layout>
  )
}

export default App
