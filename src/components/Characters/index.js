import Title from '../Title';

import './index.css';

const Characters = () => (
  <section className="characters">
    <div className="title-wrapper">
      <Title>Characters</Title>
    </div>
    <div className="character-profile flora">
      <div className="container">
        <img
          alt="Flora - Meteora"
          src="/images/flora.png"
          width="100%"
          height="100%"
        />
        <aside>
          <h2>Flora</h2>
          <p>One night... a star fell toward Earth. Flora is the main character in the game who crash lands on our world in an asteroid. Early in the story, she meets Jake with whom she embarks upon a fantastic quest across New Earth, meeting friends and foes along the way, ultimately discovering who she is.</p>
        </aside>
      </div>
    </div>
    <div className="character-profile jake">
      <div className="container">
        <aside>
          <h2>Jake</h2>
          <p>Jake is a robotic automata who &mdash; like Flora &mdash; doesn't remember his past. After being reactivated by Flora, Jake suddenly recalls that he's waiting for a train, though the train and station are now long gone. Flora and Jake decide to partner up and head to the nearby town of Medina to find signs of life.</p>
        </aside>
        <img
          alt="Jake - Meteora"
          src="/images/jake.png"
          width="100%"
          height="100%"
          style={{ transform: 'rotateY(180deg)' }}
        />
      </div>
    </div>
    <div className="character-profile cidna">
      <div className="container">
        <img
          alt="Cidna - Meteora"
          src="/images/cidna.png"
          width="100%"
          height="100%"
        />
        <aside>
          <h2>Cidna</h2>
          <p>Upon arriving in Medina, Jake and Flora meet Cidna &mdash; a bereaved town native who tells them about an automata invasion that wiped out her people. Cidna feels strangely compelled to join the duo on their quest and plays an integral role in the story.</p>
        </aside>
      </div>
    </div>
    <div className="character-profile nighthawk">
      <div className="container">
        <aside>
          <h2>Nighthawk</h2>
          <p>Nighthawk is a warrior of the Beastmaster Tribe who joins the party out of sworn duty. As the story progresses, Nighthawk's fate becomes increasingly intertwined as he's able to rise to his higher purpose as both a member of the Tribe, and as a citizen of New Earth.</p>
        </aside>
        <img
          alt="Nighthawk - Meteora"
          src="/images/nighthawk.png"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </section>
);

export default Characters;
