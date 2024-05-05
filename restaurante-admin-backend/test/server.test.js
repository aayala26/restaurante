const request = require('supertest');
const app = require('../server'); // Asegúrate de que tu app en server.js esté exportada correctamente

describe('Clientes API', () => {
  // Prueba para obtener todos los clientes
  test('debería obtener todos los clientes', async () => {
    const response = await request(app).get('/clientes');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  // Prueba para obtener un cliente por ID
  test('debería obtener un cliente por su ID', async () => {
    const id = 1; // Asegúrate de que este ID exista en tu base de datos para la prueba
    const response = await request(app).get(`/clientes/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nombre');
    expect(response.body).toHaveProperty('celular');
  });

  // Prueba para crear un nuevo cliente
  test('debería insertar un nuevo cliente', async () => {
    const nuevoCliente = {
      nombre: "Juan Perez",
      celular: "3023305712",
      documento: "1102387068"
    };
    const response = await request(app).post('/clientes').send(nuevoCliente);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('mensaje', 'Cliente creado exitosamente');
  });

  // Prueba para actualizar un cliente
  test('debería actualizar un cliente correctamente', async () => {
    const documento = "1102387068"; // Asegúrate de que este documento exista en tu base de datos para la prueba
    const clienteActualizado = {
      nombre: "Juan Perez 2",
      celular: "30233057123"
    };
    const response = await request(app).post(`/clientesUpdate/${documento}`).send(clienteActualizado);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('mensaje', 'Cliente actualizado exitosamente');
  });

  // prueba para eliminar un  cliente
  test('debería eliminar un cliente', async () => {
    const documento = "1102387068"; // Asegúrate de que este ID exista en tu base de datos para la prueba
    const response = await request(app).delete(`/clientes/${documento}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('mensaje', 'Cliente eliminado exitosamente');
  });
});