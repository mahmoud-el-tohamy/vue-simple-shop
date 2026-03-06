# Vue Simple Shop

A simple, beautifully designed Vue 3 E-Commerce product showcase application built with Vite, Tailwind CSS, and daisyUI.

## 🚀 Features

- **Vue 3 (Composition API)**: Modern and lightweight component structure using `<script setup>`.
- **Vite**: Blazing fast frontend built tool.
- **Tailwind CSS v4 & daisyUI**: Premium, fast, and responsive UI components with clean aesthetics.
- **Product Hero Section**: Showcases the main featured product with an engaging layout.
- **Product Gallery**: Displays related products in a responsive grid of neat cards.
- **Modular Architecture**: Well-structured component design (Header, Footer, ProductView, ProductHero, ProductGallery).

## 🛠️ Tech Stack

- **Framework**: Vue 3
- **Bundler**: Vite
- **Styling**: Tailwind CSS & daisyUI
- **Node Environment**: Node.js ^20.19.0 or >=22.12.0

## 📂 Project Structure

```bash
src/
├── components/          # Reusable Vue components
│   ├── layout/          # Header and Footer components
│   ├── productGallery.vue # Grid for related products
│   ├── productHero.vue    # Featured product section
│   └── productView.vue    # Main wrapper for products
├── App.vue              # Root application component containing product data
├── main.js              # Application entry point
└── style.css            # Global stylesheet incorporating Tailwind
```

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
   ```bash
   git clone git@github.com:mahmoud-el-tohamy/vue-simple-shop.git
   cd vue-simple-shop
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (e.g., `http://localhost:5173`).

### Build for Production
To build the app for production, simply run:
```bash
npm run build
```
This will compile and minify the necessary files into a `dist/` folder.

## 🤝 Contributing
Feel free to open an issue or submit a pull request if you have ideas on how to improve this project!
