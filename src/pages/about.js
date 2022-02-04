import { NextSeo } from 'next-seo'
import SocialLinks from 'components/SocialLinks'

import { MainContent } from 'styles/base'

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre mim | Hugo Fusinato"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://hugofusinato.com',
        site_name: 'Hugo Fusinato',
        title: 'Hugo Fusinato',
        images: [
          {
            url: 'https://willianjusten.com.br/assets/img/blog-cover.png',
            width: 1200,
            height: 630,
            alt: 'Hugo Fusinato Blog'
          }
        ]
      }}
    />
    <MainContent>
      <h1>About Me</h1>
      <p>
        Hugo, developer who loves challenges and always curious to understand how tech works.
      </p>

      <p>
        What gets me going is building great products for users while keeping code clean and efficient. I enjoy collaborating with team members to bring the best solution to life. 
      </p>

      <p>
        My current focus is on microservices and scalable systems, but over the years I have accumulated extensive experience with front end and back end web development. When my company uses a new language or tech stack I always learn fast. I am constantly searching for new updates on tech that could be useful in the products I am working on.
      </p>

      <p>
        I have worked at startups, small companies, and large corporations, and know how to adapt to each environment.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
)

export default AboutPage
