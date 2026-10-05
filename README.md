# Web Engineering Lab 01

## Objective
Set up a Web Engineering development environment and create a first Node.js-based Web Engineering project.

## Project Structure

```text
web-engineering-lab/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── tests/
│   └── greet.test.js
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Run the project

```bash
npm install
npm start
```

Then open the localhost URL shown by `serve`.

## Check the project

```bash
npm run lint
npm run format
node --test tests/greet.test.js
```

## GitHub

Do not upload `node_modules/`. The `.gitignore` file excludes it.
