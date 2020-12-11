import React from 'react'
import { FaGithub, FaHeart, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Container } from './styles'

const Footer = () => {
  return (
    <>
      <Container>
        <img src="../../../assets/logo1.svg" />
        <div className="redes">
          <a className="sociais" href="https://www.instagram.com/oficial_emunah/" target="_blank" title="Ir para o instagram">
            <FaInstagramSquare size="22" color="#2ECC71" />
          </a>
          <a className="sociais" href="https://www.linkedin.com/in/izael-silva-49b609186/" target="_blank" title="Ir para o Linkedin">
            <FaLinkedin size="22" color="#2ECC71" />
          </a>
          <a className="sociais" href="https://github.com/Ias4g" target="_blank" title="Ir para o GitHub">
            <FaGithub size="22" color="#2ECC71" />
          </a>
          <a className="sociais" href="https://twitter.com/OficialEmunah" target="_blank" title="Ir para o Twitter">
            <FaTwitter size="22" color="#2ECC71" />
          </a>
        </div>
        <p>Com <FaHeart size="14" color="#2ECC71" /> by Izael silva</p>
        <p>&copy;2020 &#10072; Scanner Code Inc.</p>
      </Container>
    </>
  )
}

export default Footer

