import {SEOComponent} from "../components/SEO";
import {Image, Row} from "react-bootstrap";
import {CardComponent} from "../components/Card";
import {useRouter} from "next/router";

export default function Projects() {
  const router = useRouter()
  const { aboutdavid } = router.query

  return (
    <>
      <div>
        <SEOComponent title="Projects"/>
        <h2>Projects</h2>
        <p>A showcase of all projects i&apos;m working or i have worked on.</p><br/>

        { aboutdavid === '1' &&
          <>
            <Image width="100" src="https://as1.ftcdn.net/jpg/02/09/02/88/1000_F_209028824_cE8iT1YbUTk6KxtEuyJKV5SWaeUx9T6b.jpg" alt="RED PANDA"/>
            <h4 className="project-title text-danger"> Red Panda Projects!</h4>
            <Row xs={1} md={3} className="g-4">
              <CardComponent
                title="aboutDavid Red Panda Blog"
                description="A sussy as fuck wed panda bwoggy fwoggy uwu owo made by aboutDavid"
              />
            </Row>
            <br/><br/>
          </>
        }

        <h4 className="project-title">Current projects</h4>
        <Row xs={1} md={3} className="g-4">
          <CardComponent
            title="PepperBot"
            description="A multipurpose bot which has not been released yet. Made with Eris.js"
            url="https://pepperbot.xyz"
          />
          <CardComponent
            title="GS API"
            description="Formerly Drivet API. The first project started on Drivet. GS API is developed using Express and Swagger UI. The code hasn't been updated for a few months."
            url="https://api.ghostslayer.tk"
            github="GhostSlayer/API"
          />
          <CardComponent
            title="EetuBot"
            description="A parody bot made from a guy in our class. There is a built-in Kahoot bot. I never code it on summer vacation. It also used MongoDB but later changed to MySQL"
            github="EetuBot/EetuBot"
          />
        </Row>

        <br/><br/>

        <h4 className="project-title">Past projects</h4>
        <Row xs={1} md={3} className="g-4">
          <CardComponent
            title="DUP"
            description="A Discord bot i started to help reporting users to DDUB. I still do some patches on the bot, but i'm not active anymore."
            github="DrivetDevelopment/DUP"
          />
          <CardComponent
            title="SlayBot"
            description="A multipurpose bot which was verified and in over 100 servers. Shut down because nobody used the bot."
            url="https://slaybot.xyz"
          />
          <CardComponent
            title="SlayChat"
            description="A small socket.io real-time chat website. I didn't work on it for a long time. The website is hosted at Heroku. Last commit was made in 2020"
            url="https://slaychat-web.herokuapp.com/"
            github="GhostSlayer/SlayChat"
          />
        </Row>
      </div>
    </>
  )
}
