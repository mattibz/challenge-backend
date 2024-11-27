const request = require('supertest');
const express = require('express');
const emailRoutes = require('../src/email/routes/emailRoutes');
const sendEmailService = require('../src/email/services/emailService');

jest.mock('../src/email/services/emailService');

const app = express();
app.use(express.json());
app.use('/api', emailRoutes);

describe('POST /api/send-email', () => {
  it('deberia devolver un error si faltan campos requeridos', async () => {
    const response = await request(app).post('/api/send-email').send({
      to: 'test@example.com',
      subject: 'Test',
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: 'Missing required fields: to, subject, text',
    });
  });

  it('deberia enviar un email exitosamente', async () => {
    sendEmailService.sendEmail.mockResolvedValue({ id: '123' });

    const response = await request(app).post('/api/send-email').send({
      to: 'test@example.com',
      subject: 'test',
      text: 'test',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Email sent successfully',
      result: { id: '123' },
    });
    expect(sendEmailService.sendEmail).toHaveBeenCalledWith({
      to: 'test@example.com',
      subject: 'test',
      text: 'test',
    });
  });

  it('deberia manejar errores del servicio de email', async () => {
    sendEmailService.sendEmail.mockRejectedValue(new Error('Service error'));

    const response = await request(app).post('/api/send-email').send({
      to: 'test@example.com',
      subject: 'test',
      text: 'test',
    });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: 'Failed to send email',
      details: 'Service error',
    });
  });
});
