var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1')
 
client.on('connect', function () {
  client.subscribe('webpublish');
  client.publish('testpublish', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})
