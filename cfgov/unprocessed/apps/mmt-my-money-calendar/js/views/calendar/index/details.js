import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useLockBodyScroll, useKeyPressEvent, useKeyPress } from 'react-use';
import { observer } from 'mobx-react';
import { useHistory, Link } from 'react-router-dom';
import { useToggle } from 'react-use';
import Modal from 'react-modal';
import { useStore } from '../../../stores';
import { formatCurrency } from '../../../lib/currency-helpers';
import { Notification } from '../../../components/notification';

import deleteRound from '@cfpb/cfpb-icons/src/icons/delete-round.svg';
import arrowRight from '@cfpb/cfpb-icons/src/icons/arrow-right.svg';
import arrowLeft from '@cfpb/cfpb-icons/src/icons/arrow-left.svg';

const IconButton = ({ icon, ...props }) => <button dangerouslySetInnerHTML={{ __html: icon }} {...props} />;

const DetailRow = ({ event, onRequestEdit, onRequestDelete, ...props }) => (
  <li className="calendar-details__event" role="button" onClick={onRequestEdit} {...props}>
    <div className="calendar-details__event-date">{event.dateTime.format('M/D/YYYY')}</div>
    <div className="calendar-details__event-name">{event.name}</div>
    <div className="calendar-details__event-total">{formatCurrency(event.total)}</div>
    <IconButton className="calendar-details__event-delete" onClick={onRequestDelete} icon={deleteRound} />
  </li>
);

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

  useKeyPressEvent('ArrowRight', uiStore.nextWeek.bind(uiStore));
  useKeyPressEvent('ArrowLeft', uiStore.prevWeek.bind(uiStore));

  useLockBodyScroll(modalOpen);

  const events = eventStore.eventsByWeek.get(uiStore.currentWeek.startOf('week').valueOf());
  const negativeBalance = uiStore.weekEndingBalance < 1;
  const endBalanceClasses = clsx('calendar-details__ending-balance', negativeBalance && 'negative');

  // TODO: Add m-notification component with negative balance message when user goes into negative moneys

  return (
    <section className="calendar-details">
      <header className="calendar-details__header">
        <IconButton
          className="calendar-details__nav-button"
          aria-label="Previous Week"
          onClick={() => uiStore.prevWeek()}
          icon={arrowLeft}
        />

        <div className="calendar-details__header-text">
          <h3>{uiStore.weekRangeText}</h3>
          <div className="calendar-details__starting-balance">
            Week starting balance: {uiStore.weekStartingBalanceText}
          </div>
          {!negativeBalance && <div className={endBalanceClasses}>Week ending balance: {uiStore.weekEndingBalanceText}</div>}
        </div>

        <IconButton
          className="calendar-details__nav-button"
          aria-label="Next Week"
          onClick={() => uiStore.nextWeek()}
          icon={arrowRight}
        />
      </header>

      {negativeBalance && (
        <div className={endBalanceClasses}>
          <Notification message="You're in the red!" variant="error" actionLink={<Link to="/strategies" className="m-notification_button">Fix it</Link>}>
            <p className="m-notification_explanation">
              Week ending balance: {uiStore.weekEndingBalanceText}
            </p>
          </Notification>
        </div>
      )}

      <ul className="calendar-details__events">
        {events &&
          events.map((e) => (
            <DetailRow event={e} onRequestEdit={editEvent(e.id)} onRequestDelete={confirmDelete(e)} key={e.id} />
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
