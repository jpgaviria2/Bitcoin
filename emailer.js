const nodemailer = require('nodemailer');

async function sendEmailWithImages(dalLEPrompt) {
    try {
        // Create a Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: 'YOUR_GMAIL_PASSWORD',
            },
        });

        // Set up the email options
        const mailOptions = {
            from: 'info@btclearn.org',
            to: 'recipient@example.com', // Replace with the recipient's email address
            subject: 'Your Remodelation Design',
            text: `Here are the images based on the DALL-E prompt:\n\n${dalLEPrompt}`,
            // If you have actual images, you can attach them using the attachments option
            // attachments: [
            //     {
            //         filename: 'image1.png',
            //         path: 'path/to/image1.png',
            //     },
            // ],
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = { sendEmailWithImages };
