import connectDB from '../../utils/db';
import Subscribe from '../../models/Subscribe';
import { sendWelcomeEmail } from '../../utils/sendEmail';

connectDB();

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
      const existingSubscriber = await Subscribe.findOne({ email });
      if (existingSubscriber) {
        return res.status(400).json({ message: 'Email already subscribed' });
      }

      const emailSent = await sendWelcomeEmail(email);
      if (!emailSent) {
        return res.status(500).json({ message: 'Failed to send welcome email. Subscription not completed.' });
      }

      await Subscribe.create({ email });

      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Failed to subscribe:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
