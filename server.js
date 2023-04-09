const express = require('express');
const app = express();
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const route = require('./routes/product');
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false, }));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Sample App',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);


app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use(route);

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`));


