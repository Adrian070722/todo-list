const http = require('http');
const fs = require('fs');
const path = require('path');
//const { connectDB } = require('./db');//

const server = http. createServer( (req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error en el servidor');
            }  else {
                res.writeHead(200,{'Content-type': 'text/html'});
                res.end(content);
            } 
        })

           
    } else if (http.req.url === '/login') {
            const filePath = path.join(__dirname, 'login.html');
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    responseponse.writeHead(500);
                    res.end('Error en el servidor');
                }  else {
                    res.writeHead(200,{'Content-type': 'text/html'});
                    res.end(content);
                } 
            });

         } else if (http.req.url === '/register') {
                const filePath = path.join(__dirname, 'register.html');
                fs.readFile(filePath, (err, content) => {
                    if (err) {
                        responseponse.writeHead(500);
                        res.end('Error en el servidor');
                    }  else {
                        res.writeHead(200,{'Content-type': 'text/html'});
                        res.end(content);
                    } 
                });
    
     
        }else {
        res.writeHead(404);
        res.end('pagina no encontrada');
    }
});

const PORT = process.env.PORT || 3000; 

//connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}/`);

    });
//});