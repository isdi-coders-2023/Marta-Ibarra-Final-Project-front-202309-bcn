export interface PaintingStructure {
  _id: string;
  authorInfo: string;
  image: string;
  imageDescription: string;
  name: string;
  price: number;
  title: string;
  year: number;
}

export interface PaintingsStateStructure {
  paintings: PaintingStructure[];
}

export type PaintingWithoutId = Omit<PaintingStructure, "_id">;
