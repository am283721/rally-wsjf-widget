import { mount } from 'svelte';
import App from './App.svelte';
import { initRallyApp } from 'rally-modern-sdk';

await initRallyApp('rally-wsjf-widget');

const app = mount(App, {
  target: document.getElementById('app') as Element
});

export default app;
