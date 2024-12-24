// Importar os módulos necessários
const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Definir a rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Definir a rota para a tela principal
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Definir a rota para a tela do bot
app.get('/bot', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bot.html'));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000; // Usar a porta definida pelo Vercel ou 3000
app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});