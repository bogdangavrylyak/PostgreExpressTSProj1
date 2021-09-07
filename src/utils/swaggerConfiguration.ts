export const swaggerOptions = {  
    swaggerDefinition: {  
        openapi: '3.0.3',
        info: {  
            title:'Basic NodeJS, Express and TypeScript API',  
            version:'1.0.0'  
        } ,
        components: {
            securitySchemes: {
                bearer: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    in: 'header'
                }
            }
        },
        security: [
            {bearer: []}
        ] 
    },  
    apis:['./**/*.controller.ts'],  
}
