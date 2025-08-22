import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { products } from './data/products'
import { useCart } from './context/CartContext'

function Home() {
	return (
		<div className="page">
			<h1>Welcome to Paper & Pen Co.</h1>
			<p>Your one-stop shop for premium stationery.</p>
		</div>
	)
}

function Products() {
	const { addToCart } = useCart()
	return (
		<div className="page">
			<h1>Products</h1>
			<div className="product-grid">
				{products.map((p) => (
					<div key={p.id} className="product-card">
						<div className="product-media" aria-hidden>
							<div className="media-fallback" />
						</div>
						<div className="product-info">
							<h3>{p.name}</h3>
							<p className="muted">{p.description}</p>
							<div className="product-actions">
								<span className="price">${p.price.toFixed(2)}</span>
								<button className="btn" onClick={() => addToCart(p)}>Add to cart</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

function Cart() {
	const { items, removeFromCart, clearCart, totalItems, totalPrice } = useCart()
	return (
		<div className="page">
			<h1>Your Cart</h1>
			{items.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<ul className="cart-list">
						{items.map((ci) => (
							<li key={ci.product.id} className="cart-row">
								<div>
									<strong>{ci.product.name}</strong>
									<div className="muted">Qty {ci.quantity} × ${ci.product.price.toFixed(2)}</div>
								</div>
								<div className="row-actions">
									<span>${(ci.product.price * ci.quantity).toFixed(2)}</span>
									<button className="btn subtle" onClick={() => removeFromCart(ci.product.id)}>Remove</button>
								</div>
							</li>
						))}
					</ul>
					<div className="cart-summary">
						<div><strong>Items:</strong> {totalItems}</div>
						<div><strong>Total:</strong> ${totalPrice.toFixed(2)}</div>
					</div>
					<div className="cart-actions">
						<button className="btn danger" onClick={clearCart}>Clear cart</button>
						<button className="btn primary" disabled>Checkout</button>
					</div>
				</>
			)}
		</div>
	)
}

export default function App() {
	const { totalItems } = useCart()
	return (
		<div className="app">
			<header className="header">
				<Link to="/" className="brand">Paper & Pen Co.</Link>
				<nav className="nav">
					<NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
					<NavLink to="/products" className={({ isActive }) => isActive ? 'active' : undefined}>Products</NavLink>
					<NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : undefined}>Cart{totalItems > 0 ? ` (${totalItems})` : ''}</NavLink>
				</nav>
			</header>
			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</main>
		</div>
	)
}
