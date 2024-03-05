# Rating component issue reproduction in a Micro Front End project (React 17 + Vite + module federation)

This is a sample to reporduce the issue.

## Prerequisites

- Node: v16.20.2
- PNPM: 8.15.1

## Libraries Used

- React: 17
- MUI: 5.15.7

## Build & Run the project

Following command will install the dependencies.

`pnpm install`

Following command will build all the packages.

`pnpm -r run build`

Following command will run all the application

`pnpm -r run preview`

**Application URL**

`http://localhost:5001/`

Entry file for the javascript module for shared component.

`http://localhost:5000/assets/remoteApp.js`
