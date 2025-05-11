router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic form validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save message to MongoDB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Recipient's email (your email)
      replyTo: email,  // This allows the recipient to reply to the user's email
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error.message);  // Log the message
    console.error(error.stack);  // Log the stack trace for more details
    res.status(500).json({ error: 'Failed to send message' });
  }
});
