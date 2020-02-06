import { Link } from 'react-router-dom';
import Hero from '../../components/hero';
import heroImg from 'img/Hero_2.png';
import { useStore } from '../../stores';

export default function Home() {
  const store = useStore();
  const { InputWizardStore } = store;

  const setStep = () => {
    InputWizardStore.setCurrentStep('Beginning Balance');
  };

  return (
    <main className="mmt-view home">
      <Hero
        title="My Money Calendar"
        subtitle="Visualize your spending and learn strategies to manage your weekly and monthly budget"
        image={heroImg}
        alt="My Money Calendar"
      />
      <div className="c-subhead">
        Input your income, expenses and cash-on-hand to build your calendar. Estimates are acceptable.
      </div>

      <div className="c-nav-buttons">
        <div>
          <Link to="/wizard/category-selection-screen" onClick={setStep} className="a-btn a-btn__full-on-xs">
            Let's begin
          </Link>
        </div>
      </div>
    </main>
  );
}
