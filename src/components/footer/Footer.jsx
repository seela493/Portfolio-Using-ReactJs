import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className="footer">
          <div className="container">
            <p className="copyright">© 2025 - All Rights Reserved</p>
            <p className="design-credit">Design & Developed by Shila Pradhan</p>
          </div>
          <div className="socials">
              <SocialMedia></SocialMedia>
            </div>
        </footer>
  )
}

export default Footer
