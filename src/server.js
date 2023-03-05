const app = require('./app.js');

const db = require('./db.js');

db.sequelize.sync().then(async () => {
    await console.log('Conectado ao banco de dados!');
});

app.listen(3000, () => {
    console.log('server running on 3000!');
});
