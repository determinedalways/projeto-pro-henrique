const { Sequelize } = require('sequelize');

// Para esse exemplo vamos usar um banco SQLite local, aqui poderemos futuramente colocar
// a URL de conexão vindo de uma variável de ambiente:
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db/contacts.sqlite',
	logQueryParameters: true,
	benchmark: true
});

const modelDefiners = [
	require('./models/user.model'),
	require('./models/contact.model'),
	// Adicionar mais modelos aqui
	// require('./models/item'),
];

// Todos os modelos de acordo com os seus arquivos
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;
