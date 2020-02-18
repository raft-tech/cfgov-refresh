import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores';
import { useClickHandler } from '../../../lib/hooks';
import Day from './day';
import Details from './details';
import Button, { ButtonLink } from '../../../components/button';
import { useScrollToTop } from '../../../components/scroll-to-top';
import { DAY_LABELS } from '../../../lib/calendar-helpers';

import arrowRight from '@cfpb/cfpb-icons/src/icons/arrow-right.svg';
import arrowLeft from '@cfpb/cfpb-icons/src/icons/arrow-left.svg';
import addRound from '@cfpb/cfpb-icons/src/icons/add-round.svg';

const ifDevelopment = (fn) => {
  if (process.env.NODE_ENV !== 'development') return null;
  return fn();
};

const CalendarWeekRow = ({ days }) => (
  <div className="calendar__row">
    {days.map((day) => (
      <Day day={day} key={`day-${day.toFormat('ooo')}`} />
    ))}
  </div>
);

function Calendar() {
  const { uiStore, eventStore } = useStore();
  const location = useLocation();
  const params = useParams();

  const nextMonth = useClickHandler(() => uiStore.nextMonth(), []);
  const prevMonth = useClickHandler(() => uiStore.prevMonth(), []);
  const gotoToday = useClickHandler(() => uiStore.gotoDate(DateTime.local()), []);

  const loadSeedData = useClickHandler(async () => {
    await window.seedTestData();
    await eventStore.loadEvents();
    alert('Seed data loaded');
  }, []);

  const clearDatabase = useClickHandler(async () => {
    await window.clearTestData();
    await eventStore.loadEvents();
    alert('Database cleared');
  }, []);

  useEffect(() => {
    uiStore.setPageTitle('myMoney Calendar');
    uiStore.setSubtitle(uiStore.currentMonth.toFormat('MMMM, y'));
  }, [location, params, uiStore.currentMonth]);

  const seedButton = ifDevelopment(() => (
    <Button onClick={loadSeedData} variant="secondary" style={{ margin: '.5rem 0' }}>
      Seed Database
    </Button>
  ));
  const clearButton = ifDevelopment(() => (
    <Button onClick={clearDatabase} variant="secondary">
      Clear Database
    </Button>
  ));

  useScrollToTop();

  return (
    <section className="calendar">
      <h1>{uiStore.pageTitle}</h1>
      <h2>{uiStore.subtitle}</h2>

      <nav className="calendar__nav">
        <Button icon={arrowLeft} iconSide="left" onClick={prevMonth}>
          Previous
        </Button>
        <Button onClick={gotoToday}>Today</Button>
        <Button icon={arrowRight} iconSide="right" onClick={nextMonth}>
          Next
        </Button>
      </nav>

      <header className="calendar__day-labels">
        {DAY_LABELS.map((label) => (
          <div className="calendar__day-label">{label}</div>
        ))}
      </header>

      <div className="calendar__rows">
        {uiStore.monthCalendarRows.map(({ days, weekNumber }) => (
          <CalendarWeekRow days={days} key={`week-${weekNumber}`} />
        ))}
      </div>

      <ButtonLink to="/calendar/add" icon={addRound} iconSide="left">Add Income/Expense</ButtonLink>

      <Details />

      {seedButton}
      {clearButton}
    </section>
  );
}

export default observer(Calendar);
