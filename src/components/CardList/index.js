import Card from '../Card';

import './index.css';

const CardList = ({ cards }) => (
  <ul className="card-list">
    {cards.map((card, index) => (
      <Card key={index} editorial={!!card.editorial}>
        {card.component}
      </Card>
    ))}
  </ul>
);

export default CardList;
