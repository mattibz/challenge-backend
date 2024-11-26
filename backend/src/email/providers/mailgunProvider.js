const axios = require('axios');
const FormData = require('form-data');

class MailgunProvider {
  constructor({ domain, apiKey }) {
    this.domain = domain;
    this.apiKey = apiKey;
  }

  async sendEmail({ to, subject, text }) {
    const formData = new FormData();
    formData.append('from', 'Test <demo@demo.com>');
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('text', text);

    try {
      const response = await axios.post(
        `https://api.mailgun.net/v3/${this.domain}/messages`,
        formData,
        {
          auth: { username: 'api', password: this.apiKey },
          headers: formData.getHeaders(),
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Mailgun error: ${error.message}`);
    }
  }
}

module.exports = MailgunProvider;