import CardList from '../CardList';

import { LIGHT_CLASSNAME } from '../../constants';

import './index.css';

const Details = ({ cards = [], light = false }) => (
  <div className={`details-wrapper${light ? ` ${LIGHT_CLASSNAME}` : ''}`}>
    <div className="details container">
      <CardList cards={cards} />
    </div>
  </div>
);

export default Details;
