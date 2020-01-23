import { Link } from "react-router-dom";
import { StrategyItem } from "./strategy-item";

export default function StrategiesList() {
  return (
    <section className="expenses-summary-step">
      <div className="view strategies">
        <div className="strategies list">
          <StrategyItem {...strategy1} />
          <StrategyItem {...strategy3} />
        </div>
        <Link to="/" className="a-btn a-btn__full-on-xs">
          Print your strategies.
        </Link>
      </div>
    </section>
  );
}

const strategy1 = {
  heading: "Strategy 1",
  title: "Break up large mortgage or rent payments into smaller payments.",
  description:
    "You have a large mortgage or rent payment of $2,000. Contact your landlord or lender and ask if you can pay in bi-weekly installments.  This could free up more money toward the end of the month.",
  action: {
    text:
      "Test this strategy out by returning to the calendar. See how breaking up your payment would affect your total cash on hand"
  }
};

const strategy3 = {
  heading: "Strategy 3",
  title:
    "Brainstorm ways to save money. Then track your success from week to week.",
  description:
    "Your current available cash on hand is -$150.00, which means you spent more than you've earned. Don't worry, small changes can make a big difference.",
  action: {
    text:
      "Review your expenses and identify areas to reduce spending.  Ask yourself:",
    questions: [
      "Can you avoid late fees or credit card interest payments by moving around your bill due dates?",
      "Do you pay fees to access your money-for example, from ATMs or check-cashing services? Can you open a no-fee bank account?",
      "Can you set your thermostat lower during Winter and higher during Summer?",
      "Do you have memberships you're not using that you can cancel (magazine subscriptions, movie-streaming services, fitness classes)?"
    ],
    finalThought:
      "What other ideas do you have? Be sure to track your savings success from week to week."
  }
};
