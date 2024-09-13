import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/e-com.png'
import IMG2 from '../../assets/chatAI.png'
import IMG3 from '../../assets/portfolio_img.png'
import IMG4 from '../../assets/honey.png'
import IMG5 from '../../assets/retro.png'
import IMG6 from '../../assets/w.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-Commerce Website ',
    desc: "A multi-page e-commerce site developed using HTML, CSS, JavaScript, and JSON, featuring product data fetching, add-to-cart, WhatsApp sharing, and email inquiry functionalities.",
    github: 'https://github.com/S-Juneja/E-Commerce-Site',
    demo:"https://simple-ecom-js-site.netlify.app",
  }, {
    id: 2,
    image: IMG2,
    title: 'ChatGPT Clone',
    desc: "A ChatGPT clone created with HTML, CSS, JavaScript, and API integration, offering two themes, conversation persistence via local storage, and an option to delete conversation history and copy text.",
    github: 'https://github.com/S-Juneja/ChatGPT-Clone',
    demo:"https://chatgpt5clone.netlify.app/",
  }, {
    id: 3,
    image: IMG3,
    title: 'Portfolio Website ',
    desc: "A responsive portfolio built with HTML, CSS, and React JS, showcasing skills, projects, and contact information, with integrated LinkedIn and GitHub profiles.",
    github: 'https://github.com/S-Juneja/SJ-React-Portfolio-Website',
    demo:"https://https://sj-port-folio.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: 'Honey Store Website',
    desc: "A responsive landing page for a honey store built with HTML, CSS, and JavaScript, focusing on user-friendly navigation and cross-device compatibility.",
    github: 'https://github.com/S-Juneja/Honey-Store-Landing-Page-',
    demo:"https://honey-store5.netlify.app/"
  }, {
    id: 5,
    image: IMG5,
    title: 'Retro Looking Website',
    desc: "A retro-themed landing page designed with HTML, CSS, GSAP, and JavaScript, featuring unique loaders and smooth scrolling animations for a vintage yet modern feel.",
    github: 'https://github.com/S-Juneja/Retro-Style-Website-Landing-Page',
    demo:"https://sj-miranda-clone.netlify.app/",
  }, {
    id: 6,
    image: IMG6,
    title: 'Weather-App',
    desc: "A weather app using HTML, CSS, and JavaScript that displays current or searched location weather, with dynamic background images based on the location, powered by APIs like openweathermap API etc.",
    github: 'https://github.com/S-Juneja/Weather-App',
    demo:"https://weather-js-app-lication.netlify.app",
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='.portfolio-item-desc' >{desc}</div>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="__blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="__blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
