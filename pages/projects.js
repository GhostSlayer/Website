import {SEOComponent} from "../components/SEO";
import {Card, CardGroup, Col, Row} from "react-bootstrap";
import {CardComponent} from "../components/Card";

export default function Projects() {
  return (
    <>
      <div>
        <SEOComponent title="Projects"/>
        <h2>Projects</h2><br/>

        <h4>Current projects</h4>
        <Row xs={1} md={3} className="g-4">
            <CardComponent
              title="PepperBot"
              description="A multipurpose bot which has not been released yet."
              url="https://pepperbot.xyz"
            />
            <CardComponent
              title="GS API"
              description="Formerly Drivet API. The first project started on Drivet. Unfortunately, Drivet is dead :("
              url="https://api.ghostslayer.tk"
            />
        </Row>
        <br/><br/>
        <h4>Past projects</h4>
        <Row xs={1} md={3} className="g-4">
          <CardComponent
            title="DUP"
            description="A Discord bot i started to help reporting users to DDUB. I still do some patches on the bot, but i'm not active anymore."
          />
          <CardComponent
            title="SlayBot"
            description="A multipurpose bot which was verified and in over 100 servers. Shut down since nobody used the bot."
            url="https://slaybot.xyz"
          />
        </Row>
      </div>
    </>
  )
}
