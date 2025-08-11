# Ordino
- A task tracking app built with React

## User Stories
- [x] User should be able to add a new task
- [x] User should be able to view all tasks
- [ ] User should be able to mark task as complete
- [x] User should be able to delete tasks
- [ ] User should be able to edit a task
- [ ] User should be able to filter tasks by importance (label)
- [ ] User should be able to refresh the page and have task data persist

## To Do
- [ ] Add Github template with PR description scaffold
- [ ] Add the ability to edit items
- [ ] Add a filter and give each item an urgency level - filter by urgency

## Tech Stack

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Styles (Sass)
- Build uses Sass modules
- Global styles are in `global.scss` and imported in `App.jsx` and are available to use across all components
- Create component stylesheets like so: `ItemList.module.scss`