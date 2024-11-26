const { providers } = require('../../config/emailConfig');

console.log('load providers...', providers);

class EmailService {
  constructor(providers) {
    this.providers = providers;
    this.currentProviderIndex = 0;
  }

  async sendEmail({ to, subject, text }) {
    for (let i = 0; i < this.providers.length; i++) {
      const { provider, config } = this.providers[this.currentProviderIndex];
      try {
        const emailProvider = new provider(config);
        const result = await emailProvider.sendEmail({ to, subject, text });
        return result;
      } catch (error) {
        console.error(`Provider ${this.providers[this.currentProviderIndex].name} failed: ${error.message}`);
        

        this.currentProviderIndex = (this.currentProviderIndex + 1) % this.providers.length;
      }
    }

    throw new Error('All providers failed to send the email.');
  }
}

module.exports = new EmailService(providers);
