const sendEmailService = require('../services/emailService');

const sendEmailController = async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, text' });
  }

  try {
    const result = await sendEmailService.sendEmail({ to, subject, text });
    res.status(200).json({ message: 'Email sent successfully', result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};

module.exports = { sendEmailController };