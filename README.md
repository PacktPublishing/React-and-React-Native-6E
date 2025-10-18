# React and React Native - Sixth Edition

This repository contains the code examples and projects from the sixth edition of "React and React Native" by [Mikhail Sakhniuk](https://github.com/sakhnyuk) and Adam Boduch, and published by [Packt](https://www.packtpub.com/). The book and this repository have been reviewed by [Rodrigo Lobenwein](https://github.com/rodrigolobenwein).

## Prerequisites

Before running any of the projects, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- For React Native projects: **Expo CLI** (`npm install -g @expo/cli`)

## How to Run the Projects

### For React Web Projects (Chapters 2-14)

1. Navigate to the specific project directory:
   ```bash
   cd ChapterXX/project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### For React Native Projects (Chapters 17-28)

1. Navigate to the specific project directory:
   ```bash
   cd ChapterXX/project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Use the Expo Go app on your mobile device to scan the QR code, or use an emulator/simulator

## Chapter Overview

- **Chapter 2**: Understanding JSX and React elements - Learn the fundamentals of JSX syntax and React's virtual DOM
- **Chapter 3**: Understanding React components and properties - Master component creation, props, state, and lifecycle methods
- **Chapter 4**: Event handling and user interactions - Handle user events and create interactive components
- **Chapter 5**: Component composition and reusability - Build modular, reusable components and understand composition patterns
- **Chapter 6**: TypeScript integration with React - Add type safety to your React applications
- **Chapter 7**: React Router for navigation - Implement client-side routing and navigation
- **Chapter 8**: Code splitting and lazy loading - Optimize application performance with dynamic imports
- **Chapter 9**: Material-UI components and theming - Build beautiful UIs with Material Design components
- **Chapter 10**: ESLint configuration and code quality - Set up linting and maintain code quality
- **Chapter 11**: Data fetching and API integration - Connect your apps to external APIs and services
- **Chapter 13**: Next.js and server-side rendering - Build full-stack React applications
- **Chapter 14**: Testing React applications - Write comprehensive tests for your React components
- **Chapter 17**: React Native fundamentals - Get started with mobile app development
- **Chapter 18**: React Native layouts and styling - Create responsive mobile layouts
- **Chapter 19**: React Native navigation - Implement navigation patterns for mobile apps
- **Chapter 20**: Working with lists and data - Handle data collections in mobile apps
- **Chapter 21**: Maps and location services - Integrate maps and location features
- **Chapter 22**: User input and forms - Create forms and handle user input
- **Chapter 23**: Touch interactions and gestures - Implement touch and gesture handling
- **Chapter 24**: Progress indicators and loading states - Show progress and loading feedback
- **Chapter 25**: Native device features - Access device capabilities and native APIs
- **Chapter 26**: Animations and transitions - Create smooth animations and transitions
- **Chapter 27**: Performance optimization - Optimize React Native app performance
- **Chapter 28**: Publishing and deployment - Deploy your React Native apps to app stores

## Troubleshooting

### Common Issues

**Problem**: After running `npm install` followed by `npm run dev`, you encounter errors.

**Solution**: This is a common issue that can occur due to dependency conflicts or corrupted node_modules. Follow these steps:

1. Delete the `node_modules` folder:
   ```bash
   rm -rf node_modules
   ```
   On Windows:
   ```bash
   rmdir /s node_modules
   ```

2. Delete the `package-lock.json` file:
   ```bash
   rm package-lock.json
   ```
   On Windows:
   ```bash
   del package-lock.json
   ```

3. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

4. Reinstall dependencies:
   ```bash
   npm install
   ```

5. Try running the project again:
   ```bash
   npm run dev
   ```

### Additional Troubleshooting Tips

- **Port conflicts**: If you get a "port already in use" error, try running on a different port:
  ```bash
  npm run dev -- --port 3001
  ```

- **Expo issues**: For React Native projects, if you encounter Expo-related issues, try:
  ```bash
  npx expo install --fix
  ```

- **TypeScript errors**: If you see TypeScript compilation errors, ensure you have the correct TypeScript version and try:
  ```bash
  npx tsc --noEmit
  ```

## License

This project is licensed under the terms specified in the LICENSE file.