import {sql_query} from "../../lib/mysql"
import {SEOComponent} from "../../components/SEO"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import { signIn, signOut, useSession } from 'next-auth/client'
import {toast} from "react-toastify";
import { useState } from "react";

const components = {
  // eslint-disable-next-line react/display-name
  img: ({ src }) => (
    <center><Image className="md-img img-fluid" src={src} alt=""/></center>
  ),
};

const Post = ({ post, content, comments }) => {
  const [ session, loading ] = useSession()
  const [ message, setMessage ] = useState('')

  if (loading) return (
    <center>
      Loading...
    </center>
  )

  if (!post) return (
    <center>
      <h3>Not Found</h3>
      <p>We couldn&lsquo;t found the blog post you are finding</p>
    </center>
  )

  const sendComment = (event) => {
    event.preventDefault()
    console.log(session)

    if (!event.target.content.value) return toast.error('You have to type something before sending a comment!')

    fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port ? window.location.port : ''}/api/comment`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: session.user.name,
        slug: post.slug,
        content: event.target.content.value
      })
    }).then(() => { toast.success('Your comment was sent! Reload to see your comment')})
  }

  const resetForm = () => { 
    document.getElementById("form-id").reset();
  }
  

  return (
    <div className="container blog">
      <SEOComponent title={post.title}/>
      <h2>{post.title}</h2>
      <MDXRemote {...content} components={components}/>
      <br/>
      <p>Comments</p>
      <hr/>
      {!session && <>
        <Button variant="primary" className="mb-5" onClick={() => signIn('github')}><i className="fab fa-github"/> Login with GitHub</Button>
      </>}

      {session && <>
        <Form onSubmit={(event) => { sendComment(event); resetForm() }} id="form-id">
          <Form.Group className="mb-3">
            <Form.Label>Send a comment to this blog post</Form.Label>
            <Form.Control as="textarea" id="content" name="content" rows={2}/>
          </Form.Group>
          <p style={{ fontSize: 'smaller' }}>Your username and avatar will be shown in the comment. Spamming will result on a IP Ban.</p>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </>}

      <br/>

      {comments.map(comment => (
        <div>
          <Image className="nav-img" style={{ float: 'left', marginBottom: '6px', marginTop: '-3px' }} width={30} src={session.user.image} alt=""></Image>
          <h5>{comment.author} <small style={{ fontSize: 'x-small' }}>{comment.created_at}</small></h5>
          <p>{comment.content}</p>
        </div>
      ))}
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
    const result = await sql_query(`SELECT * FROM blog_posts WHERE slug = ?`, params.slug);
    const commentResult = await sql_query(`SELECT * FROM blog_comments WHERE post_slug = ? ORDER BY created_at DESC`, params.slug);

    let post = JSON.parse(JSON.stringify(result[0]))
    let comments = JSON.parse(JSON.stringify(commentResult))

    const content = await serialize(post.content)
    return {
      props: { post, content, comments }
    };
  } catch (e) {
    return { props: { post: false } }
  }
}

export default Post