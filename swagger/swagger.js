const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Registrations API',
      version: '1.0.0',
      description: 'route path starting with /registration',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        apiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        }
      },
    },
    security: [
      {
        bearerAuth: [],
      },
      {
        apiKeyAuth: [],
      }
    ],
    
    tags: [
      {
        name: 'auth',
        description: 'Authentication related endpoints',
      },
      {
        name: 'registration items',
        description: 'Endpoints related to registration items',
      },
      {
        name: 'answers',
        description: 'Endpoints related to answers',
      },
      {
        name: 'music',
        description: 'Endpoints related to music files',
      },
    ],
  },
  apis: ['./swagger/**/*.yml'],
  
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
