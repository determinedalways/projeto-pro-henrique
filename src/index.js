const app = require('./express/app');
const sequelize = require('./sequelize');
const PORT = 8080;

async function assertDatabaseConnectionOk() {
	console.log(`Checando conexão com o banco de dados...`);
	try {
		await sequelize.authenticate();
		console.log('Conexão com o banco de dados OK!');
	} catch (error) {
		console.log('Conexão com o banco de dados não foi possível:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Iniciando Sequelize + Express na porta ${PORT}...`);

	app.listen(PORT, () => {
		console.log(`O servidor do Express iniciou na porta ${PORT}. Tente uma rota como '/api/users'.`);
	});
}

init();
