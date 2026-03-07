# Vue 3 Simple Shop 🛒

A modern, responsive, and interactive e-commerce storefront built with **Vue 3 Composition API**, **Vite**, **Tailwind CSS**, and **DaisyUI**. 

This project demonstrates core Vue concepts such as reactive state management, dynamic routing, component communication (Props & Emits), and modern UI design.

## 🌟 Features

- **Dynamic Routing**: Uses `vue-router` to seamlessly navigate between the `Home`, `About`, and individual `Product Details` pages.
- **Reactive State Management**: Global product and cart state defined in `App.vue`, utilizing Vue's reactivity system to share data across nested components.
- **Interactive Cart**: Clicking "Buy Now" automatically reduces the product stock and increments the global cart counter in the header.
- **Product Details Page**: Features a responsive `ProductHero` component that displays detailed information, dynamic stock availability, badges, current pricing (with discounts), and related products in a `productCarousel`.
- **Modern UI Components**: Leverages DaisyUI components (Cards, Badges, Carousels, Heroes) for a clean, consistent, and beautiful interface. 
- **Engaging Animations**: Features an elegant 3D hover effect on product cards for a premium feel, along with a smooth auto-scrolling image carousel that pauses gracefully on hover.
- **High-Quality Imagery**: Styled with premium Unsplash images matching the product descriptions (Sneakers, Watches, Boots, Sunglasses, etc.).

## 🛠️ Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API / `<script setup>`)
- **Routing:** [Vue Router 4](https://router.vuejs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **Package Manager:** `npm`

## 📁 Project Structure

```text
src/
├── assets/             # Static assets (images, global CSS)
├── components/         # Reusable Vue components
│   ├── layout/         # Header and Footer components
│   ├── carouselBanner.vue
│   ├── productCard.vue
│   ├── productCarousel.vue
│   └── productHero.vue
├── router/             # Vue Router configuration
│   └── index.js        # Route definitions (/, /product/:id, /about)
├── views/              # Page components
│   ├── aboutView.vue   
│   ├── homeView.vue    
│   └── productView.vue 
├── App.vue             # Root component (Global state & Layout)
└── main.js             # Application entry point
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js installed in your environment. Node.js version `>=20.19.0` or `>=22.12.0` is recommended.

### Installation

1. Clone the repository 
2. Install dependencies:
```bash
npm install
```

3. Start the Vite development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`.

### Building for Production
To build the app for production:
```bash
npm run build
```
This will compile and optimize the assets into the `dist` directory. You can preview the production build using `npm run preview`.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
