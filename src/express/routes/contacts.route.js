const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
	const contacts = await models.contact.findAll();
	res.status(200).json(contacts);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const contact = await models.contact.findByPk(id);
	if (contact) {
		res.status(200).json(contact);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Request inválido: ID não deveria ser fornecido, uma vez que ele é determinado automaticamente pelo banco de dados.`)
	} else {
		await models.contact.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	if (req.body.id === id) {
		await models.contact.update(req.body, {
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
	await models.contact.destroy({
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
