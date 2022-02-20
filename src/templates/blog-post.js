import Prism from 'prismjs'

import { useEffect } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { timeToRead } from 'lib/utils'

import RecommendedPosts from 'components/RecommendedPosts'

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
  ButtonBack
} from 'styles/base'

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [post])

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Hugo Fusinato`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://hugofusinato.com/${post.slug}`,
          title: `${post.frontmatter.title} - Hugo Fusinato`,
          description: post.frontmatter.description,
          images: [
            {
              url: `https://hugofusinato.com/${post.frontmatter.title}.png`,
              alt: `${post.frontmatter.title}`
            }
          ]
        }}
      />
      <PostHeader>
        <Link href="/" passHref>
          <ButtonBack>← Voltar na listagem</ButtonBack>
        </Link>

        <PostDate>
          {post.frontmatter.date} • {timeToRead(post.content)}
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContent>
      <RecommendedPosts next={post.nextPost} previous={post.prevPost} />
    </>
  )
}

export default BlogPost
