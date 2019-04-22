import { onPageLoad } from 'meteor/server-render';
import App from '/imports/App.svelte';

onPageLoad((sink) => {
  const { html, css } = App.render();

  sink.appendToHead(`<style>${css.code}</style>`);
  sink.renderIntoElementById('main', html);
});
