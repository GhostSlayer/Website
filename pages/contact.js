import {SEOComponent} from "../components/SEO";
import { signIn, signOut, useSession } from 'next-auth/client'
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AboutMe() {
  const [ session, loading ] = useSession()
  const [ message, setMessage ] = useState('')

  if (loading) return (
    <p className="container">Loading...</p>
  )

  const sendWebhook = (event) => {
    event.preventDefault()

    if (!event.target.message.value) return toast.error('The message can not be empty!')
    if (event.target.message.value.length > 2000) return toast.error('The message should contain only 2000 characters')

    fetch('https://ghostslayer.tk/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${session.user.name} | ${session.userId} | ${session.user.email}`,
        avatar_url: session.user.image,
        message: event.target.message.value
      })
    }).then(() => toast.success('Your message was sent!'))
  }

  return (
    <>
      <div className="container">
        <SEOComponent title="Contact Me"/>
        <h2 className="center">Contact Me</h2>
        <br/>
        {!session &&
        <center>
          <p>You have to sign in before contacting me.</p>
          <button onClick={() => signIn('discord')}>Sign in</button>
        </center>
        }

        {session &&

        <center>
          <Form className="contact-form" onSubmit={sendWebhook}>
            <Form.Group className="mb-3">
              <Form.Label>Discord Name and ID</Form.Label>
              <Form.Control type="text" placeholder={`${session.user.name} | ${session.userId}`} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} id="message" name="message" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </center>
        }
      </div>
    </>
  )
}
