
/**
 * Check if an element exists on the page, and if it does, add listeners.
 * @param {[type]}   elem     [description]
 * @param {[type]}   event    [description]
 * @param {Function} callback [description]
 */
function addEventListenerToElem( elem, event, callback ) {
  if ( elem ) {
    elem.addEventListener( event, callback );
  } else {
    analyticsLog( `${ elem } doesn't exist!` );
  }
}

const delay = ( function() {
  let timer = 0;
  return function( callback, ms ) {
    clearTimeout( timer );
    timer = setTimeout( callback, ms );
  };
} )();

/**
 * TODO: Merge with Analytics.js.
 * Track an analytics event and log the event.
 * @param {string} event Type of event.
 * @param {string} action Name of event.
 * @param {string} label DOM element label.
 */
function track( event, action, label ) {
  window.dataLayer.push( {
    event: event,
    action: action,
    label: label
  } );
  analyticsLog( event, action, label );
};

/**
 * Check if two hosts are the same.
 * This only works with a www subdomain.
 * @param {string} host1 - A URL.
 * @param {string} host2 - Another URL.
 * @returns {boolean} True if the hosts are equal, false otherwise.
 */
function hostsAreEqual( host1, host2 ) {
  let h1 = document.createElement( 'a' );
  h1.href = host1;

  let h2 = document.createElement( 'a' );
  h2.href = host2;

  // Check for www
  h1 = h1.host;
  if ( h1.substring( 0, 4 ) === 'www.' ) {
    h1 = h1.substring( 4 );
  }
  h2 = h2.host;
  if ( h2.substring( 0, 4 ) === 'www.' ) {
    h2 = h2.substring( 4 );
  }

  return h1 === h2;
}

/**
 * Retrieve a URL query string parameter by parameter name.
 * @param  {string} key - The name of the parameter in the URL.
 * @returns {string|null} The value of the parameter.
 */
function getQueryParameter( key ) {
  const url = window.location.href;
  const param = key.replace( /[\[\]]/g, '\\$&' );
  const regex = new RegExp( '[?&]' + param + '(=([^&#]*)|&|#|$)' );
  const results = regex.exec( url );
  if ( !results ) return null;
  if ( !results[2] ) return '';
  const decoded = decodeURIComponent( results[2].replace( /\+/g, ' ' ) );
  if ( decoded === 'true' ) return true;
  if ( decoded === 'false' ) return false;
  return decoded;
}

/**
 * Log a message to the console if the `debug-gtm` URL parameter is set.
 * @param {string} msg - Message to load to the console.
 */
function analyticsLog( msg ) {
  if ( getQueryParameter( 'debug-gtm' ) === true ) {
    console.log( `ANALYTICS DEBUG MODE: ${ msg }` );
  }
}

module.exports = {
  addEventListenerToElem,
  analyticsLog,
  delay,
  getQueryParameter,
  hostsAreEqual,
  track
};
