/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Configuraciones adicionales para next.js
*/

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({pwa: { dest: 'public', runtimeCaching }});