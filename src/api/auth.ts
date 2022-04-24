import { setCookies } from '../libs/tokens';
import client from './client';

export interface AuthPayload {
  username: string;
  password: string;
}

// Login API
export async function loginAPI(payload: AuthPayload) {
  const response = await client.post<User>('/auth/login', payload);
  const cookies = await response.headers['set-cookie'];

  if (cookies) {
    await setCookies(cookies);
  }

  return response.data;
}

// Register API
export async function registerAPI(payload: AuthPayload) {
  const response = await client.post<User>('/auth/register', payload);
  return response.data;
}

// Logout API
export async function logoutAPI() {
  await client.post('/auth/logout');
  return null;
}

// Check API
export async function checkAPI() {
  const response = await client.get<User>('/auth/check');
  const cookies = await response.headers['set-cookie'];

  if (cookies) {
    await setCookies(cookies);
  }

  return response.data;
}
