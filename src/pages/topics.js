import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import media from 'styled-media-query'

import slugify from 'slugify'
import { getAllPosts } from 'lib/api'
import { unique } from 'lib/utils'

import Post from 'components/Post'

const TopicsTitle = styled.h2`
  background: var(--borders);
  color: var(--texts);
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem 4.4rem;

  ${media.lessThan('large')`
    font-size: 1.5rem;
    padding: 1rem;
  `}
`

const TopicsPage = ({ posts }) => {
  const postList = posts.filter(post => post.frontmatter.categories !== null)

  const categories = postList
    .map(post => post.frontmatter.categories?.[0])
    .filter(unique)
    .filter(n => n)

  const slugifyCategory = category => slugify(category, { lower: true })

  const getPostsByCategory = category =>
    postList.filter(post => post.frontmatter.categories?.[0] === category)

  return (
    <>
      <NextSeo
        title="Topics | Hugo Fusinato"
        description="All the topics I have posted about"
        openGraph={{
          images: [
            {
              url: '',
              width: 1200,
              height: 630,
              alt: 'Hugo Fusinato Topics'
            }
          ]
        }}
      />

      {categories.map((category, i) => (
        <section key={i}>
          <TopicsTitle id={slugifyCategory(category)}># {category}</TopicsTitle>

          {getPostsByCategory(category).map(post => (
            <Post
              key={post.slug}
              slug={post.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              description={post.frontmatter.description}
              main_class={post.frontmatter.main_class}
              disableCard={true}
            />
          ))}
        </section>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts
    }
  }
}

export default TopicsPage
