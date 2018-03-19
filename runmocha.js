const path = require('path');
const testmybot = require('testmybot');

testmybot.helper.botkit().wireWithBotkit(() => require('./bot').bootstrapTest('page_token', 'verify_token'));

const Mocha = require('mocha')

const mocha = new Mocha({
  reporter: 'spec'
})
mocha.addFile(path.resolve(__dirname, 'spec', 'testmybot.spec.js'))

mocha.run((failures) => {
  process.exit(failures)
})
