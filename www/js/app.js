/*global $: false */
/*global console: false */
/*global Handlebars: false */
/*global document: false */
/*global alert: false */
/*global window: false */
/*global navigator: false */
/*global require: false */
/*global localSettings: false */

var app;
(function () {
    "use strict";
    require.config({

        baseUrl: 'js/lib',

        paths: {
            app: '../app',
            tpl: '../tpl'
        },

        shim: {
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            }
        }
    });

    app = {
        // Application Constructor
        initialize: function () {
            this.onDevice = localSettings.onDevice;

            this.bindEvents();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function () {
            if (this.onDevice) {
                document.addEventListener("deviceready", this.onDeviceReady, false);
            } else {
                this.onDeviceReady(); //this is the browser
            }
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicity call 'app.receivedEvent(...);'
        onDeviceReady: function () {
            app.receivedEvent('deviceready');
        },
        // Update DOM on a Received Event
        receivedEvent: function (id) {
            require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {

                var router = new Router();

                $("body").on("click", ".back-button", function (event) {
                    event.preventDefault();
                    window.history.back();
                });

                Backbone.history.start();
            });
        }
    };

    app.initialize();
}());
