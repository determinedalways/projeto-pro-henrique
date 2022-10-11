const sequelize = require('../../sequelize');

async function reset() {
	console.log('Mockando o banco de dados.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{ username: 'zeca79' },
		{ username: 'batistarv' },
		{ username: 'boneco12' },
		{ username: 'barba_ruiva'}
	]);

	await sequelize.models.contact.bulkCreate([
		{ firstName: 'José Celso', lastName: 'Franco de Freitas', company: 'Pianola',
		  jobTitle:'pianista', email: 'jcff78@gmail.com', birthday: '1978-01-11',
		  notes: 'Melhor amigo'},
		  { firstName: 'Amanda', lastName: 'Rodrigues', company: 'Timo S.A.',
		  jobTitle:'programadora', email: 'amandar@timo.com.br', birthday: '1988-09-11',
		  notes: 'Ex-namorada'},
	]);

	console.log('Feito!');
}

reset();
