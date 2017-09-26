var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios, { delayResponse: 500 })

mock.onGet('mobile/getAppsError').networkError()

// mock.onGet('mobile/getApps').timeout()

mock.onGet('mobile/getApps').reply(200, {
  data: [{
    name: 'Apps'
  }]
})

// Using a regex

mock.onGet(/users\/\d+/).reply(200, {
  data: [{
    name: 'Apps'
  }]
})
