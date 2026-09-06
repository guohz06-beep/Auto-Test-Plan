import { DressArt, HeroDress } from './components/DressArt'
import { products, type Product } from './data/products'
import { useMemo, useState } from 'react'
import './index.css'

type CartLine = {
  product: Product
  qty: number
}

type Filter = 'all' | Product['category']

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'dress', label: 'Dresses' },
  { id: 'top', label: 'Tops' },
  { id: 'skirt', label: 'Skirts' },
]

function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#FF8FB8" />
      <path
        d="M32 14c-2.2 6.4-8 10.2-14 11.4 4.8 1.8 8.4 6.4 9.6 12.2 1.8-4.8 5.8-8.6 11-10.2-5.2-1.4-9-5.4-9.8-10.6 1.4 4.2 4.8 7.4 9.2 8.8-3.8-3.2-6-7.2-6-11.6z"
        fill="#FFE4F0"
      />
      <path d="M24 36c0 8 3.6 14 8 18 4.4-4 8-10 8-18H24z" fill="#FF5C9A" />
      <ellipse cx="32" cy="36" rx="10" ry="3.5" fill="#FF7AAD" />
    </svg>
  )
}

export default function App() {
  const [filter, setFilter] = useState<Filter>('all')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<CartLine[]>([])

  const visibleProducts = useMemo(
    () =>
      filter === 'all'
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  )

  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)
  const cartTotal = cart.reduce(
    (sum, line) => sum + line.qty * line.product.price,
    0,
  )

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((line) => line.product.id === product.id)
      if (existing) {
        return current.map((line) =>
          line.product.id === product.id
            ? { ...line, qty: line.qty + 1 }
            : line,
        )
      }
      return [...current, { product, qty: 1 }]
    })
    setCartOpen(true)
  }

  function updateQty(id: string, delta: number) {
    setCart((current) =>
      current
        .map((line) =>
          line.product.id === id ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    )
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Petalpuff home">
          <BrandMark className="brand-mark" />
          Petalpuff
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#shop">Shop</a>
          <a href="#story">Our story</a>
        </nav>
        <button
          className="cart-button"
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label={`Open cart, ${cartCount} items`}
        >
          Cart
          {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-brand">
          <div className="hero-copy">
            <p className="hero-brand" id="hero-brand">
              Petalpuff
            </p>
            <h1 className="hero-title">Cartoon dresses made for soft-day sparkle.</h1>
            <p className="hero-text">
              A blush-pink boutique of playful frocks, ruffles, and everyday clothes
              drawn with a cheerful cartoon heart.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#shop">
                Shop dresses
              </a>
              <a className="btn btn-ghost" href="#story">
                Meet the brand
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <HeroDress />
          </div>
        </section>

        <section className="section" id="shop" aria-labelledby="shop-title">
          <div className="section-head">
            <div>
              <h2 id="shop-title">Shop the closet</h2>
              <p>Pick a pink piece and add it to your cart in one tap.</p>
            </div>
            <div className="filters" role="tablist" aria-label="Product filters">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`filter-chip${filter === item.id ? ' active' : ''}`}
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article
                className="product"
                key={product.id}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <DressArt
                  className="product-art"
                  type={product.dressType}
                  accent={product.accent}
                />
                <div className="product-meta">
                  <h3>{product.name}</h3>
                  <p>{product.blurb}</p>
                </div>
                <div className="product-row">
                  <span className="price">${product.price}</span>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section story" id="story" aria-labelledby="story-title">
          <div className="story-panel">
            <h2 id="story-title">Drawn in pink, stitched for giggles</h2>
            <p>
              Petalpuff started as sketchbook doodles of dresses that felt like
              balloons, berries, and birthday cake. Every piece keeps that cartoon
              charm—rounded shapes, candy buttons, and colors that blush from
              soft petal to pop-pink.
            </p>
          </div>
          <DressArt className="story-art" type="ruffle" accent="#FF5C9A" />
        </section>
      </main>

      <footer className="site-footer">
        <strong>Petalpuff</strong>
        <span>Cartoon clothes for sunny sidewalks and soft evenings.</span>
      </footer>

      <div
        className={`cart-backdrop${cartOpen ? ' open' : ''}`}
        onClick={() => setCartOpen(false)}
        aria-hidden={!cartOpen}
      />
      <aside
        className={`cart-drawer${cartOpen ? ' open' : ''}`}
        aria-hidden={!cartOpen}
        aria-label="Shopping cart"
      >
        <div className="cart-header">
          <h2>Your cart</h2>
          <button
            className="icon-button"
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="cart-list">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is waiting for a dress.</p>
          ) : (
            cart.map((line) => (
              <div className="cart-item" key={line.product.id}>
                <div>
                  <h3>{line.product.name}</h3>
                  <p>${line.product.price} each</p>
                </div>
                <div className="qty-controls">
                  <button
                    type="button"
                    onClick={() => updateQty(line.product.id, -1)}
                    aria-label={`Decrease ${line.product.name}`}
                  >
                    −
                  </button>
                  <span>{line.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(line.product.id, 1)}
                    aria-label={`Increase ${line.product.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>
          <button className="btn btn-primary" type="button" disabled={cart.length === 0}>
            Checkout soon
          </button>
        </div>
      </aside>
    </>
  )
}
