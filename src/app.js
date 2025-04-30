const express = require('express');
const app = express();
const webhookRoutes = require('./routes/webhook.routes');

// Middleware
app.use(express.json());

// Routes
app.use('/webhook', webhookRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});