export type ProductType = {
    id: number;
    name: string;
    brand: string;
};

type CategoryType = {
    id: number,
    name: string
}

export type ProjectType = {
    id: number
    name: string
    categoryName: string
    description?: string
    projectEmail?: string
}