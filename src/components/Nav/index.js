import './index.css';

import {
  ROOT_PATH,
  STORY_PATH,
  CHARACTERS_PATH,
  ACTIVE_CLASSNAME,
  CTA_TEXT
} from '../../constants';


const Nav = () => {
  const currentPath = window.location.pathname;

  const onClickStory = () => {
    if (currentPath !== STORY_PATH) {
      window.location.href = STORY_PATH;
    }
  };

  const onClickCharacters = () => {
    if (currentPath !== CHARACTERS_PATH) {
      window.location.href = CHARACTERS_PATH;
    }
  };

  const onClickPlay = () => {
    if (currentPath !== ROOT_PATH) {
      window.location.href = ROOT_PATH;
    }
  };

  return (
    <nav className="nav container">
      <div>
        <button
          onClick={onClickStory}
          className={`link ${currentPath === STORY_PATH ? ACTIVE_CLASSNAME : ''}`}
        >
          {CTA_TEXT[STORY_PATH]}
        </button>
        <button
          onClick={onClickCharacters}
          className={`link ${currentPath === CHARACTERS_PATH ? ACTIVE_CLASSNAME : ''}`}
        >
          {CTA_TEXT[CHARACTERS_PATH]}
        </button>
        <button onClick={onClickPlay}>
          {CTA_TEXT[ROOT_PATH]}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
