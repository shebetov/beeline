# Beeline Test Task


## Setup

> Node.Js v20.11.1 is required to run the project, (download: https://nodejs.org/en/download)

Pull the project (run in empty directory):

```bash

git clone https://github.com/shebetov/beeline.git .

```

Install all dependencies:

```bash

npm ci

```


## Run Locally

Run local server on 4000 port

```bash

npx vite --port=4000

```

Then you can access application at http://localhost:4000/


## Project Tech-Stack

Dependencies used for the development:

1. Node.Js v20.11 - latest LTS version available at the moment
2. Vite v5 - build tool with fast builds and great support
3. Vue v3.4 - model-view JS Framework
4. Tailwind CSS - CSS framework with predefined styles for faster development
5. PostCSS - CSS transformer for better browser support and enhanced syntax

## Design Theme

The design theme is coded as a set of values that represent colors, fonts and other parameters, affecting website appearance. That way it is easy to change any theme aspect by editing a single value in theme, rather then changing it in whole project.

Theme is also integrated with Tailwind CSS, so that it will use the same theme settings as project.

Theme is coded in [style.css](src/assets/css/style.css)

> At the moment only part of the theme is coded which is used on page from the test task

## Solved Issues

1. Design uses custom "Sohne" font - preview version of the font was downloaded from the official website.
2. The background brand image has white color instead of brand color - fixed by CSS as temporary solution, the image itself should be fixed in future.


## Notes

1. The project is not finished yet, so not all of the components are separated. Because of that App.vue contains raw page elements instead of using router for page switching.
