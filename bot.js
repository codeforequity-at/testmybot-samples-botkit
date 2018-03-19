const Botkit = require('botkit');
const MessengerSamples = require('botkit-messenger-samples');

module.exports.bootstrap = function(page_token, verify_token, server_url) {
  const controller = Botkit.facebookbot({
      debug: true,
      access_token: page_token,
      verify_token: verify_token
  });
  const bot = controller.spawn({
  });

  controller.setupWebserver(process.env.PORT || 3000, function(err, webserver) {
      controller.createWebhookEndpoints(webserver, bot, function() {
          console.log('ONLINE!');
      });
      const messengerSamples = new MessengerSamples(controller, bot, {
        serverUrl: server_url
      });
  });
  return controller;
};

let controllerTest = null

module.exports.bootstrapTest = function(page_token, verify_token) {
  if (!controllerTest) {
    controllerTest = Botkit.facebookbot({
        debug: true,
        access_token: page_token,
        verify_token: verify_token
    });
    controllerTest.setupWebserver(3000, function(err, webserver) {
        const messengerSamples = new MessengerSamples(controllerTest, null, {
          serverUrl: 'http://127.0.0.1'
        });
    });
  }
  return controllerTest;
};
