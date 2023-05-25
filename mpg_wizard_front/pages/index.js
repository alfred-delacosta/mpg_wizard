import Head from 'next/head'
import Link from 'next/link'
import { jwt } from '@/utils/state'

export default function Home() {  
  return (
    <>
      <Head>
        <title>MPG Wizard</title>
        <meta name="description" content="MPG Wizard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div>The JWT is: {jwt.accessToken}</div>
        <section>
          <h1>Welcome to MPG Wizard 🚗</h1>
        </section>
        <section>
          <p>This app does all of the following things and will help the user with whatever they need!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro autem ullam laudantium praesentium tenetur maxime excepturi, labore sit, modi harum odio? Sequi cum, mollitia accusamus, quae cupiditate error repellat nulla, aspernatur ex dolor iure dolore! Unde sit voluptatum, quaerat qui ducimus, provident suscipit, eveniet dolores consectetur cupiditate velit odit quis aspernatur maiores! Optio praesentium, odit asperiores rerum sit explicabo illo totam, cupiditate placeat consequuntur aliquid quasi. Explicabo perspiciatis nobis sed quod, soluta molestiae, similique modi reiciendis quas excepturi ipsam quia fugiat vel. Qui minima facere odio consequuntur quasi blanditiis, error repellat sit eaque minus sint id laborum, incidunt illo cumque non amet velit adipisci obcaecati tempore necessitatibus quas! Architecto nihil illum vero a deleniti at doloribus nostrum velit itaque incidunt.</p>
          <div>
            <Link href="/login">Login</Link>
          </div>
        </section>
      </main>
    </>
  )
}
