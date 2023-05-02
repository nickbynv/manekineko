export interface IProduct {
    title: string
    img: string
    category: {
        value: string
        label: string
    }
    weight?: number
    price: number
    description: string
}

export interface ICategory {
    label: string
    value: string
    path: string
}

export interface ICategories {
    common: ICategory[]
    food: () => ICategory[]
}