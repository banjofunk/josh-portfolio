# Josh Garner - Portfolio

A modern, interactive portfolio website showcasing my software engineering projects and skills. Built with React and TailwindCSS, featuring scroll-based animations and a unique code-reveal interface.

🔗 **[View Live Site](https://joshgarner.dev)**

## ✨ Features

- **Scroll-Based Animations**: Smooth, engaging animations powered by react-spring that respond to user scrolling
- **Code Reveal Effect**: Interactive code snippets that progressively reveal as you scroll, transitioning to project cards
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop viewing
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth transitions
- **Syntax Highlighting**: Code snippets with Prism.js syntax highlighting for JavaScript, GraphQL, and YAML

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS 3** - Utility-first CSS framework
- **react-spring** - Spring-physics based animation library
- **Prism.js** - Syntax highlighting for code snippets
- **React Icons** - Icon library for technology logos and UI elements
- **AWS Amplify** - Hosting and deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/banjofunk/josh-portfolio.git
cd josh-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
josh-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── CodePanel.jsx       # Scroll-based code reveal component
│   │   ├── GitRepoCard.jsx     # GitHub repository card
│   │   ├── PageHeader.jsx      # Portfolio header
│   │   ├── ContactInfo.jsx     # Contact information
│   │   └── Cloud.jsx           # Cloud icon SVG
│   ├── fonts/           # Custom fonts
│   ├── App.js           # Main application component
│   ├── snippets.js      # Code snippets for display
│   ├── index.css        # Global styles and Tailwind imports
│   └── index.js         # Application entry point
├── tailwind.config.js   # TailwindCSS configuration
└── package.json         # Project dependencies
```

## 🎨 Key Components

### App.js
Main application component featuring:
- Scroll event handling for animations
- Spring-based opacity transitions
- Sticky header with project showcase
- Profile section reveal on scroll

### CodePanel
Displays code snippets with scroll-based reveal animation:
- Progressive character-by-character reveal
- Syntax highlighting with Prism.js
- Smooth transition to project cards

### GitRepoCard
Repository information cards featuring:
- Technology stack icons
- Project description
- GitHub link button

## 📝 Featured Projects

1. **React + TailwindCSS Portfolio** - This very site! ([GitHub](https://github.com/banjofunk/josh-portfolio))
2. **Amplify AppSync Resolvers** - Custom VTL resolvers for GraphQL ([GitHub](https://github.com/banjofunk/amplify-resolvers))
3. **Serverless CloudFormation** - AWS infrastructure with Serverless Framework ([GitHub](https://github.com/banjofunk/serverless-resources))

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Josh Garner**  
Senior Software Engineer

- GitHub: [@banjofunk](https://github.com/banjofunk)
- Portfolio: [joshgarner.dev](https://joshgarner.dev)

---

Built with ❤️ using React and TailwindCSS
