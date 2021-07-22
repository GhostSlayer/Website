import {Button} from "react-bootstrap";
import {SEOComponent} from "../components/SEO";

export default function NotFound() {
  return (
    <div className="container">
      <SEOComponent title="Not Found"/>
      <h1>Not found</h1>
      <p>Sorry, the page you are trying to find was not found.</p>
      <p>One of these is the reason why the page was not found:</p>
      <ul>
        <li>
          The page does not exist anymore
        </li>
        <li>
          The page does not available yet
        </li>
        <li>
          You typed a wrong URL.
        </li>
      </ul>
      <Button variant="secondary" href="/">Back to home</Button>{' '}
      <Button variant="primary" href="https://discord.gg/dxZHNqXb45" target="_blank">Contact support</Button>{' '}
    </div>
  )
}
