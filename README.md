# playground-react

Project uses [React](https://beta.reactjs.org/) and [Vite](https://vitejs.dev/).

## Installation and running

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev
# build for production
npm run build
# locally preview production build
npm run preview

# linters
npm run lint:js
npm run lint:css
```

## Committing conventions

Project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages and [Husky](https://typicode.github.io/husky/#/) for pre-commit hooks.


| type     | description                                                                                                 |
|----------|-------------------------------------------------------------------------------------------------------------|
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| chore    | Changes to the build process or auxiliary tools and libraries such as documentation generation              |
| ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| docs     | Documentation only changes                                                                                  |
| feat     | A new feature                                                                                               |
| fix      | A bug fix                                                                                                   |
| perf     | A code change that improves performance                                                                     |
| refactor | A code change that neither fixes a bug nor adds a feature                                                   |
| revert   | Revert to a commit                                                                                          |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| test     | Adding missing tests or correcting existing tests                                                           |
