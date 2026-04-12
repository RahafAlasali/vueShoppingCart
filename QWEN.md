# QWEN.md - Vue Shopping Cart Project

## Project Overview

**vueShoppingCart** is a full-featured e-commerce single-page application (SPA) built with **Vue 2**, **Vuetify 2**, and **Vuex**. It provides a complete shopping experience with product browsing, cart management, user authentication, and an admin dashboard for managing products, users, and categories.

### Key Features
- **Public Storefront**: Home page with gallery, product listings, category filtering, about page, and contact section
- **Shopping Cart**: Add/remove products, quantity management, checkout flow
- **Authentication**: Login and registration with JWT token-based auth
- **Admin Dashboard**: Manage products, users, and categories
- **Internationalization (i18n)**: Supports English and Arabic locales
- **Responsive Design**: Mobile-first UI using Vuetify's grid system
- **Animations**: AOS (Animate on Scroll) and GSAP for smooth transitions

### Tech Stack
| Category | Technology |
|----------|------------|
| Framework | Vue 2.6 |
| UI Library | Vuetify 2.6 |
| State Management | Vuex 3.6 |
| Routing | Vue Router 3.5 |
| HTTP Client | Axios 1.7 |
| Charts | Chart.js 4.5 |
| i18n | vue-i18n 8.28 |
| Toast Notifications | vue-toastification 1.7 |
| Build Tool | Vue CLI 5.0 |
| CSS Preprocessor | SCSS (Sass) |
| Deployment | GitHub Pages (gh-pages) |

---

## Project Structure

```
src/
├── App.vue                  # Root component with loader
├── main.js                  # Entry point - Vue instance setup
├── assets/                  # Static assets (images, fonts)
├── components/
│   ├── auth/                # Dashboard components (Nav.vue, sidebar.vue)
│   └── home/                # Public store components (NavBar.vue, products, etc.)
├── layout/
│   ├── home.vue             # Public layout wrapper
│   └── dashboard.vue        # Admin dashboard layout
├── locales/
│   ├── en.json              # English translations
│   └── ar.json              # Arabic translations
├── mixins/
│   └── generalMixin.js      # Shared component mixins
├── plugins/
│   └── vuetify.js           # Vuetify & i18n configuration
├── router/
│   └── index.js             # Vue Router configuration
├── store/
│   ├── index.js             # Vuex store root
│   ├── auth/                # Authentication state module
│   ├── cart/                # Shopping cart state module
│   └── core/                # Core/global state module
└── views/
    ├── admin/               # Admin dashboard views
    ├── AboutView.vue        # About Us page
    ├── Cart.vue             # Cart/checkout view
    ├── HomeView.vue         # Home page view
    ├── Login.vue            # Login page
    ├── ProductDetailsView.vue
    ├── ProductsView.vue     # Product listing page
    └── Register.vue         # Registration page
```

---

## Building and Running

### Development
```bash
npm run serve
```
Starts the development server. Typically runs on `http://localhost:8080`.

### Production Build
```bash
npm run build
```
Outputs optimized files to the `dist/` directory.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds the project and deploys to GitHub Pages using `gh-pages`.

### Prerequisites
- Node.js (v14+ recommended)
- npm

Install dependencies:
```bash
npm install
```

---

## Routing

The app uses **history mode** routing. Key routes:

| Path | Name | Description |
|------|------|-------------|
| `/` | home | Home page |
| `/products` | products | Product listing |
| `/product/:id` | productDetails | Single product view |
| `/cart` | cart | Shopping cart |
| `/about` | about | About Us page |
| `/login` | login | Login page |
| `/register` | register | Registration page |
| `/dashboard` | dashboard | Admin index (requires auth) |
| `/dashboard/products` | - | Admin product management (requires auth) |
| `/dashboard/users` | - | Admin user management (requires auth) |
| `/dashboard/categories` | - | Admin category management (requires auth) |

Routes under `/dashboard` are protected by the `requiresAuth` meta flag.

---

## State Management (Vuex)

The Vuex store is modularized into three main modules:

- **`auth`** – Manages login state, user authentication, and token handling
- **`cart`** – Manages shopping cart items, quantities, and totals
- **`core`** – Global app state (products, categories, API data, etc.)

Global state includes a `loadPage` flag used to show/hide the loading spinner during route transitions.

---

## Internationalization (i18n)

The app supports **English** (`en`) and **Arabic** (`ar`) via `vue-i18n`. Translation files are in `src/locales/`. The language selector is in the top navbar. Arabic also triggers RTL layout support via Vuetify.

Usage in templates:
```vue
{{ $t('home') }}
{{ $t('aboutDescription') }}
```

---

## Vuetify Theme Configuration

Primary and secondary colors are defined in `src/plugins/vuetify.js`:

```js
primary: "#05453e"    // Deep green
secondary: "#f4631b"  // Orange accent
```

Custom fonts used:
- **Poppins** – Body text
- **Cormorant Garamond** – Headers/hero text (with italic + underline styling)

---

## Development Conventions

- **Component Naming**: PascalCase for `.vue` files (e.g., `HomeView.vue`, `NavBar.vue`)
- **Lazy Loading**: Route components use dynamic `import()` for code splitting
- **SCSS**: Scoped styles use `<style scoped lang="scss">`
- **API Calls**: Made via Axios, likely orchestrated through Vuex actions in `store/core/`
- **Toast Notifications**: Used for user feedback (login, logout, cart actions)
- **Loading States**: A page loader (`vue-ui-preloader`) shows during route transitions

---

## Key Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, deployment config |
| `vue.config.js` | Vue CLI config, public path for GitHub Pages |
| `babel.config.js` | Babel transpilation settings |
| `jsconfig.json` | IDE path aliases (`@/` maps to `src/`) |
| `.gitignore` | Ignores `node_modules/`, `dist/`, `.DS_Store`, etc. |

---

## Useful Links

- **GitHub Pages**: https://rahafalasali.github.io/vueShoppingCart
- **GitLab Repo**: https://gitlab.com/RahafAl/vue-shoppingcart
