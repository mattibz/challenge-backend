const axios = require('axios');

class SparkPostProvider {
  constructor({ apiKey }) {
    this.apiKey = apiKey;
  }

  async sendEmail({ to, subject, text }) {
    const payload = {
      content: {
        from: 'Test <test@sandbox.sparkpostmail.com>',
        subject: subject,
        text: text,
      },
      recipients: [
        { address: to }
      ],
    };

    try {
      const response = await axios.post(
        'https://api.sparkpost.com/api/v1/transmissions',
        payload,
        {
          headers: {
            Authorization: this.apiKey,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`SparkPost error: ${error.message}`);
    }
  }
}

module.exports = SparkPostProvider;