import Title from '../Title';

import './index.css';

const Article = ({
  title = 'Article',
  paragraphs = [<p>No content.</p>]
}) => (
  <article className="article container">
    <div>
      <Title>{title}</Title>
    </div>
    {paragraphs.map(p => p)}
  </article>
);

export default Article;
