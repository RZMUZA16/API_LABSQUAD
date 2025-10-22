type PoinLab= {
  id: number;
  studentId: string;
  sertifikatId: number;
  activityId: number;
  poin: number;
  createdAt: Date;
};

let points: PoinLab[] = [];
let nextId = 1;

export const findallpoinlab = async (): Promise<PoinLab[]> => {
  return points;
}
export const findpoinlabById = async (id: number): Promise<PoinLab | null> => {
  const poinLab = points.find(p => p.id === id);
  return poinLab || null;
}

export const createpoinlab = async (data: Omit<PoinLab, 'id' | 'createdAt'>): Promise<PoinLab> => {
  const newPoinLab: PoinLab = {
    id: nextId++,
    createdAt: new Date(),
    ...data,
  };
  points.push(newPoinLab);
  return newPoinLab;
}

export const updatepoinlab = async (data: Omit<PoinLab, "id" | "createdAt" >): Promise<PoinLab> =>{
  const newPoint ={
    id :nextId++,
    createdAt : new Date(),
    ...data,
  };
  points.push(newPoint);
  return newPoint;
  }



export const deletepointlab = async (id: number): Promise<boolean | undefined> => {
  const index = points.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  points.splice(index, 1);
  return true;
}
