exports.handleWebhook = (req, res) => {
    try {
        const event = req.body;

        console.log('Received GitHub Webhook Event:', event);

        // Handle specific events (e.g., push)
        if (event.action === 'push') {
            console.log('Push event detected:', event);
        }

        res.status(200).send('Webhook received successfully');
    } catch (err) {
        console.error('Error handling webhook:', err);
        res.status(500).send('Internal Server Error');
    }
};