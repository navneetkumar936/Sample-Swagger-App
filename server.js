import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()
const app = express();
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import appConstant from './appConstant.js';
import route from './routes/product.js';
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false, }));

const options = {
  definition: {
    openapi: appConstant.openapi,
    info: {
      title: appConstant.swaggerTitle,
      version: appConstant.swaggerVersion,
    },
  },
  apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use(route);

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`));


