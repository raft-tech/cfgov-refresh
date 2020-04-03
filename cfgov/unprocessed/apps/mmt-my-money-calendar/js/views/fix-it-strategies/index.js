import { observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';
import { useStore } from '../../stores';
import { CardGroup, Card } from '../../components/card';
import { useScrollToTop } from '../../components/scroll-to-top';

import { ideaRound } from '../../lib/icons';
import { useEffect } from 'react';

function FixItStrategies() {
  const { uiStore, strategiesStore: strategies } = useStore();

  useEffect(() => {
    if (uiStore.currentWeek) return;
    uiStore.setCurrentWeek(new Date());
  }, []);

  useScrollToTop();

  if (!strategies.strategyResults.length) {
    return (
      <section className="strategies">
        <p>
          <em>There are no strategy recommendations for this week</em>
        </p>
        <Link to="/calendar">Back to Calendar</Link>
      </section>
    );
  }

  return (
    <section className="strategies">
      <header className="strategies-header">
        <h2 className="strategies-header__title">Fix-It Strategies</h2>

        <p className="strategies-header__intro">
          This week you went into the red. Below are the transactions you made. Explore the different strategies that can prevent going into the red in the future.
        </p>
      </header>

      <main className="strategies-cards">
        <CardGroup columns={2}>
          {strategies.strategyResults.map((result, index) => (
            <Card title={result.title} icon={ideaRound} key={`strategy-${index}`}>
              {result.text}
            </Card>
          ))}
        </CardGroup>
      </main>
    </section>
  );
}

export default observer(FixItStrategies);
