import clsx from 'clsx';
import { useCallback } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores';
import { dayjs } from '../../../lib/calendar-helpers';

function Day({ day, dateFormat = 'D' }) {
  const { uiStore, eventStore } = useStore();

  const isToday = day.dayOfYear() === dayjs().dayOfYear();
  const isSelected = uiStore.selectedDate && day.isSame(uiStore.selectedDate, 'day');
  const isCurrentMonth = day.isSame(uiStore.currentMonth, 'month') && day.isSame(uiStore.currentMonth, 'year');
  const dateString = day.format(dateFormat);

  const classes = ['calendar__day', isToday && 'today', isSelected && 'selected', isCurrentMonth && 'current-month'];

  const handleClick = useCallback(
    (evt) => {
      evt.preventDefault();

      uiStore.selectedDate && day.isSame(uiStore.selectedDate)
        ? uiStore.clearSelectedDate()
        : uiStore.setSelectedDate(day);
    },
    [day]
  );

  const emptyTile = useCallback(
    (klass) => (
      <div className={clsx(klass)} role="button" onClick={handleClick}>
        <div className="calendar__day-number">{dateString}</div>
        <div className="calendar__day-symbols" />
      </div>
    ),
    [dateString]
  );

  if (!eventStore.events.length) return emptyTile(classes);

  const balance = eventStore.getBalanceForDate(day);
  const weekEndBal = uiStore.weekEndingBalance;

  classes.push({
    //'pos-balance': balance >= 0 && day.isSameOrAfter(eventStore.earliestEventDate),
    //'pos-balance': weekEndBal >= 0 && day.isSameOrAfter(uiStore.startOfWeek),
    'pos-balance':
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.format('YYYY-MM-DD')) ||
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(1, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(2, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(3, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(4, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(5, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal >= 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(6, 'day').format('YYYY-MM-DD')),

    'neg-balance':
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.format('YYYY-MM-DD')) ||
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(1, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(2, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(3, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(4, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(5, 'day').format('YYYY-MM-DD')) ||
      (weekEndBal < 0 && day.format('YYYY-MM-DD') === uiStore.currentWeek.add(6, 'day').format('YYYY-MM-DD')),
  });

  const symbol = eventStore.dateHasEvents(day) ? <div className="calendar__day-symbols">&bull;</div> : null;

  return (
    <div className={clsx(classes)} role="button" onClick={handleClick}>
      <div className="calendar__day-number">
        <time dateTime={day.format('YYYY-MM-DD')} className="calendar__day-datetime">
          {day.format(dateFormat)}
        </time>
      </div>
      {symbol}
    </div>
  );
}

export default observer(Day);
