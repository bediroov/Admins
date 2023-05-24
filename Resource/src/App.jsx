import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'react-bootstrap'

import Main from './components/Main'
import Section from './components/Section'
import Sectionone from './components/Sectionone'
import Footer from './components/Footer'
import Bloglist from './pages/Bloglist'
import BlogDetails from './pages/BlogDetails'
import Home from './pages/Home'
import About from './pages/About'



const App = () => {
  return (
   <>
    <BrowserRouter>
      <Header />

      <Container>


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Bloglist />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
        </Routes>



      </Container>
      <Main />
      <Section />
      <Sectionone />
      <Footer />
    </BrowserRouter>
   
   </>
  )
}

export default App