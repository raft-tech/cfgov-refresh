import Expandable from 'cf-expandables/src/Expandable';
import Multiselect from '../../../../molecules/Multiselect';

const multiSelectsSelector = `.${ Multiselect.BASE_CLASS }`;

if ( document.querySelector( multiSelectsSelector ) ) {
  const element = document.querySelector( multiSelectsSelector );
  const multiselect = new Multiselect( element, 100 );
  multiselect.init();
}

Expandable.init();
