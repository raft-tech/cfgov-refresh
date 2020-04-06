import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useStore } from '../../../stores';
import { CardGroup, Card } from '../../../components/card';
import { useScrollToTop } from '../../../components/scroll-to-top';
import { dayjs } from '../../../lib/calendar-helpers';
import { ButtonLink } from '../../../components/button';

import { arrowLeft, ideaRound } from '../../../lib/icons';

function FixItStrategies() {
  const { uiStore, strategiesStore: strategies } = useStore();
  const { week } = useParams();

  useEffect(() => {
    if (!uiStore.currentWeek && !week) {
      uiStore.setCurrentWeek(dayjs());
      return;
    }

    const weekInt = Number(week);

    if (weekInt && weekInt !== uiStore.currentWeek.valueOf())
    uiStore.setCurrentWeek(dayjs(weekInt));
  }, []);

  useScrollToTop();

  if (!strategies.strategyResults.length) {
    return (
      <section className="strategies">
        <header className="strategies-header">
          <h2 className="strategies-header__title">
            Fix-It Strategies
          </h2>
        </header>

        <p>
          <em>There are no strategy recommendations for this week</em>
        </p>

        <footer className="strategies-footer">
          <ButtonLink iconSide="left" icon={arrowLeft} to="/calendar">Back to Calendar</ButtonLink>
        </footer>
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
              <p>
                {result.text}
              </p>

              <div className="m-card_footer">
                <ButtonLink to={`/calendar/add/${result.event.id}/edit`} variant="secondary">
                  Edit {result.event.categoryDetails.name}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </CardGroup>
      </main>

      <footer className="strategies-footer">
        <ButtonLink iconSide="left" icon={arrowLeft} to="/calendar">Back to Calendar</ButtonLink>
      </footer>
    </section>
  );
}

export default observer(FixItStrategies);
