import { observer } from 'mobx-react';
import { useStore } from '../../stores';
import {formatCurrency} from '../../lib/currency-helpers';

function Details() {
  const { uiStore, eventStore } = useStore();

  if (!uiStore.selectedDate) return null;

  const events = eventStore.eventsByDate.get(uiStore.selectedDate.startOf('day').valueOf());

  return (
    <div className="calendar-details">
      {events && events.map((e) => (
        <p key={e.id}>
          {e.name}: {formatCurrency(e.total)}
        </p>
      ))}
    </div>
  )
}

export default observer(Details);
