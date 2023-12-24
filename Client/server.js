const express = require('express');
const router = express.Router();
const twilio = require('twilio');

// Twilio API credentials
const accountSid = 'ACe977749d747f864eb377a9337232aac4';
const authToken = '9915f649a1b03c02c74fdd634379bf2e';
const twilioNumber = '+18146215868';

// Create a Twilio client instance
const client = twilio(accountSid, authToken);

// API endpoint to send a message
router.post('/send-message', async (req, res) => {
  try {
    const { mobileNumber, messageContent } = req.body;

    // Send the SMS message
    const message = await client.messages.create({
      body: messageContent,
      from: twilioNumber,
      to: mobileNumber,
    });

    // Return success response
    res.json({ success: true, messageSid: message.sid });
  } catch (error) {
    console.error('Failed to send message:', error);
    // Return error response
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
