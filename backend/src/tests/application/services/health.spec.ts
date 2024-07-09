import pg from 'pg'
import got from '@esm2cjs/got';
import { Server } from 'http';
import { AddressInfo } from 'net';
import express from 'express';
import { router as healthRouter } from '../../../application/services/health';

const app = express();
app.use(express.json());
app.use('/health', healthRouter);

describe('GET /health', () => {
  let server: Server;
  let baseURL: string;

  beforeAll((done) => {
    server = app.listen(0, () => {
      const address = server.address()
      if (address) {
        const port = typeof server.address() === 'string' ? server.address() : (server.address() as AddressInfo).port;
        baseURL = `http://localhost:${port}`;
        done();
      }
    });
  });

  afterAll((done) => {
	  server.close(done);
  });

  it('should return 200 OK when the database connection is successful', async () => {
    const response = await got(`${baseURL}/health`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('OK');
  });

  it('should return 500 Server connection failed when the database connection fails', async () => {
    jest.spyOn(pg.Pool.prototype, 'query').mockImplementation(() => Promise.reject('Query failed'))

    const response = await got(`${baseURL}/health`, { throwHttpErrors: false });
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual('Server connection failed');
  });
});