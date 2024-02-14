import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Player from './components/Player';
import Details from './components/Details';
import WorldMap from './components/WorldMap';
import Footer from './components/Footer';
import Article from './components/Article';
import Characters from './components/Characters';
import PaymentForm from './components/PaymentForm';

import {
  BASE_URL,
  ROOT_PATH,
  STORY_PATH,
  CHARACTERS_PATH
} from './constants';

import './App.css';

let email;

const setEmail = updatedEmail => (
  email = updatedEmail
);

const App = () => {
  const [isPaymentFormShown, setIsPaymentFormShown] = useState(false);

  const onClickPreorder = () => (
    setIsPaymentFormShown(true)
  );

  const onClickPaymentForm = ({ target: { className }}) => {
    if (className === 'payment-form') {
      setIsPaymentFormShown(false);
    }
  };

  const onPayment = async ({ squareToken }) => {
    const reasons = [];

    if (!email?.match('@') || email.trim().length < 3) {
      reasons.push('invalid email address');
    }

    if (!squareToken) {
      reasons.push('Invalid payment.');
    }

    if (reasons.length) {
      alert(`Issues: ${reasons.join(', ')}`);

      return;
    }

    const payload = {
      squareToken,
      email
    };

    try {
      const response = await fetch(`${BASE_URL}/purchase`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response?.ok) {
        const result = await response.json();

        if (result?.success) {
          alert('Your order has been placed! You will be notified by email when the full version is released.');
          setIsPaymentFormShown(false);
        } else {
          if (result?.message) {
            alert(result.message);
          } else {
            alert('Unknown error.');
          }
        }
      }
    } catch (error) {
      alert(error?.message || 'Unknown error.');
    }
  };

  const cards = [
    {
      editorial: true,
      component: (
        <>
          <figure>
            <img
              alt="Jake - Meteora"
              src="/images/jake.png"
              width="100%"
              height="100%"
            />
          </figure>
          <p>
            <span className="chapter">A</span>n adventure awaits, where you’ll unravel an unforgettable story, meet extraordinary characters, and embark on a courageous quest through a wonderful fantasy world!
          </p>
          <button className="cta-button" onClick={onClickPreorder}>
            <span>Pre-Order</span>
            <span>$9.99 <span className="small">USD</span></span>
          </button>
        </>
      )
    },
    {
      component: (
        <>
          <div className="thumb">
            <img
              alt="Screenshot - Meteora"
              src="/images/screenshot1.png"
              width="100%"
              height="100%"
            />
          </div>
          <p>
            A classic role-playing experience rich with dialog and storytelling, discovery, and challenging combat in an immersive, fantastical setting!
          </p>
        </>
      )
    },
    {
      component: (
        <>
          <div className="thumb">
            <img
              alt="Screenshot - Meteora"
              src="/images/screenshot2.png"
              width="100%"
              height="100%"
            />
          </div>
          <p>
            Packed with exhilarating challenges and encounters at every turn, fight your way through a delightfully colorful yet dystopian sci-fi landscape.
          </p>
        </>
      )
    }
  ];

  const currentPath = window.location.pathname;

  let children = null;

  switch (currentPath) {
    case ROOT_PATH:
      children = <>
        <Player />
        <Details cards={cards} />
        <WorldMap />
      </>;

      break;

    case STORY_PATH:
      children = <>
        <Article
          title="Story"
          paragraphs={[
            <p><span className="chapter">I</span>ntroduction</p>,
            <p>METEORA is the story of an alien girl who crash lands on Earth in the distant future in a land called New Earth. Soon after her arrival, she meets a robotic automata who she soon befriends and the two head out on an unforgettable adventure!</p>,
            <p><span className="chapter">B</span>ackground</p>,
            <p>100 years have passed since the Fourth Great War and the global population has fallen to less than 5,000 people. The world has become overrun by intelligent automata, which are managed by a self-aware operating system called Eschaton.</p>,
            <p>One night... a star fell toward Earth. Within the fiery meteor a girl slept peacefully in hibernation. No one was aware of her arrival, not even the all-powerful Eschaton.</p>,
            <p>The girl awakens in a forest clearing outside the megacity of Metropia. Our story begins here...</p>
          ]}
        />
        <div style={{ marginTop: '15rem' }}>
          <Details light cards={cards} />
        </div>
      </>;

      break;

    case CHARACTERS_PATH:
      children = <>
        <Characters />
        <div style={{ marginTop: '15rem' }}>
          <Details light cards={cards} />
        </div>
      </>;

      break;

    default:
      break;
  }

  return (
    <main className="App">
      {isPaymentFormShown && (
        <PaymentForm
          email={email}
          setEmail={setEmail}
          onPayment={onPayment}
          onClickPaymentForm={onClickPaymentForm}
        />
      )}
      <Nav />
      <Hero />
      {children}
      <Footer />
    </main>
  );
};

export default App;
