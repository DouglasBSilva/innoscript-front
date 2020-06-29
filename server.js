
var express = require('express');
var app = express();

app.use(express.static('./dist/pizza-task-front'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/pizza-task-front/'}
  );
  });
  app.listen(process.env.PORT || 8080);