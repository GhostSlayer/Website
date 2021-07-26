import {SEOComponent} from "../components/SEO";
import {Alert, Button, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {AlertComponent} from "../components/Alert";

export default function Contact() {
  const [captchaDone, setCaptchaDone] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendWebhook = (event) => {
    event.preventDefault()

    if (!event.target.email.value) return toast.error('Please enter a email')

    if (event.target.category.value === 'Select one category') return toast.error('Please select a category')

    if (!event.target.message.value) return toast.error('The message can not be empty!')
    if (event.target.message.value.length > 2000) return toast.error('The message should contain only 2000 characters')

    if (!captchaDone) return toast.error('You didn\'t complete the captcha!')
    if (messageSent) return toast.error('You have already sent a message, please reload to make a new message.')

    fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port ? window.location.port : ''}/api/contact`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${event.target.email.value} | ${event.target.category.value}`,
        message: event.target.message.value
      })
    }).then(() => { setMessageSent(true); toast.success('Your message was sent!')})
  }

  return (
    <>
      <div>
        <SEOComponent title="Contact Me"/>
        <h2 className="center">Contact Me</h2>

        <center>

          <Form className="contact-form" onSubmit={sendWebhook}>
            <AlertComponent show desc="As of 7/26/21, Discord login has been removed and will use email instead."/>

            <Form.Group className="mb-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder={`joe@tesla.com`} id="email" name="email"/>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Category</Form.Label>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip">
                    Select the category that fits your needs. The category doesn&apos;t have to be accurate
                  </Tooltip>
                }
              >
                <span className="d-inline-block tooltip-logo">
                  <i className="fas fa-info-circle"/>
                </span>
              </OverlayTrigger>
              <Form.Select id="category" name="category" defaultValue="Select one category">
                <option disabled value="Select one category">Select one category</option>
                <option>Support</option>
                <option>Feedback</option>
                <option>Bug</option>
                <option>Question</option>
                <option>Suggestion</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} id="message" name="message" />
            </Form.Group>
            <HCaptcha
              sitekey="84cdb395-5b00-4355-87ff-237a173f6ee0"
              id="signup-page"
              theme="dark"
              onVerify={(token,ekey) => {
                fetch(`https://hcaptcha.com/siteverify?response=${token}&secret=${process.env.HCAPTCHA_SECRET}`, {
                  method: 'POST',
                  mode: 'no-cors',
                });

                setCaptchaDone(true);
              }}
            />
            <br/>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </center>
      </div>
    </>
  )
}
