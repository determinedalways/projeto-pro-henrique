const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
	const users = await models.user.findAll();
	res.status(200).json(users);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const user = await models.user.findByPk(id);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Request inválido: ID não deveria ser fornecido, uma vez que ele é determinado automaticamente pelo banco de dados.`)
	} else {
		await models.user.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	if (req.body.id === id) {
		await models.user.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Request inválido: parâmetro ID (${id}) não confere com o body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.user.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};
