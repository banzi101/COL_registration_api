const express = require('express');
const { specs, swaggerUi } = require('./swagger/swagger');
const connectDb = require('./config/db');
const apiKeyAuth = require('./auth/apiKeyAuth');
const jwtAuth = require('./auth/jwtAuth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 6001
connectDb();

app.use('/registration/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// app.use(apiKeyAuth);

// app.use("/auth", require("./routes/authRoute"));


app.use("/registration/user-registration", require("./routes/userRegistrationRoute"));
app.use("/registration/registration-item", require("./routes/registrationItemRoute"));
app.use("/registration/answers", require("./routes/answersRoute"));
app.use("/registration/music-file", require("./routes/musicFileRoute"));

app.listen(port, ()=>
    console.log('Server started on port '+ port)
)
