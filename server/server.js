const express = require('express');
const cors = require('cors');
const eventRouter = require('./routes/event.routes');
const participantRouter = require('./routes/participant.routes');
const port = 4000;

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', eventRouter);
app.use('/api', participantRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
