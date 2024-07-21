import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWO,
    },
});

export const sendWelcomeEmail = async (email) => {
    const mailOptions = {
        from: `Terra <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Welcome to our Newsletter!',
        html: `
            <html>
            <head>
                <style>
                    body, html {
                        margin: 0;
                        padding: 0;
                        font-family: 'Arial', sans-serif;
                        background-color: #f9f9f9;
                        color: #333333;
                    }
                    
                    .email-wrapper {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    
                    .header {
                        text-align: center;
                        padding: 20px 0;
                        background-color: #4caf50;
                        color: #ffffff;
                        border-radius: 8px 8px 0 0;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 24px;
                    }
                    
                    .content {
                        padding: 20px;
                    }
                    .content p {
                        line-height: 1.6;
                        margin-bottom: 15px;
                    }
                    
                    /* Footer styles */
                    .footer {
                        text-align: center;
                        padding: 10px 0;
                        background-color: #4caf50;
                        color: #ffffff;
                        border-radius: 0 0 8px 8px;
                    }
                    .footer p {
                        margin: 0;
                        font-size: 14px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="email-wrapper">
                    <div class="header">
                        <h1>Welcome to Terra's Newsletter</h1>
                    </div>
                    <div class="content">
                        <p>Dear Subscriber,</p>
                        <p>Thank you for subscribing to our newsletter. We are thrilled to have you with us!</p>
                        <p>Expect exciting updates and insightful information delivered right to your inbox.</p>
                        <p>Stay tuned for more updates from Terra!</p>
                    </div>
                    <div class="footer">
                        <p>Best regards,<br>Terra Team</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent to:', email);
        return true;
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return false;
    }
};
