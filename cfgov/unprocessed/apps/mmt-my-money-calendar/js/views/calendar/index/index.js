import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores';
import { useClickHandler, useClickConfirm } from '../../../lib/hooks';
import Day from './day';
import Details from './details';
import { useScrollToTop } from '../../../components/scroll-to-top';
import { DAY_LABELS, dayjs } from '../../../lib/calendar-helpers';
import Modal from 'react-modal';
import { useBEM } from '../../../lib/hooks';

import { arrowLeft, arrowRight, downArrow } from '../../../lib/icons';

const IconButton = ({ icon, ...props }) => <button dangerouslySetInnerHTML={{ __html: icon }} {...props} />;

const CalendarWeekRow = ({ days, selected }) => {
  const classes = clsx('calendar__row', selected && 'selected');

  return (
    <div className={classes}>
      {days.map((day) => (
        <Day day={day} key={`day-${day.dayOfYear()}`} />
      ))}
    </div>
  );
};

function Calendar() {
  const { uiStore, eventStore } = useStore();
  const location = useLocation();
  const params = useParams();
  const [showModal, setShowModal] = useState();
  const bem = useBEM('modal-dialog');

  const handleModalSession = () => {
    let visited = localStorage.getItem('visitedPage');
    console.log(visited)
    if (visited) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  useEffect(() => {
    uiStore.setPageTitle('myMoney Calendar');
    uiStore.setSubtitle(uiStore.currentMonth.format('MMMM YYYY'));
    handleModalSession()
  }, [location, params, uiStore.currentMonth]);

  const dayLabels = useMemo(
    () => (
      <div className="calendar__row" key="dayLabels">
        {DAY_LABELS.map((label, idx) => (
          <div key={`label-${idx}`} className="calendar__day-label">
            {label}
          </div>
        ))}
      </div>
    ),
    []
  );
  
  //TODO: Extract this out into it's own component to be reused at different screens
  const NarrativeModal = () => {
    return (
      <Modal isOpen={showModal}
             className={bem()}
             overlayClassName="modal-overlay"
             appElement={document.querySelector('#mmt-my-money-calendar')}
             style={
               { content: {
                  textAlign: 'center',
                  padding: '15px'
                 }
               }
            }
      >
        <div className='narrative-modal'>
          <h4>Welcome to your Budget Calendar</h4>
          <p>Start adding your weekly Expenses and Income by clicking on the Add Income and Expenses Button in the menu below.</p>
          <div dangerouslySetInnerHTML={{__html: downArrow}}></div>
          <button onClick={(e) => handleToggleModal(e)}>OK</button>
        </div>
      </Modal>
    )
  };

  const handleToggleModal = (event) => {
    event.preventDefault();
    localStorage.setItem('visitedPage', true);
    setShowModal(!showModal);
  };

  useScrollToTop();

  if (eventStore.eventsLoaded && !eventStore.hasStartingBalance) return <Redirect to="/money-on-hand" />;

  return (
    <section className="calendar">
      {showModal && 
        <NarrativeModal />
      }
      <header className="calendar__header">
        <IconButton
          className="calendar__nav-button"
          aria-label="Previous Month"
          onClick={() => uiStore.prevMonth()}
          icon={arrowLeft}
        />

        <h2 className="calendar__subtitle">{uiStore.subtitle}</h2>

        <IconButton
          className="calendar__nav-button"
          aria-label="Next Month"
          onClick={() => uiStore.nextMonth()}
          icon={arrowRight}
        />
      </header>

      <div className="calendar__cols">
        <div className="calendar__rows">
          {[
            dayLabels,
            ...uiStore.monthCalendarRows.map(({ days, weekNumber }) => (
              <CalendarWeekRow
                days={days}
                key={`week-${weekNumber}`}
                selected={uiStore.currentWeek.week() === weekNumber}
              />
            )),
          ]}
        </div>

        <Details />
      </div>
    </section>
  );
}

export default observer(Calendar);
