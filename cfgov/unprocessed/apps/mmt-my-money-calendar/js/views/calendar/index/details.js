import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { useToggle } from 'react-use';
import Modal from 'react-modal';
import { useStore } from '../../../stores';
import { formatCurrency } from '../../../lib/currency-helpers';
import { Notification } from '../../../components/notification';

import deleteRound from '@cfpb/cfpb-icons/src/icons/delete-round.svg';
import arrowRight from '@cfpb/cfpb-icons/src/icons/arrow-right.svg';
import arrowLeft from '@cfpb/cfpb-icons/src/icons/arrow-left.svg';

const Icon = (svg, className) => <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />;

function Details() {
  const { uiStore, eventStore } = useStore();
  const history = useHistory();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, toggleModal] = useToggle(false);

  const confirmDelete = useCallback(
    (event) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectedEvent(event);
      toggleModal(true);
    },
    []
  );

  const eventDeleteHandler = useCallback(
    (andRecurrences = false) => async (evt) => {
      evt.preventDefault();
      await eventStore.deleteEvent(selectedEvent.id, andRecurrences);
      setSelectedEvent(null);
      toggleModal(false);
    },
    [selectedEvent]
  );

  const eventRecurs = selectedEvent && selectedEvent.recurs;

  const editEvent = useCallback(
    (id) => (evt) => {
      evt.preventDefault();
      history.push(`/calendar/add/${id}/edit`);
    },
    []
  );

  useLockBodyScroll(modalOpen);

  const events = eventStore.eventsByWeek.get(uiStore.currentWeek.startOf('week').valueOf());
  const negativeBalance = uiStore.weekEndingBalance < 1;
  const endBalanceClasses = clsx('calendar-details__ending-balance', negativeBalance && 'negative');

  // TODO: Add m-notification component with negative balance message when user goes into negative moneys

  return (
    <section className="calendar-details">
      <header className="calendar-details__header">
        <button
          className="calendar-details__nav-button"
          aria-label="Previous Week"
          onClick={() => uiStore.prevWeek()}
          dangerouslySetInnerHTML={{ __html: arrowLeft }}
        />

        <div className="calendar-details__header-text">
          <h3>{uiStore.weekRangeText}</h3>
          <div className="calendar-details__starting-balance">
            Week starting balance: {uiStore.weekStartingBalanceText}
          </div>
          <div className={endBalanceClasses}>
            {negativeBalance ? (
              <Notification message="You're in the red!" variant="error">
                Week ending balance: {uiStore.weekEndingBalanceText}
              </Notification>
            ) : (
              <div>Weekly ending balance: {uiStore.weekEndingBalanceText}</div>
            )}
          </div>
        </div>

        <button
          className="calendar-details__nav-button"
          aria-label="Next Week"
          onClick={() => uiStore.nextWeek()}
          dangerouslySetInnerHTML={{ __html: arrowRight }}
        />
      </header>

      <ul className="calendar-details__events">
        {events &&
          events.map((e) => (
            <li className="calendar-details__event" key={e.id} role="button" onClick={editEvent(e.id)}>
              <div className="calendar-details__event-date">{e.dateTime.format('M/D/YYYY')}</div>
              <div className="calendar-details__event-name">{e.name}</div>
              <div className="calendar-details__event-total">{formatCurrency(e.total)}</div>
              <button className="calendar-details__event-delete" onClick={confirmDelete(e)}>
                <span dangerouslySetInnerHTML={{ __html: deleteRound }} />
              </button>
            </li>
          ))}
      </ul>

      <Modal
        className="modal-dialog"
        contentLabel="Event deletion options"
        isOpen={modalOpen}
        onRequestClose={() => toggleModal(false)}
        appElement={document.querySelector('#mmt-my-money-calendar')}
        closeTimeoutMS={150}
        overlayClassName="modal-overlay"
        id="delete-dialog"
      >
        <p className="modal-dialog__prompt">Delete this event?</p>
        <ul className="modal-dialog__actions">
          <li className="modal-dialog__action">
            <button tabIndex="0" className="modal-dialog__action-button" onClick={eventDeleteHandler(false)}>
              {eventRecurs ? 'Just this event' : 'Delete'}
            </button>
          </li>
          {eventRecurs && (
            <li className="modal-dialog__action">
              <button tabIndex="1" className="modal-dialog__action-button" onClick={eventDeleteHandler(true)}>
                This event and future recurrences
              </button>
            </li>
          )}
          <li className="modal-dialog__action">
            <button
              tabIndex="2"
              className="modal-dialog__action-button modal-dialog__action-button--cancel"
              onClick={() => toggleModal(false)}
            >
              Cancel
            </button>
          </li>
        </ul>
      </Modal>
    </section>
  );
}

export default observer(Details);
