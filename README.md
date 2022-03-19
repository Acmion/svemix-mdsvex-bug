# Svemix MDsveX Bug

A minimal reproduction of a bug when using Svemix and MDsveX together.

The same issue will probably be encountered with other preprocessors as well.

## Instructions

1. Clone this repository.
2. Open the cloned directory in a terminal.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Open a browser and navigate to `localhost:3000`.
6. See that an error pops up.
7. Shut down the dev process.
8. Remove the MDsveX preprocess option from `svelte.config.js` (See comments in `svelte.config.js` for more info on how this is accomplished). 
9. Execute `npm run dev`.
10. Open a browser and navigate to `localhost:3000`.
11. The error no longer appears and Svemix works correctly, but Markdown content is no longer supported. 

## Installation Commands

Just showcasing how Svemix and MDsveX were installed.

```
npm init svelte@next svemix-mdsvex-bug
cd svemix-mdsvex-bug

npm install
npm install svemix
npm i --save-dev mdsvex
```