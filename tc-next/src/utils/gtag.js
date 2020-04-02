
/**
 *  @version 1.0.0
 *  @author Sergio - Trejocode
 *  @description Custom config para GA
*/

export const GA_TRACKING_ID = 'UA-116751036-4';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};