import { useRouter } from 'next/router'
import {AlertComponent} from "../components/Alert";

export default function Drivet() {
  const router = useRouter()
  const { ref } = router.query

  return (
    <div className="container">
      {ref === 'drivet.xyz' &&
        <AlertComponent
          show
          variant="warning"
          title="Dear Drivet User"
          desc="We automatically redirected you here from drivet.xyz. We have shut down Drivet. Please read the statement below"
        />
      }

      <h2>Drivet has been shut down</h2>
      <p>
        As of 22.07.2021, i have shut down all Drivet&apos;s services. This doesn&apos;t include the API and PepperBot.
        The API will be back alive at <a href="https://api.ghostslayer.tk">https://api.ghostslayer.tk</a> in the near time
      </p>
      <p>
        Nobody really used Drivet&apos;s services, and the Discord server was extremely inactive. So i didn&apos;t have a choice.
        All the services will be under my name, GhostSlayer, not Drivet anymore.
      </p>
      <p>
        Drivet&apos;s second developer, VenixDev will help me with developing PepperBot, and we will hardly focus on PepperBot&apos;s stability and performance
      </p>
      <small>- Slayer <small>22.07.2021</small></small>
    </div>
  )
}
