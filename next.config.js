/**
 * @version 1.0.0
 * @author trejocode
 * @description Next.js config for SASS and PWA
*/

const withPlugins   = require('next-compose-plugins');
const PWA           = require('next-pwa');
const sass          = require('@zeit/next-sass');

module.exports      = withPlugins([[PWA, { pwa: { dest: 'public' } }], sass]);