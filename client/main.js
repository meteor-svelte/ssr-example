import { onPageLoad } from 'meteor/server-render';
import App from '/imports/App.html';

onPageLoad(() => {
  new App({
    target: document.querySelector('#main'),
    hydrate: true
  });
});
