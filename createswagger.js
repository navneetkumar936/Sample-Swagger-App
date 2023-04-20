import fs from 'fs';
import swaggerJsdoc from 'swagger-jsdoc';
import appConstant from './appConstant.js';

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

fs.writeFile("./swagger.json", JSON.stringify(openapiSpecification), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 