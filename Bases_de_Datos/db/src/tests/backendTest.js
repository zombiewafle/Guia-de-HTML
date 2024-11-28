const request = require('supertest');
const app = require('./app'); // Suponiendo que el servidor está exportado como `app`
const jwt = require('jsonwebtoken');

// Mockear la función de búsqueda de usuario en la base de datos
jest.mock('./conn', () => ({
    query: jest.fn(),
}));

const db = require('./conn');

describe('POST /login', () => {
    it('debe autenticar un usuario válido y devolver un token JWT', async () => {
        const mockUser = {
            id: 1,
            email: 'test@example.com',
            password: await bcrypt.hash('password123', 10),
        };

        db.query.mockImplementation((sql, params, callback) => {
            if (params[0] === mockUser.email) {
                return callback(null, [mockUser]); // Simular usuario encontrado
            }
            return callback(null, []); // Usuario no encontrado
        });

        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('token');

        const decodedToken = jwt.verify(res.body.token, 'your-secret-key');
        expect(decodedToken).toMatchObject({
            id: mockUser.id,
            email: mockUser.email,
        });
    });

    it('debe devolver un error 404 si el usuario no existe', async () => {
        db.query.mockImplementation((sql, params, callback) => {
            return callback(null, []); // Usuario no encontrado
        });

        const res = await request(app)
            .post('/login')
            .send({ email: 'nonexistent@example.com', password: 'password123' });

        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('message', 'Invalid user');
    });

    it('debe devolver un error 401 si la contraseña es incorrecta', async () => {
        const mockUser = {
            id: 1,
            email: 'test@example.com',
            password: await bcrypt.hash('password123', 10),
        };

        db.query.mockImplementation((sql, params, callback) => {
            return callback(null, [mockUser]); // Usuario encontrado
        });

        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'wrongpassword' });

        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('message', 'Invalid password');
    });
});
