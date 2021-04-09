const express = require("express");

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const { PORT } = require("./config/config");

const app = express();

require("./config/mongoose");
require("./config/express")(app);

app.use(routes);
app.use(errorHandler);






app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}..`));
