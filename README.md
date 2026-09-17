# crazy_market

An [Ionic](https://ionicframework.com/) app built with **Angular** using **standalone components** and the **blank** starter template.

## Tech stack

- Ionic 8
- Angular 18 (standalone components)
- Capacitor 6 (for native builds)
- TypeScript

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- Ionic CLI: `npm install -g @ionic/cli`

## Getting started

Install dependencies:

```bash
npm install
```

Run the app in the browser with live reload:

```bash
ionic serve
```

Or with the Angular CLI:

```bash
npm start
```

## Build

```bash
npm run build
```

The production build is output to the `www/` directory.

## Project structure

```
src/
├── app/
│   ├── home/              # Home page (standalone component)
│   ├── app.component.ts   # Root standalone component
│   └── app.routes.ts      # Application routes
├── assets/                # Static assets
├── theme/                 # Ionic theme variables
├── global.scss            # Global styles
├── index.html
└── main.ts                # App bootstrap (standalone)
```

## Native builds (optional)

This project includes a Capacitor configuration. To add native platforms:

```bash
ionic cap add ios
ionic cap add android
```
