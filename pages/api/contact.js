export default function handler(req, res) {
  if (req.method === 'POST') {
    fetch(
      process.env.CONTACT_WEBHOOK,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: req.body.username,
          avatar_url: req.body.avatar_url,
          content: req.body.message,
        }),
      }
    ).catch(err => { return res.send(500) })

    return res.send(200)
  } else {
    return res.send(405)
  }
}