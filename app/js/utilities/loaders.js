// Lazy load stylesheets
exports.lazyLoadCSS = (url) => {
  // Create link element
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  stylesheet.href = url;

  // Append the stylesheet
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
};

// Load state via local storage
exports.loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    // If the state is null - return undefined to let Redux reducers provide inital state
    if (serializedState === null) { return undefined; }
    //  Else, parse the state
    return JSON.parse(serializedState);
  } catch (e) {
    //  If there were any errors, return undefined like above
    return undefined;
  }
};

// Save state - not exactly a loader but relates to loadState
exports.saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Prevent application from crashing from trying to save state
    console.log(`Error saving state: ${e}`);
  }
};
