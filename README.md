# 🌿 Paradise Nursery — Online Plant Shop

**Paradise Nursery** is a full-featured React + Redux shopping cart application for an online houseplant store. Browse curated collections of aromatic, medicinal, and air-purifying plants, add them to your cart, and manage your order with ease.

## Features

- 🏡 **Landing Page** — Welcome screen with a "Get Started" button
- 🌱 **Product Listing** — Browse 18+ unique houseplants across 3 categories
- 🛒 **Shopping Cart** — Dynamic cart with quantity controls and live price totals
- 🔢 **Live Cart Count** — Navbar icon updates in real time
- ⚡ **Redux State Management** — Cart state managed via Redux Toolkit

## Plant Categories

| Category | Examples |
|----------|---------|
| Aromatic Plants | Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Eucalyptus |
| Medicinal Plants | Aloe Vera, Chamomile, Echinacea, Calendula, Valerian, St. John's Wort |
| Air-Purifying Plants | Peace Lily, Spider Plant, Snake Plant, Pothos, Boston Fern, Bamboo Palm |

## Tech Stack

- **React 18** with functional components and hooks
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`)
- **React Router DOM** for navigation
- **Vite** build tool

## Getting Started

```bash
# Clone the repo
git clone https://github.com/<your-username>/e-plantShopping.git
cd e-plantShopping

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
src/
├── App.jsx          # Root component + landing page
├── App.css          # Global styles + background image
├── AboutUs.jsx      # About the company page
├── ProductList.jsx  # Plant catalog with cart integration
├── CartItem.jsx     # Shopping cart page
├── CartSlice.jsx    # Redux slice (actions + reducer)
└── store.js         # Redux store configuration
```

## About Paradise Nursery

Paradise Nursery was founded with a simple mission: bring the calming beauty of nature into every home. We source our plants ethically and ship them carefully so they arrive healthy and happy.

---

*Built as a capstone project for IBM Full Stack Development Certificate.*
