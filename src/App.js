import { BrowserRouter as Router, Routes , Route , Link } from 'react-router-dom'

import Home from './Components/pages/Home'
import Company from './Components/pages/Company'
import  Contato from './Components/pages/Contato'
import NewProject from './Components/pages/NewProject'
import Projects from './Components/pages/Projects'


import Container from './Components/layout/Container'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'


function App() {
  return (
   <Router >

    <Navbar />
    
    
    <Container customClass = "min-height">
    <Routes>
        
      
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route exact path='/newproject' element={<NewProject />}/>
      <Route exact path='/company' element={<Company />}/>
      <Route path="/projects" element={<Projects />} />
      
      </Routes>
      </Container>
      <Footer />
   </Router>



  );
}

export default App;
