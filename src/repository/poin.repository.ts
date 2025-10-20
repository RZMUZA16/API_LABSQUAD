type Poin = {
  id: number;
  value: number;
  description: string;
  [key: string]: any;
};

let points: Poin[] = [];
let nextId = 1;

export const findAll = async (): Promise<Poin[]> => {
  return points;
};

export const findById = async (id: number): Promise<Poin | undefined> => {
  return points.find(point => point.id === id);
};

export const create = async (data: Omit<Poin, "id">): Promise<Poin> => {
  const newPoint: Poin = { id: nextId++, ...data };
  points.push(newPoint);
  return newPoint;
};

export const update = async (id: number, data: Partial<Poin>): Promise<Poin | undefined> => {
  const index = points.findIndex(point => point.id === id);
  if (index === -1) return undefined;
  points[index] = { ...points[index], ...data };
  return points[index];
};

export const remove = async (id: number): Promise<Poin | undefined> => {
  const index = points.findIndex(point => point.id === id);
  if (index === -1) return undefined;
  const [deleted] = points.splice(index, 1);
  return deleted;
};