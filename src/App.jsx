import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

import article from 'data/article.json';
import stats from './data/stats.json';
import list from './data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard {...article} />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics stats={stats} title="Main Statistics" />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={list} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
