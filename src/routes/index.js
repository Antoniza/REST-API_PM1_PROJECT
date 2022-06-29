const express = require("express");
const morgan = require("morgan");

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./app'));
app.use('/api/request/users', require('./users.routes'));

const main = () => {
  app.listen(app.get("port"), () => {
    console.log(`Servidor escuchando en puerto ${app.get("port")}`);
  });
};

main();
