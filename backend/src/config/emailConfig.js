module.exports = {
  providers: [
    {
      name: 'Mailgun',
      provider: require('../email/providers/mailgunProvider'),
      config: {
        domain: 'sandbox4310c09771f44be78f4147723328c288.mailgun.org', // esto deberia estar en environments vars para no exponer api key
        apiKey: '2011707b6b90fe95b67d0bbceb340496-c02fd0ba-18e2b929', // esto deberia estar en environments vars para no exponer api key
      },
    },
    {
      name: 'SparkPost',
      provider: require('../email/providers/sparkPostProvider'),
      config: {
        apiKey: 'a029238c09462831ca9edc10952b2e11817580f3', // esto deberia estar en environments vars para no exponer api key
      },
    },
  ],
};
