
const bodyParser = require('body-parser');
const { app } = require('./routes')

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server has started at port 3000');
});

module.exports = { app };

