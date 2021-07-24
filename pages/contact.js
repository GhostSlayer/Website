import {SEOComponent} from "../components/SEO";
import { signIn, signOut, useSession } from 'next-auth/client'
import {Button, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Switch from "react-switch";

export default function AboutMe() {
  const [ session, loading ] = useSession()
  const [ message, setMessage ] = useState('')
  const [captchaDone, setCaptchaDone] = useState(false);
  const [removeEmail, setRemoveEmail] = useState(false);

  if (loading) return (
    <p className="container">Loading...</p>
  )

  const sendWebhook = (event) => {
    event.preventDefault()

    if (!event.target.message.value) return toast.error('The message can not be empty!')
    if (event.target.message.value.length > 2000) return toast.error('The message should contain only 2000 characters')

    if (!captchaDone) return toast.error('You didn\'t complete the captcha!')

    fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port ? window.location.port : ''}/api/contact`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${session.user.name} | ${session.userId} | ${!removeEmail ? session.user.email : 'No email'}`,
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
            <label htmlFor="material-switch">
              <Switch
                onChange={() => setRemoveEmail(!removeEmail)}
                checked={removeEmail}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <span className="switch-text">Remove Email</span>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip">
                    We will collect email addresses by default so we can contact back to you. If you are just sending feedback, the email is not necessary.
                  </Tooltip>
                }
              >
                <span className="d-inline-block switch-text">
                  <i className="fas fa-info-circle"/>
                </span>
              </OverlayTrigger>
            </label>
            <HCaptcha
              sitekey="84cdb395-5b00-4355-87ff-237a173f6ee0"
              id="signup-page"
              theme="dark"
              onVerify={(token,ekey) => {
                fetch(`https://hcaptcha.com/siteverify?response=${token}&secret=0x2f00194921669162C5ca3d63C8921c81D873C225`, {
                  method: 'POST',
                  mode: 'no-cors',
                });

                setCaptchaDone(true);
              }}
            />
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </center>
        }
      </div>
    </>
  )
}
