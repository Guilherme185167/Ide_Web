const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Pode mudar a porta

// Serve arquivos estáticos da pasta "main"
app.use(express.static(path.join(__dirname, '../main')));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
