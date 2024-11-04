# Frontend App

Frontend app to represent a web app layout with:

- Header navigation
- Side navigation
- Stepped form filling

## URL

[https://nextjs-app-coral-five.vercel.app](https://nextjs-app-coral-five.vercel.app)

## Stack

- Javascript library: [React](https://react.dev/)
- React framework: [Nextjs](https://nextjs.org/)
- CSS/JS framework: [Bootstrap](https://getbootstrap.com/)

## State management

This app uses [React's context hook](https://react.dev/reference/react/useContext) and [reducer hook](https://react.dev/reference/react/useReducer) to manage state locally leveraging the reducer pattern:

- [app/contexts/formContext.js](./app/contexts/formContext.js)

[See more about React context/reducer pattern](https://react.dev/learn/scaling-up-with-reducer-and-context)

## CSS Theme

CSS Theme is defined using local CSS Variables and orriding's Boostrap CSS Variables:

- App theme: [app/page.module.css](./app/page.module.css) and [app/globals.css](./app/globals.css)
- CSS override: [app/bootstrap-theme.css](./app/bootstrap-theme.css)

## Routes

In Next.js routing is folder based.

[See more about Next.js routing](https://nextjs.org/docs/app/building-your-application/routing)

## Components

Components are made with a pure logic, meant to be reused and have no side-effects (Single Responsability):

- [components](./components)

## Local development

- [Node.js](https://nodejs.org/en) version: 18+
- [NPM](https://www.npmjs.com/) version: 9+

### Install dependencies

```
npm i
```

### Run app

```
npm run dev
```

### Local URL

[http://localhost:3000](http://localhost:3000)

