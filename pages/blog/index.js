import {SEOComponent} from "../../components/SEO";
import {sql_query} from "../../lib/mysql";
import {Badge, Card} from "react-bootstrap";
import Link from 'next/link'

export default function Blog(props) {
  const {posts} = props;

  console.log(posts)

  if (!posts) return <p>Something went wrong.</p>

  return (
    <center>
      <SEOComponent title="Blog posts"/>
      <h2 className="mb-4">Blog <Badge bg="secondary">Beta</Badge></h2>

      {posts.map(post => (
        // eslint-disable-next-line react/jsx-key
        <Card style={{ maxWidth: '45rem' }} className="mb-4">
          <Card.Body>
            <Card.Title><Link href={`/blog/${post.slug}`} passHref shallow>{post.title}</Link></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{post.created_at}</Card.Subtitle>
            <Card.Text>{post.content.slice(0, 50)}...</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </center>
  )
}

export async function getStaticProps(context) {
  try {
    const result = await sql_query(`
          SELECT * FROM posts
          ORDER BY created_at DESC
          LIMIT 10
      `);

    let posts = JSON.parse(JSON.stringify(result))
    return {
      props: {posts} // will be passed to our blog page component as props
    };
  } catch (e) {
    return {props: {posts:false}}
  }
}