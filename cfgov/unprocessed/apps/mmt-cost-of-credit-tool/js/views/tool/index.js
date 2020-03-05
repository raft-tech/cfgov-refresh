import { Link } from 'react-router-dom';

import { TotalPurchaseAmount } from '../../components/total-purchase-amount';
import { DownPayment } from '../../components/down-payment';
import { CreditApr } from '../../components/credit-apr';
import { MonthlyPayment } from '../../components/monthly-payment';
// import { DealsAndPromotions } from "../../components/deals-and-promotions";
import { DealOrPromo } from '../../components/deal-or-promo';
import { TrueCostBreakdown } from '../../components/true-cost-breakdown';
import { AlternatePayoffScenarios } from '../../components/alternate-payoff-scenarios';
import { TipsAndResources } from '../../components/tips-and-resources';

let nextTodoId = 0;
class Tool extends Component {
  render() {
    return (
      <div>
        <input
          ref={(node) => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: 'Test',
              id: nextTodoId++,
            });
            this.input.value = '';
          }}
        >
          {' '}
          Add Todo
        </button>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
