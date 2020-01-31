import { useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import { observer } from 'mobx-react';
import { useStore } from '../../stores';
import Day from './day';
import Button from '../../components/button';

import arrowRight from 'cf-icons/src/icons/arrow-right.svg';
import arrowLeft from 'cf-icons/src/icons/arrow-left.svg';

const ifDevelopment = (fn) => {
  if (process.env.NODE_ENV !== 'development') return null;
  return fn();
};

const CalendarWeekRow = ({ days }) => (
  <div className="calendar__row">
    {days.map((day) => <Day day={day} key={`day-${day.toFormat('ooo')}`} />)}
  </div>
);

function Calendar() {
  const { uiStore, eventStore } = useStore();
  const location = useLocation();
  const params = useParams();

  const nextMonth = useCallback((evt) => {
    evt.preventDefault();
    uiStore.nextMonth();
  }, [uiStore.currentMonth]);

  const prevMonth = useCallback((evt) => {
    evt.preventDefault();
    uiStore.prevMonth();
  }, [uiStore.currentMonth]);

  const gotoToday = useCallback((evt) => {
    evt.preventDefault();
    const now = DateTime.local();
    uiStore.setCurrentMonth(now.startOf('month'));
    uiStore.setSelectedDate(now.startOf('day'));
  });

  const loadSeedData = useCallback(async (evt) => {
    evt.preventDefault();
    await window.seedTestData();
    await eventStore.loadEvents();
    alert('Seed data loaded');
  }, []);

  const clearDatabase = useCallback(async (evt) => {
    evt.preventDefault();
    await window.clearTestData();
    await eventStore.loadEvents();
    alert('Database cleared');
  }, []);

  useEffect(() => {
    uiStore.setPageTitle('myMoney Calendar');
    uiStore.setSubtitle(uiStore.currentMonth.toFormat('MMMM, y'));
  }, [location, params, uiStore.currentMonth]);

  const seedButton = ifDevelopment(() => <Button onClick={loadSeedData} variant="secondary" style={{margin: '.5rem 0'}}>Seed Database</Button>);
  const clearButton = ifDevelopment(() => <Button onClick={clearDatabase} variant="secondary">Clear Database</Button>);

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

      <div className="calendar__rows">
        {uiStore.monthCalendarRows.map(({ days, weekNumber }) => <CalendarWeekRow days={days} key={`week-${weekNumber}`} />)}
      </div>

      {seedButton}
      {clearButton}
    </section>
  );
}

export default observer(Calendar);
