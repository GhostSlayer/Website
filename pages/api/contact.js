export default function handler(req, res) {
  if (req.method === 'POST') {
    fetch(
      'https://canary.discord.com/api/webhooks/868227548516085800/TfGaO6owArBDy29GfGOkXdP3lL1dc3Pp-mm-TRIy_sIH-da8ojWGOlhjkoB61yoXU6Dy',
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