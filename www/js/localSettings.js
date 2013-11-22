/*global navigator: false */

var localSettings = {
    onDevice: navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android|iemobile)/),
    android: navigator.userAgent.toLowerCase().match(/(android)/),
    ios: navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|)/),
    debug: false
};

if (localSettings.onDevice) {
    localSettings.apiUri = 'http://$DOMAIN';
    //localSettings.apiUri = 'http://162.216.18.38/';
} else {
    localSettings.apiUri = 'http://127.0.0.1:5000';
}
