# Physical AI & Humanoid Robotics Course

This repository contains a comprehensive course on Physical AI and Humanoid Robotics, built with Docusaurus for documentation. The course is configured for deployment on both GitHub Pages and Vercel.

## Course Modules

The course is organized into four comprehensive modules:

1. **Module 1: The Robotic Nervous System (ROS 2)** - Introduction to Robot Operating System 2 as the middleware layer for embodied intelligence
2. **Module 2: The Digital Twin (Gazebo & Unity)** - Physics simulation and high-fidelity rendering for robot perception and interaction
3. **Module 3: The AI-Robot Brain (NVIDIA Isaac™)** - AI-powered perception, learning, and navigation systems
4. **Module 4: Vision–Language–Action (VLA)** - Integration of vision, language, and action for autonomous humanoid behavior

## Deployment Options

This project supports deployment on both GitHub Pages and Vercel:

### GitHub Pages Deployment
- Base URL: `/hackathon-book`
- Build command: `npm run build` (from the `book` directory)
- Output directory: `book/build`

### Vercel Deployment
- Base URL: `/` (root)
- Build command: `npm run build:vercel` (from the `book` directory)
- Output directory: `book/build`
- Configuration: See `vercel.json` in the project root

## Local Development

1. Navigate to the book directory:
   ```bash
   cd book
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Building for Production

To build for GitHub Pages:
```bash
cd book
npm run build
```

To build for Vercel:
```bash
cd book
npm run build:vercel
```

## Repository Structure

- `book/` - Docusaurus documentation site
- `specs/` - Specification files for each module
- `history/` - Historical records and documentation
- `vercel.json` - Vercel deployment configuration

## About

This course provides a complete educational journey from foundational robotic concepts to advanced AI integration for humanoid robots, emphasizing the integration of perception, planning, and action in physical systems.