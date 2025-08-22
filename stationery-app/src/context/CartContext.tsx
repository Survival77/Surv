import React, { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from '../data/products'

type CartItem = {
	product: Product
	quantity: number
}

type CartContextValue = {
	items: CartItem[]
	addToCart: (product: Product, quantity?: number) => void
	removeFromCart: (productId: string) => void
	clearCart: () => void
	totalItems: number
	totalPrice: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([])

	function addToCart(product: Product, quantity: number = 1) {
		setItems((prev) => {
			const index = prev.findIndex((ci) => ci.product.id === product.id)
			if (index !== -1) {
				const next = [...prev]
				next[index] = {
					product,
					quantity: next[index].quantity + quantity,
				}
				return next
			}
			return [...prev, { product, quantity }]
		})
	}

	function removeFromCart(productId: string) {
		setItems((prev) => prev.filter((ci) => ci.product.id !== productId))
	}

	function clearCart() {
		setItems([])
	}

	const { totalItems, totalPrice } = useMemo(() => {
		const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0)
		const totalPrice = items.reduce((sum, ci) => sum + ci.product.price * ci.quantity, 0)
		return { totalItems, totalPrice }
	}, [items])

	const value: CartContextValue = {
		items,
		addToCart,
		removeFromCart,
		clearCart,
		totalItems,
		totalPrice,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
	const ctx = useContext(CartContext)
	if (!ctx) throw new Error('useCart must be used within CartProvider')
	return ctx
}