import qs from 'qs';
import client from './client';

export interface AddMaterialPayload {
  recipe_id: string;
  name: string;
  divide: string;
  unit: string;
  usage: number;
  price: number;
  cost: number;
}

// Add Material API
export async function addMaterialAPI(payload: AddMaterialPayload) {
  const response = await client.post<MaterialType>('/materials', payload);
  return response.data;
}

export interface ListMaterialsQuery {
  recipe_id?: string;
}

// List Materials API
export async function listMaterialsAPI(query: ListMaterialsQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<MaterialType[]>(
    `/materials?${queryString}`
  );
  return response.data;
}

// Read Material API
export async function readMaterialAPI(id: string) {
  const response = await client.get<MaterialType>(`/materials/${id}`);
  return response.data;
}

// Remove Material API
export async function removeMaterialAPI(id: string) {
  const response = await client.delete(`/materials/${id}`);
  return response.data;
}

export interface UpdateMaterialPayload extends AddMaterialPayload {
  id: string;
}

// Update Material API
export async function updateMaterialAPI(payload: UpdateMaterialPayload) {
  const { id, name, divide, unit, usage, price, cost } = payload;
  const response = await client.patch(`/materials/${id}`, {
    name,
    divide,
    unit,
    usage,
    price,
    cost,
  });
  return response.data;
}
