import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 id="kitsch-retro">Typography</h1>
      <h2 id="typewriter-delectus-cred">Some sensible defaults</h2>
      <p>
        Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente twee stumptown ex. Duis Carles pickled,
        cornhole Thundercats McSweeney&#39;s minim PBR vegan Tumblr irony. Kogi eu Thundercats, sed scenester before
        they sold out et aesthetic. Elit cred Vice ethical pickled sartorial. Stumptown roof party freegan High Life
        vero, ea sed minim meggings.
      </p>
      <h3 id="truffaut-disrupt-sartorial-deserunt">Truffaut disrupt sartorial deserunt</h3>
      <p>
        Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester.
        Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy
        magna 90&#39;s duis typewriter banjo organic leggings Vice.
      </p>
      <h4 id="fingerstache-nesciunt-lomo-nostrud-hoodie">Fingerstache nesciunt lomo nostrud hoodie</h4>
      <ul>
        <li>Roof party put a bird on it incididunt sed umami craft beer cred.</li>
        <li>
          Carles literally normcore, Williamsburg Echo Park fingerstache photo booth twee keffiyeh chambray whatever.
        </li>
        <li>
          Scenester High Life Banksy, proident master cleanse tousled squid sriracha ad chillwave post-ironic retro.
        </li>
      </ul>
      <p>
        Laboris selfies occaecat umami, forage Tumblr American Apparel. Retro Terry Richardson culpa id swag polaroid
        Intelligentsia American Apparel eu, esse non post-ironic fugiat master cleanse. Direct trade gluten-free blog,
        fanny pack cray labore skateboard before they sold out adipisicing non magna id Helvetica freegan. Disrupt
        aliqua Brooklyn church-key lo-fi dreamcatcher.
      </p>
    </main>
  </div>
);

export default Home;
