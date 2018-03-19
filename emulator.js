const MessengerSamples = require('botkit-messenger-samples');
const testmybot = require('testmybot');

testmybot.helper.botkit().wireWithBotkit(() => require('./bot').bootstrapTest('page_token', 'verify_token'));
testmybot.emulator.console()();
