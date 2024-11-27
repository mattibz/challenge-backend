require('dotenv').config();

module.exports = {
  providers: [
    {
      name: 'Mailgun',
      provider: require('../email/providers/mailgunProvider'),
      config: {
        domain: process.env.MAILGUN_DOMAIN,
        apiKey: process.env.MAILGUN_API_KEY,
      },
    },
    {
      name: 'SparkPost',
      provider: require('../email/providers/sparkPostProvider'),
      config: {
        apiKey: process.env.SPARKPOST_API_KEY,
      },
    },
  ],
};
