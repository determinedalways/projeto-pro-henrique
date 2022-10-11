const express = require('express');
const bodyParser = require('body-parser');

const routes = {
    contacts: require('./routes/contacts.route'),
	users: require('./routes/users.route')
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Wrapper
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// Rota principal deve ser atendida pelo front-end
app.get('/', (req, res) => {
	res.send(`
		<h2>Contacts</h2>
        <p>Substitua esse texto pelo seu template de front-end</p>
	`);
});

for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getAll) {
		app.get(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.getAll)
		);
	}
	if (routeController.getById) {
		app.get(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.getById)
		);
	}
	if (routeController.create) {
		app.post(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.create)
		);
	}
	if (routeController.update) {
		app.put(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.update)
		);
	}
	if (routeController.remove) {
		app.delete(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.remove)
		);
	}
}

module.exports = app;
