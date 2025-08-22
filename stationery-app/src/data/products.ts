export type Product = {
	id: string
	name: string
	description: string
	price: number
	imageUrl?: string
}

export const products: Product[] = [
	{
		id: 'notebook-classic',
		name: 'Classic Notebook',
		description: 'Hardcover A5 dotted notebook with 160gsm paper.',
		price: 18.5,
		imageUrl: '/notebook.jpg',
	},
	{
		id: 'gel-pen-set',
		name: 'Gel Pen Set (5)',
		description: 'Smooth 0.5mm gel ink pens in assorted colors.',
		price: 12.0,
		imageUrl: '/pens.jpg',
	},
	{
		id: 'weekly-planner',
		name: 'Weekly Planner',
		description: 'Minimal undated weekly planner with tear-away sheets.',
		price: 9.75,
		imageUrl: '/planner.jpg',
	},
]