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
