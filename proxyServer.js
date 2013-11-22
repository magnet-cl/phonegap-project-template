/*global require: false */
/*global console: false */

function proxyServer() {
    "use strict";

    var http, httpProxy, proxy;

    http = require("http");

    httpProxy = require("http-proxy");

    proxy = new httpProxy.RoutingProxy();

    http.createServer(function (req, res) {
        console.log(req.url);

        // proxy method to enable post calls to other pages in browser
        if (req.url.match(/^\/$API_URL\/([\w\W]*)/)) {
            return proxy.proxyRequest(req, res, {
                host: '$DOMAIN',
                port: 80
            });
        }

        return proxy.proxyRequest(req, res, {
            host: "localhost",
            port: 4000
        });
    }).listen(5000);
}

proxyServer();
