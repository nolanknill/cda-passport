const express = require('express');

// Create Express app and also allow for app PORT to be optionally specified by an environment variable
const app = express();
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}.`);
});