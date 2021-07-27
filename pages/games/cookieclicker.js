import {SEOComponent} from "../../components/SEO";
import {useEffect, useState} from "react";
import {Image} from "react-bootstrap";

export default function AboutMe() {
  const [cookies, setCookies] = useState(0)

  const addCookie = () => {
    localStorage.setItem('cookies', cookies + 1)
    setCookies(parseInt(cookies) + 1)
  }

  // fetch data
  useEffect(() => {
    const value = localStorage.getItem('cookies');
    const cookies = !!value ? value : 0;
    setCookies(cookies)
  }, [])

  return (
    <div>
      <SEOComponent title="Cookie Clicker"/>
      <h2>Cookie Clicker</h2>
      <p>You have {cookies} cookies!</p>
      <Image
        width="200"
        alt="Cookie"
        src="https://assets.stickpng.com/images/580b57fbd9996e24bc43c0fc.png"
        onClick={() => { addCookie() }}
      />
    </div>
  )
}
