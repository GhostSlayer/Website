import {sql_query} from "../../lib/mysql"
import {SEOComponent} from "../../components/SEO"
import {DiscussionEmbed} from 'disqus-react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Image} from "react-bootstrap";

const components = {
  // eslint-disable-next-line react/display-name
  img: ({ src }) => (
    <center><Image className="md-img img-fluid" src={src} alt=""/></center>
  ),
};

const Post = ({ post, content }) => {
  const disqusShortname = "ghostslayer"
  const disqusConfig = {
    url: `https://ghostslayer.tk/blog/${post.slug}`,
    identifier: post.slug, // Single post id
    title: post.title // Single post title
  }

  if (!post) return (
    <center>
      <h3>Not Found</h3>
      <p>We couldn&lsquo;t found the blog post you are finding</p>
    </center>
  )

  return (
    <div className="container blog">
      <SEOComponent title={post.title}/>
      <h2>{post.title}</h2>
      <MDXRemote {...content} components={components}/>
      <br/>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  try {
    const result = await sql_query(`SELECT * FROM posts WHERE slug = ?`, params.slug);

    let post = JSON.parse(JSON.stringify(result[0]))


    const content = await serialize(post.content)
    return {
      props: { post, content }
    };
  } catch (e) {
    return { props: { post: false } }
  }
}

export default Post