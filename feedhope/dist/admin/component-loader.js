// src/admin/component-loader.js (or .ts)
import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const MyCustomDashboard = componentLoader.add('MyCustomDashboard', './components/MyCustomDashboard');

export default componentLoader;