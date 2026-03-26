# product-card-app

Product UI microfrontend responsible for displaying product information and related components within the microfrontend system.

---

## Role

- Provides product presentation layer (UI components)
- Displays product details, images, and metadata
- Owns the product presentation domain within the system
- Integrated into the host application at runtime

---

## Integration

- Exposed as a remote module via Module Federation
- Loaded dynamically by the host application (`main-app`)
- Designed to be independently deployable
- Loaded via remote entry URL at runtime
- Designed to be consumed by multiple host applications
- Shares dependencies with host when required

---

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Module Federation (vite-plugin-federation)

---

## Development

```bash
yarn
yarn dev
```

Application runs at http://localhost:3001

## Part of system

This application is part of the microfrontend system:  
[Microfrontends Vue Lab](https://github.com/Artem-Makarchenko-Dev/microfrontends-vue-lab)