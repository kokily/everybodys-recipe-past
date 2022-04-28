import qs from 'qs';
import client from './client';

export interface InitRecipePayload {
  title: string;
  serving: number;
  thumbnail: string;
}

// Init Recipe API
export async function initRecipeAPI(payload: InitRecipePayload) {
  const response = await client.post<RecipeType>('/recipes', payload);
  return response.data;
}

export interface AddRecipePayload {
  id: string;
  content: string;
}

// Add Recipe API
export async function addRecipeAPI(payload: AddRecipePayload) {
  const { id, content } = payload;
  const response = await client.patch(`/recipes/${id}`, { content });
  return response.data;
}

export interface ChangeThumbnailPayload {
  id: string;
  thumbnail: string;
}

// Change Thumbnail API
export async function changeThumbnailAPI(payload: ChangeThumbnailPayload) {
  const { id, thumbnail } = payload;
  const response = await client.patch(`/recipes/thumbnail/${id}`, {
    thumbnail,
  });
  return response.data;
}

export interface ListRecipesQuery {
  title?: string;
  cursor?: string;
}

// List Recipes API
export async function listRecipesAPI(query: ListRecipesQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<RecipeType[]>(`/recipes?${queryString}`);
  return response.data;
}

// Read Recipe API
export async function readRecipeAPI(id: string) {
  const response = await client.get<RecipeType>(`/recipes/${id}`);
  return response.data;
}

// Remove Recipe API
export async function removeRecipeAPI(id: string) {
  await client.delete(`/recipes/${id}`);
  return null;
}
