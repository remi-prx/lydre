const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const server = http.createServer(app);

// Route pour créer un utilisateur
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
  });
  
  
app.use('/static', express.static(path.join(__dirname, 'static')));


// Démarrer le serveur
const PORT = process.env.PORT || 2345;
server.listen(PORT, () => {
  console.log(`Serveur HTTP et WebSocket démarré sur le port ${PORT}`);
});