let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const PORT = 5000;

app.listen(PORT, () => {
    console.log('server is running on port:', PORT);
});

app.use(express.static('server/public'));