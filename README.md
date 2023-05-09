# earthquake-challenge-front

This is a frontend project for the Earthquake Tracker application. It was built with [Next.js](https://nextjs.org/) and is dependent on the [Earthquake Challenge API](https://github.com/oteroleonardogh/earthquake-challenge-api) running on port 8000.

## Getting Started

To get started, first clone this repository and install the necessary packages:

```bash
git clone https://github.com/oteroleonardogh/earthquake-challenge-frontend.git
cd earthquake-challenge-front
npm install
# or
yarn
# or
pnpm install
```

To run the development server, use the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```

The application will be available at [http://localhost:3001](http://localhost:3001). To use the Earthquakes page, make sure the city to be used has already been created on the API.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Production Deployment

To build and deploy the application for production, run the following commands:

```bash
npm run build
npm start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

The application will be available at [http://localhost:3001](http://localhost:3001) in production.

## Conclusions

The frontend project was developed with several libraries and frameworks to provide the necessary functionality for the task at hand, including making HTTP requests and styling the UI.

The following libraries and frameworks were used:

- `Next.js`: A popular framework for building server-side rendered React applications.
- `Axios`: A library for making HTTP requests.
- `Tailwind CSS`: A utility-first CSS framework for styling the UI.
- `TypeScript`: A typed superset of JavaScript that helps catch errors during development.
- `ESLint`: A tool for linting JavaScript and TypeScript code.
- `Next PWA`: A plugin for Next.js that adds support for progressive web apps.

These libraries and frameworks were chosen based on their functionality, ease of use, community support, and performance.

Overall, the project provides a solid foundation for building a frontend application that communicates with the [earthquake-challenge-api](https://github.com/oteroleonardogh/earthquake-challenge-api). To run the project locally, run the npm run dev command and open [http://localhost:3001](http://localhost:3001) in your browser. To build and deploy the project in production, follow the instructions in the [Next.js deployment documentation](https://nextjs.org/docs/deployment). Please note that the frontend project depends on the [earthquake-challenge-api](https://github.com/oteroleonardogh/earthquake-challenge-api) running on port 8000, and that the city to be used for the earthquakes page should be created in the backend.


## Learn More about next.js

To learn more about Next.js, take a look at the following resources:

[Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
[Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
