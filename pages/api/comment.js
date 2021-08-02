import {sql_query} from "../../lib/mysql"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const comment = { author: req.body.author, post_slug: req.body.slug, content: req.body.content, avatar: req.body.avatar }
    const commentQuery = await sql_query(`INSERT INTO blog_comments SET ?`, comment);

    return res.send(200)
  } else {
    return res.send(405)
  }
}