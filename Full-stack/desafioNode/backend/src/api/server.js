require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
