// Helper para garantir que o id é válido e convertê-lo para número
function getIdParam(req) {
	const id = req.params.id;
	if (/^\d+$/.test(id)) {
		return Number.parseInt(id, 10);
	}
	throw new TypeError(`Parâmetro inválido ':id': "${id}"`);
}

module.exports = { getIdParam };
