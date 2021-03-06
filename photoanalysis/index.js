var Twit = require('twit')
var fs = require('fs')
var request = require('request')
var vision = require('@google-cloud/vision')({
  projectId: 'twitterbot',
  keyFilename: './keyfile.json'
})

var inputText = ''

var bot = new Twit({
  consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
  consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
  access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
  access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
})
