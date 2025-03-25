const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = data;

  // Add a document to the 'mail' collection
  await admin.firestore().collection('mail').add({
    to: 'your-email@example.com', // Replace with your email
    message: {
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    },
  });

  return { success: true };
});