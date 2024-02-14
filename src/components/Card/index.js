import './index.css';

import {
  CARD_CLASSNAME,
  EDITORIAL_CLASSNAME
} from '../../constants';

const Card = ({
  editorial = false,
  className = CARD_CLASSNAME,
  children = null
}) => (
  <li
    className={`${className}${editorial ? ` ${EDITORIAL_CLASSNAME}` : ''}`}
  >
    {children}
  </li>
);

export default Card;
