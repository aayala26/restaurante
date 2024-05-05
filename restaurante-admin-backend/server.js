const express = require('express');
const mysql = require('mysql');

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurante'
});

// Conéctate a la base de datos MySQL
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL: ', err);
    throw err;
  }
  console.log('Conexión a MySQL establecida');
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir el uso de JSON
app.use(express.json());

// Ruta para obtener todos los clientes
app.get('/clientes', (req, res) => {
  connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error('Error al obtener clientes: ', err);
      res.status(500).json({ error: 'Error al obtener clientes' });
      return;
    }
    res.json(results);
  });
});

// Ruta para obtener un cliente por su ID
app.get('/clientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM clientes WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al obtener el cliente: ', err);
      res.status(500).json({ error: 'Error al obtener el cliente' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Cliente no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Ruta para crear un nuevo cliente
app.post('/clientes', (req, res) => {
  const { nombre, celular, documento } = req.body;

  // Validar que los campos necesarios estén presentes
  if (!nombre || !celular || !documento) {
    res.status(400).json({ error: 'Faltan datos necesarios: nombre, celular y documento son obligatorios' });
    return;
  }

  const query = 'INSERT INTO clientes (nombre, celular, documento) VALUES (?, ?, ?)';
  connection.query(query, [nombre, celular, documento], (err, result) => {
    if (err) {
      console.error('Error al crear el cliente: ', err);
      res.status(500).json({ error: 'Error al crear el cliente' });
      return;
    }
    res.status(201).json({ mensaje: 'Cliente creado exitosamente', id: result.insertId });
  });
});

// Ruta para actualizar un cliente existente
app.post('/clientesUpdate/:documento', (req, res) => {
  const { documento } = req.params;
  const { nombre, celular } = req.body;
  console.log("req.body",documento);
  if (!nombre || !celular) {
    res.status(400).json({ error: 'Faltan datos necesarios para la actualización' });
    return;
  }
  connection.query('UPDATE clientes SET nombre = ?, celular = ? WHERE documento = ?', [nombre, celular, documento], (err, result) => {
    if (err) {
      console.error('Error al actualizar el cliente: ', err);
      res.status(500).json({ error: 'Error al actualizar el cliente' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Cliente no encontrado' });
      return;
    }
    res.status(200).json({ mensaje: 'Cliente actualizado exitosamente' });
  });
});

// Ruta para eliminar un cliente
app.delete('/clientes/:documento', (req, res) => {
  const { documento } = req.params;
  connection.query('DELETE FROM clientes WHERE documento = ?', [documento], (err, result) => {
    if (err) {
      console.error('Error al eliminar el cliente: ', err);
      res.status(500).json({ error: 'Error al eliminar el cliente' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Cliente no encontrado' });
      return;
    }
    res.status(200).json({ mensaje: 'Cliente eliminado exitosamente' });
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});


module.exports = app; // Añade esta línea al final de tu archivo server.js