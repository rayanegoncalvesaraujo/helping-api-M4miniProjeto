// importa o app que contém as rotas configuradas
import app from './app.js';

// define a porta do servidor
const PORT = 3000;

// inicia o servidor
app.listen(PORT, () => {
    console.log('Helping rodando em: http://localhost: ${PORT}');
    
}) 
