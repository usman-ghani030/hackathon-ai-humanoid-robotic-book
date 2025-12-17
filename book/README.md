# Physical AI & Humanoid Robotics Course

This repository contains a comprehensive course on Physical AI and Humanoid Robotics, built with Docusaurus for documentation and GitHub Pages deployment.

## Modules

1. **Module 1: The Robotic Nervous System (ROS 2)** - Introduction to ROS 2 as the middleware layer for embodied intelligence and humanoid robot control.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

To build the documentation website:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is configured for GitHub Pages deployment. When you push changes to the repository, GitHub Actions can automatically build and deploy the site.

## Contributing

To add new content:
1. Create new Markdown files in the appropriate module directory under `/docs`
2. Update `sidebars.js` to include the new content in the navigation
3. Use Docusaurus frontmatter in your Markdown files for proper metadata

## Architecture

- `/docs` - Contains all documentation content in Markdown format
- `/src` - Custom React components and CSS
- `docusaurus.config.js` - Main configuration file
- `sidebars.js` - Navigation sidebar configuration
- `package.json` - Project dependencies and scripts