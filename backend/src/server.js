const express = require('express');
const cors = require('cors');
const emailRoutes = require('./email/routes/emailRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
