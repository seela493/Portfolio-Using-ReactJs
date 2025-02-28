import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/header'

const Resume = () => {
  return (
    <div>
        <Header></Header>
        <div className="container" style={{width:"1200px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img style={{width:"960px", height:"1200px", padding:"50px"}} src="./images/Shila-Pradhan.jpg" alt="Resume" />
        </div>
      <Footer></Footer>
    </div>
  )
}

export default Resume
