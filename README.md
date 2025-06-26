# 🚀 Nabil Lemriki - Interactive Portfolio Website

A modern, fully interactive portfolio website built with Next.js 14, featuring a unique draggable canvas interface, comprehensive project showcase, dark mode support, and smooth animations. This portfolio demonstrates advanced web development skills through an engaging user experience.

## 📋 Table of Contents

- [🌟 Features Overview](#-features-overview)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💻 VS Code Setup](#-vs-code-setup)
- [📚 Component Documentation](#-component-documentation)
- [🎨 Customization Guide](#-customization-guide)
- [🔧 Development Guidelines](#-development-guidelines)
- [🚀 Deployment](#-deployment)
- [🤖 AI Development Assistant Guide](#-ai-development-assistant-guide)
- [📖 API Reference](#-api-reference)
- [🧪 Testing](#-testing)
- [📄 License](#-license)

## 🌟 Features Overview

### Core Interactive Features
- **🎯 Draggable Canvas Interface**: Interactive homepage with drag-to-explore functionality
- **🌓 Dark/Light Mode Toggle**: Seamless theme switching with system preference detection
- **🔍 Real-time Project Search**: Instant search with keyboard navigation and project filtering
- **📱 Fully Responsive Design**: Optimized for mobile, tablet, and desktop experiences
- **✨ Smooth Scroll Animations**: Intersection Observer-based animations with reduced motion support
- **🎨 Interactive Sticky Notes**: Animated floating elements around profile sections

### Content Management
- **📄 Individual Project Pages**: Detailed project showcases with galleries, tech stacks, and live demos
- **🔗 GitHub & Demo Integration**: Direct links to source code and live project demonstrations
- **📊 Experience Timeline**: Visual representation of work history with achievements
- **📧 Contact Form**: Functional contact form with validation and social media integration
- **🏷️ Dynamic Tagging System**: Project categorization with color-coded badges

### Performance & Accessibility
- **⚡ Optimized Performance**: Lazy loading, image optimization, and efficient animations
- **♿ Full Accessibility Support**: ARIA labels, keyboard navigation, and screen reader compatibility
- **🔍 SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **📊 Analytics Ready**: Built-in support for tracking and performance monitoring

## 🛠 Tech Stack

### Frontend Framework
\`\`\`typescript
// Core framework and language
Next.js 14.0+          // React framework with App Router
TypeScript 5.0+        // Type-safe development
React 18.0+            // UI library with hooks and context
\`\`\`

### Styling & UI
\`\`\`typescript
// Styling and component libraries
Tailwind CSS 3.4+      // Utility-first CSS framework
shadcn/ui             // High-quality, accessible component library
Lucide React          // Modern icon library with 1000+ icons
CSS Modules           // Scoped CSS with custom animations
\`\`\`

### Development Tools
\`\`\`typescript
// Development and build tools
ESLint 8.0+           // Code linting and formatting
PostCSS 8.0+          // CSS processing and optimization
Autoprefixer          // Automatic vendor prefixes
Sharp                 // Image optimization and processing
\`\`\`

### Fonts & Assets
\`\`\`css
/* Custom typography */
@import url('https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&display=swap');

/* Font configuration */
.font-solway {
  font-family: "Solway", "Solway Placeholder", serif;
  font-feature-settings: "rlig" 1, "calt" 1;
}
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio-website/
├── 📁 app/                           # Next.js App Router (main application)
│   ├── 📁 about/                     # About page route
│   │   ├── 📄 page.tsx              # About page component
│   │   └── 📄 loading.tsx           # Loading state for about page
│   ├── 📁 contact/                   # Contact page route
│   │   ├── 📄 page.tsx              # Contact form and social links
│   │   └── 📄 loading.tsx           # Loading state for contact page
│   ├── 📁 projects/                  # Projects section
│   │   ├── 📁 [slug]/               # Dynamic project detail pages
│   │   │   └── 📄 page.tsx          # Individual project showcase
│   │   ├── 📄 page.tsx              # Projects listing page
│   │   └── 📄 loading.tsx           # Loading state for projects
│   ├── 📄 globals.css               # Global styles, CSS variables, animations
│   ├── 📄 layout.tsx                # Root layout with metadata and providers
│   ├── 📄 loading.tsx               # Global loading component
│   └── 📄 page.tsx                  # Homepage with draggable canvas
├── 📁 components/                    # Reusable React components
│   ├── 📁 ui/                       # shadcn/ui base components
│   │   ├── 📄 button.tsx            # Customizable button component
│   │   ├── 📄 card.tsx              # Card container component
│   │   ├── 📄 dialog.tsx            # Modal/dialog component
│   │   ├── 📄 input.tsx             # Form input component
│   │   ├── 📄 textarea.tsx          # Multi-line text input
│   │   └── 📄 badge.tsx             # Tag/label component
│   ├── 📄 about-section.tsx         # Profile, skills, and sticky notes
│   ├── 📄 contact-section.tsx       # Contact form with validation
│   ├── 📄 experience-section.tsx    # Work timeline with achievements
│   ├── 📄 hero-section.tsx          # Main landing section with animations
│   ├── 📄 navigation.tsx            # Sidebar navigation with theme toggle
│   ├── 📄 projects-section.tsx      # Featured projects showcase
│   ├── 📄 search-dialog.tsx         # Project search with keyboard nav
│   ├── 📄 sticky-note.tsx           # Animated floating note component
│   └── 📄 theme-provider.tsx        # Dark/light mode context provider
├── 📁 hooks/                        # Custom React hooks
│   ├── 📄 use-scroll-animation.ts   # Intersection Observer animations
│   └── 📄 use-active-section.ts     # Active navigation section tracking
├── 📁 utils/                        # Utility functions
│   └── 📄 smooth-scroll.ts          # Smooth scrolling with reduced motion
├── 📁 lib/                          # Library configurations
│   └── 📄 utils.ts                  # Tailwind class merging utilities
├── 📁 public/                       # Static assets
│   ├── 📄 favicon.ico               # Site favicon
│   ├── 📄 favicon.svg               # SVG favicon for modern browsers
│   ├── 📄 apple-touch-icon.png      # iOS home screen icon
│   └── 📄 manifest.json             # PWA manifest file
├── 📄 .eslintrc.json               # ESLint configuration
├── 📄 .gitignore                   # Git ignore patterns
├── 📄 next.config.mjs              # Next.js configuration
├── 📄 package.json                 # Dependencies and scripts
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 README.md                    # This documentation file
\`\`\`

## 🚀 Getting Started

### Prerequisites
\`\`\`bash
# Required software versions
Node.js >= 18.0.0
npm >= 8.0.0 (or yarn >= 1.22.0, pnpm >= 7.0.0)
Git >= 2.30.0
\`\`\`

### Installation Steps

1. **Clone the Repository**
   \`\`\`bash
   # Clone the project
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   
   # Verify Node.js version
   node --version  # Should be 18.0.0 or higher
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   # Using npm (recommended)
   npm install
   
   # Or using yarn
   yarn install
   
   # Or using pnpm
   pnpm install
   \`\`\`

3. **Environment Setup**
   \`\`\`bash
   # Create environment file
   cp .env.example .env.local
   
   # Edit environment variables
   nano .env.local
   \`\`\`

   \`\`\`env
   # .env.local configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="Your Portfolio"
   NEXT_PUBLIC_AUTHOR_NAME="Your Name"
   NEXT_PUBLIC_AUTHOR_EMAIL="your.email@example.com"
   
   # Optional: Analytics and tracking
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
   
   # Optional: Contact form integration
   EMAILJS_SERVICE_ID=your-emailjs-service-id
   EMAILJS_TEMPLATE_ID=your-emailjs-template-id
   EMAILJS_PUBLIC_KEY=your-emailjs-public-key
   \`\`\`

4. **Start Development Server**
   \`\`\`bash
   # Start the development server
   npm run dev
   
   # Server will start at http://localhost:3000
   # Hot reload is enabled for instant updates
   \`\`\`

5. **Verify Installation**
   \`\`\`bash
   # Check if everything is working
   curl http://localhost:3000
   
   # Or open in browser
   open http://localhost:3000
   \`\`\`

## 💻 VS Code Setup

### Recommended Extensions

Create `.vscode/extensions.json`:
\`\`\`json
{
  "recommendations": [
    // Essential for React/Next.js development
    "bradlc.vscode-tailwindcss",           // Tailwind CSS IntelliSense
    "ms-vscode.vscode-typescript-next",    // TypeScript support
    "esbenp.prettier-vscode",              // Code formatting
    "ms-vscode.vscode-eslint",             // Linting support
    
    // Enhanced development experience
    "formulahendry.auto-rename-tag",       // Auto rename paired HTML tags
    "christian-kohler.path-intellisense",  // File path autocomplete
    "ms-vscode.vscode-json",               // JSON language support
    "bradlc.vscode-tailwindcss",           // Tailwind CSS class suggestions
    
    // Git and collaboration
    "eamodio.gitlens",                     // Enhanced Git capabilities
    "ms-vscode.vscode-github-pullrequest", // GitHub integration
    
    // Optional but helpful
    "ms-vscode.vscode-thunder-client",     // API testing
    "ms-vscode.vscode-todo-highlight",     // TODO highlighting
    "usernamehw.errorlens"                 // Inline error display
  ]
}
\`\`\`

### VS Code Settings

Create `.vscode/settings.json`:
\`\`\`json
{
  // TypeScript configuration
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  
  // Formatting and saving
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  
  // Tailwind CSS configuration
  "tailwindCSS.experimental.classRegex": [
    ["cn\$$([^)]*)\$$", "'([^']*)'"],
    ["cva\$$([^)]*)\$$", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  
  // Emmet configuration
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  
  // File associations
  "files.associations": {
    "*.css": "tailwindcss"
  },
  
  // Search and file explorer
  "search.exclude": {
    "**/node_modules": true,
    "**/.next": true,
    "**/dist": true
  },
  "files.exclude": {
    "**/.next": true,
    "**/node_modules": true
  }
}
\`\`\`

### VS Code Tasks

Create `.vscode/tasks.json`:
\`\`\`json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "dev",
      "type": "shell",
      "command": "npm run dev",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "build",
      "type": "shell",
      "command": "npm run build",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    },
    {
      "label": "lint",
      "type": "shell",
      "command": "npm run lint",
      "group": "test",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    }
  ]
}
\`\`\`

### Debugging Configuration

Create `.vscode/launch.json`:
\`\`\`json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
\`\`\`

## 📚 Component Documentation

### 🏠 Homepage Components (`app/page.tsx`)

\`\`\`typescript
/**
 * Homepage with draggable canvas interface
 * 
 * Features:
 * - Draggable canvas background with smooth animations
 * - Scroll-based section navigation
 * - Performance-optimized drag interactions
 * - Responsive design with touch support
 * 
 * State Management:
 * - dragState: Controls canvas position and drag status
 * - canvasOffset: Tracks canvas transformation coordinates
 * 
 * Performance Optimizations:
 * - requestAnimationFrame for smooth drag animations
 * - Event delegation for efficient mouse handling
 * - Conditional rendering based on drag state
 */

interface DragState {
  isDragging: boolean;           // Current drag status
  dragStart: { x: number; y: number }; // Initial mouse position
  canvasOffset: { x: number; y: number }; // Canvas transformation
}

// Usage example for AI assistants:
// "Add a new section to the homepage" -> Insert between existing sections
// "Modify drag sensitivity" -> Adjust deltaX/deltaY multipliers (currently 0.2)
// "Disable dragging on mobile" -> Add media query check in handleMouseDown
\`\`\`

### 🧭 Navigation Component (`components/navigation.tsx`)

\`\`\`typescript
/**
 * Sidebar navigation with theme toggle and search
 * 
 * Features:
 * - Active section highlighting based on scroll position
 * - Smooth scroll navigation with offset compensation
 * - Theme switching (light/dark/system)
 * - Project search dialog integration
 * - Responsive tooltips with hover states
 * 
 * Navigation Items Configuration:
 * - href: Route path for navigation
 * - icon: Lucide React icon component
 * - label: Accessible label and tooltip text
 * - sectionId: Corresponding section ID for scroll navigation
 * 
 * AI Assistant Notes:
 * - To add new nav item: Add to navItems array with required properties
 * - To modify active detection: Update useActiveSection hook parameters
 * - To change theme behavior: Modify toggleTheme function logic
 */

const navItems = [
  { 
    href: "/", 
    icon: Home, 
    label: "Home", 
    sectionId: "hero" 
  },
  // Add new navigation items here
];

// Accessibility features:
// - ARIA labels for screen readers
// - Keyboard navigation support
// - Focus management with visible focus indicators
// - Semantic HTML structure
\`\`\`

### 🎯 Hero Section (`components/hero-section.tsx`)

\`\`\`typescript
/**
 * Main landing section with animated introduction
 * 
 * Animation Sequence:
 * 1. Component mounts with opacity: 0
 * 2. Text slides up with staggered animation (0.8s duration)
 * 3. Emoji appears with bounce effect after 500ms delay
 * 4. All animations respect prefers-reduced-motion
 * 
 * Customization Points:
 * - Main title: "Hi, I'm Nabil" 
 * - Subtitle: "A passionate fullstack developer & SEO consultant"
 * - Emoji: 👋 with bounce animation
 * 
 * Performance Considerations:
 * - Uses CSS animations instead of JavaScript for better performance
 * - Conditional rendering prevents hydration issues
 * - Optimized for Core Web Vitals (LCP, CLS)
 */

// Animation classes (defined in globals.css):
// .animate-fade-in: Fade in with slide up effect
// .animate-slide-up: Slide up animation for text
// .animate-scale-in: Scale in animation for emoji
// .animate-bounce: Gentle bounce effect

// AI Assistant Usage:
// "Change the hero title" -> Modify h1 content
// "Add a call-to-action button" -> Insert Button component after subtitle
// "Modify animation timing" -> Adjust CSS animation durations in globals.css
\`\`\`

### 👤 About Section (`components/about-section.tsx`)

\`\`\`typescript
/**
 * Profile section with interactive sticky notes
 * 
 * Components:
 * - Profile image with hover effects (grayscale to color)
 * - Animated sticky notes positioned around image
 * - Skills and experience preview
 * - Social media links with hover animations
 * 
 * Sticky Notes Configuration:
 * Each note has: id, content, color, position (x,y), rotation, size
 * 
 * Animation Features:
 * - Scroll-triggered animations with Intersection Observer
 * - Staggered entrance animations (200ms, 400ms delays)
 * - Hover effects on profile image and social links
 * - Responsive positioning for different screen sizes
 */

const stickyNotes = [
  {
    id: "1",
    content: "4+\nyears\nexperience",     // Use \n for line breaks
    color: "bg-green-200 dark:bg-green-300", // Tailwind classes
    x: -90, y: 40,                        // Position relative to image
    rotation: -12,                        // Rotation angle in degrees
    size: "small" as const,               // Size variant
  },
  // Add more sticky notes here
];

// Customization for AI:
// "Add a new sticky note" -> Add object to stickyNotes array
// "Change profile image" -> Update Image src prop
// "Modify social links" -> Update social media array with new platforms
// "Adjust note positions" -> Modify x, y coordinates (negative values = left/up)
\`\`\`

### 💼 Experience Section (`components/experience-section.tsx`)

\`\`\`typescript
/**
 * Work experience timeline with achievements
 * 
 * Features:
 * - Visual timeline with connecting lines
 * - Company logos with color-coded backgrounds
 * - Achievement bullet points for each role
 * - Download resume button with hover effects
 * - Scroll-triggered animations with staggered entrance
 * 
 * Data Structure:
 * - company: Company name
 * - role: Job title
 * - period: Employment duration
 * - description: Brief role summary
 * - achievements: Array of accomplishments
 * - logo: Single letter for logo display
 * - color: Tailwind background class for logo
 */

const experiences = [
  {
    id: "unique-id",
    company: "Company Name",
    role: "Job Title",
    period: "2021–2023",
    description: "Brief description of role and responsibilities",
    achievements: [
      "Specific achievement with metrics",
      "Another accomplishment with impact",
      "Technical skills or tools used"
    ],
    logo: "C",                    // Single letter for company logo
    color: "bg-blue-500",         // Logo background color
  }
];

// Timeline Visual Elements:
// - Connecting lines between experience cards
// - Circular timeline bullets with company colors
// - Hover effects on cards with shadow and border changes
// - Responsive layout that stacks on mobile devices

// AI Assistant Guidelines:
// "Add new job experience" -> Add object to experiences array
// "Modify timeline styling" -> Update Card and timeline line classes
// "Change resume download link" -> Update Button href or onClick handler
\`\`\`

### 🚀 Projects Section (`components/projects-section.tsx`)

\`\`\`typescript
/**
 * Featured projects showcase with navigation to full project pages
 * 
 * Features:
 * - Featured project cards with hover effects
 * - Technology badges with color coding
 * - Image previews with scale animations
 * - "View All Projects" navigation button
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * 
 * Project Card Components:
 * - Project image with hover scale effect
 * - Title with navigation link
 * - Description text
 * - Technology badges
 * - Category tag with color coding
 */

const featuredProjects = [
  {
    id: "project-id",
    slug: "project-slug",           // Used for URL routing
    title: "Project Name",
    description: "Brief project description for card display",
    image: "/path/to/image.jpg",
    tag: "Category",                // E-Commerce, SEO, System, etc.
    tagColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    technologies: ["Tech1", "Tech2", "Tech3"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo-url.com",
    year: "2023"
  }
];

// Card Hover Effects:
// - Image scales to 105% on hover
// - Card lifts with shadow increase
// - Smooth transitions (300ms duration)
// - Technology badges remain stable during hover

// AI Assistant Usage:
// "Add a new featured project" -> Add to featuredProjects array
// "Change card layout" -> Modify grid classes (md:grid-cols-2 lg:grid-cols-3)
// "Update project image" -> Change image src and alt text
// "Modify hover effects" -> Update hover: classes and transition durations
\`\`\`

### 📞 Contact Section (`components/contact-section.tsx`)

\`\`\`typescript
/**
 * Contact form with social media integration
 * 
 * Features:
 * - Controlled form inputs with state management
 * - Form validation (HTML5 + custom validation)
 * - Social media links with hover animations
 * - Responsive form layout (stacked on mobile, grid on desktop)
 * - Scroll-triggered animations for form appearance
 * 
 * Form State Management:
 * - name: User's full name
 * - email: Email address with validation
 * - message: Multi-line message content
 * 
 * Social Media Integration:
 * Each platform has: Icon, href, label, hover color
 */

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Form validation rules:
// - name: Required, minimum 2 characters
// - email: Required, valid email format
// - message: Required, minimum 10 characters

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/username",
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  // Add more social platforms here
];

// Form submission handling:
// - preventDefault to avoid page reload
// - Form validation before submission
// - Success/error state management
// - Integration with email services (EmailJS, Formspree, etc.)

// AI Assistant Notes:
// "Add form validation" -> Implement validation logic in handleSubmit
// "Integrate with email service" -> Add API call to form submission
// "Add new social platform" -> Add object to socialLinks array
// "Modify form styling" -> Update Input and Textarea className props
\`\`\`

### 🔍 Search Dialog (`components/search-dialog.tsx`)

\`\`\`typescript
/**
 * Project search with keyboard navigation
 * 
 * Features:
 * - Real-time search filtering across project titles, descriptions, tags
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Click and hover selection
 * - Direct navigation to project detail pages
 * - Responsive dialog with backdrop blur
 * 
 * Search Algorithm:
 * - Case-insensitive matching
 * - Searches across: title, description, tag fields
 * - Instant results with no debouncing (fast enough for small dataset)
 * 
 * Keyboard Controls:
 * - ArrowDown/ArrowUp: Navigate through results
 * - Enter: Select highlighted result
 * - Escape: Close dialog (handled by Dialog component)
 */

// Search filtering logic:
const filteredProjects = projects.filter(
  (project) =>
    project.title.toLowerCase().includes(query.toLowerCase()) ||
    project.description.toLowerCase().includes(query.toLowerCase()) ||
    project.tag.toLowerCase().includes(query.toLowerCase()),
);

// Navigation handling:
// - Uses Next.js router.push() for client-side navigation
// - Closes dialog and resets state after navigation
// - Updates URL to /projects/[slug] format

// AI Assistant Guidelines:
// "Improve search algorithm" -> Add fuzzy matching or weighted results
// "Add search categories" -> Include technology filtering
// "Enhance keyboard navigation" -> Add Tab support or shortcuts
// "Add search analytics" -> Track search queries and popular projects
\`\`\`

### 🎨 Sticky Note Component (`components/sticky-note.tsx`)

\`\`\`typescript
/**
 * Animated floating note component
 * 
 * Features:
 * - Hover animations (scale, rotation, shadow)
 * - Size variants (small, medium, large)
 * - 3D shadow effects with CSS transforms
 * - Click handlers for interactivity
 * - Accessibility support with ARIA labels
 * 
 * Props Interface:
 * - id: Unique identifier
 * - content: Text content (supports \n for line breaks)
 * - color: Tailwind background color classes
 * - x, y: Position coordinates relative to parent
 * - rotation: Rotation angle in degrees
 * - size: Size variant
 * - onClick: Optional click handler
 * - className: Additional CSS classes
 */

interface StickyNoteProps {
  id: string;
  content: string;              // Supports \n for line breaks
  color: string;                // Tailwind color classes
  x: number; y: number;         // Position coordinates
  rotation: number;             // Rotation in degrees
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
}

// Size configurations:
const sizeClasses = {
  small: "w-20 h-20 text-xs",     // 80x80px with small text
  medium: "w-24 h-24 text-sm",   // 96x96px with medium text
  large: "w-28 h-28 text-sm",    // 112x112px with medium text
};

// Animation effects:
// - Hover: Scale to 110%, remove rotation, add vertical lift
// - 3D shadow: Pseudo-element with transform offset
// - Smooth transitions: 300ms duration with ease curves

// AI Assistant Usage:
// "Create a new sticky note" -> Use StickyNote component with required props
// "Modify note animations" -> Update hover effects and transition classes
// "Add click functionality" -> Implement onClick handler
// "Change note positioning" -> Adjust x, y coordinates and rotation values
\`\`\`

### 🎭 Theme Provider (`components/theme-provider.tsx`)

\`\`\`typescript
/**
 * Dark/light mode context provider
 * 
 * Features:
 * - System preference detection
 * - Local storage persistence
 * - Context-based theme switching
 * - CSS class management for theme application
 * - Smooth transitions between themes
 * 
 * Theme Options:
 * - "light": Force light mode
 * - "dark": Force dark mode  
 * - "system": Follow system preference
 * 
 * Implementation Details:
 * - Uses React Context for global state management
 * - Applies theme classes to document root
 * - Listens to system preference changes
 * - Persists user choice in localStorage
 */

type Theme = "dark" | "light" | "system";

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Theme application logic:
// 1. Remove existing theme classes from document root
// 2. Determine effective theme (resolve "system" to actual preference)
// 3. Apply new theme class to document root
// 4. Save preference to localStorage

// CSS Variables (defined in globals.css):
// :root { --background: ...; --foreground: ...; } // Light mode
// .dark { --background: ...; --foreground: ...; } // Dark mode

// Usage in components:
// const { theme, setTheme } = useTheme();
// <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>

// AI Assistant Notes:
// "Add new theme variant" -> Extend Theme type and add CSS variables
// "Modify theme colors" -> Update CSS custom properties in globals.css
// "Add theme transition effects" -> Update transition classes in components
\`\`\`

## 🎨 Customization Guide

### 🎨 Color Scheme Customization

#### 1. Update CSS Variables
\`\`\`css
/* app/globals.css - Light mode colors */
:root {
  --background: 0 0% 100%;          /* White background */
  --foreground: 222.2 84% 4.9%;     /* Dark text */
  --primary: 222.2 47.4% 11.2%;     /* Primary brand color */
  --secondary: 210 40% 96%;         /* Secondary background */
  --accent: 210 40% 96%;            /* Accent color */
  --muted: 210 40% 96%;             /* Muted text/backgrounds */
  --border: 214.3 31.8% 91.4%;     /* Border colors */
  --ring: 222.2 84% 4.9%;          /* Focus ring color */
}

/* Dark mode overrides */
.dark {
  --background: 222.2 84% 4.9%;     /* Dark background */
  --foreground: 210 40% 98%;        /* Light text */
  --primary: 210 40% 98%;           /* Primary in dark mode */
  --secondary: 217.2 32.6% 17.5%;  /* Secondary dark background */
  /* ... other dark mode variables */
}
\`\`\`

#### 2. Custom Brand Colors
\`\`\`typescript
// tailwind.config.ts - Add custom brand colors
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',   // Lightest shade
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Primary brand color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',  // Darkest shade
        },
        // Add more custom colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      }
    }
  }
}

// Usage in components:
// className="bg-brand-500 text-white hover:bg-brand-600"
\`\`\`

### 🔤 Typography Customization

#### 1. Change Primary Font
\`\`\`css
/* app/layout.tsx - Update Google Fonts import */
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>

/* app/globals.css - Update font family */
body {
  font-family: "Inter", "Inter Placeholder", sans-serif;
}

.font-inter {
  font-family: "Inter", "Inter Placeholder", sans-serif;
}
\`\`\`

#### 2. Typography Scale
\`\`\`typescript
// tailwind.config.ts - Custom font sizes
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        // Custom sizes
        'hero': ['4rem', { lineHeight: '1.1' }],
        'display': ['5rem', { lineHeight: '1' }],
      }
    }
  }
}
\`\`\`

### 📱 Layout Customization

#### 1. Responsive Breakpoints
\`\`\`typescript
// tailwind.config.ts - Custom breakpoints
module.exports = {
  theme: {
    screens: {
      'xs': '475px',    // Extra small devices
      'sm': '640px',    // Small devices (phones)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (laptops)
      'xl': '1280px',   // Extra large devices (desktops)
      '2xl': '1536px',  // 2X large devices (large desktops)
      // Custom breakpoints
      'mobile': '480px',
      'tablet': '768px',
      'desktop': '1024px',
    }
  }
}

// Usage in components:
// className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
\`\`\`

#### 2. Container Sizes
\`\`\`css
/* app/globals.css - Custom container sizes */
.container-sm { max-width: 640px; margin: 0 auto; }
.container-md { max-width: 768px; margin: 0 auto; }
.container-lg { max-width: 1024px; margin: 0 auto; }
.container-xl { max-width: 1280px; margin: 0 auto; }

/* Custom content widths */
.content-narrow { max-width: 65ch; }  /* Optimal reading width */
.content-wide { max-width: 85ch; }    /* Wider content */
\`\`\`

### 🎭 Animation Customization

#### 1. Custom Animations
\`\`\`css
/* app/globals.css - Add custom animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Utility classes */
.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}
\`\`\`

#### 2. Animation Timing
\`\`\`typescript
// tailwind.config.ts - Custom animation durations
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    }
  }
}
\`\`\`

### 📄 Content Customization

#### 1. Personal Information
\`\`\`typescript
// components/hero-section.tsx - Update hero content
<h1>Hi, I'm [Your Name]</h1>
<p>A passionate [your role] & [specialization]</p>

// components/about-section.tsx - Update profile info
const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  location: "Your Location",
  experience: "X+ years experience",
  email: "your.email@example.com",
  linkedin: "linkedin.com/in/your-profile",
};
\`\`\`

#### 2. Experience Data
\`\`\`typescript
// components/experience-section.tsx - Update work history
const experiences = [
  {
    id: "company-1",
    company: "Your Company",
    role: "Your Role",
    period: "2020–2023",
    description: "Brief description of your role and responsibilities",
    achievements: [
      "Specific achievement with quantifiable results",
      "Another accomplishment with business impact",
      "Technical skills or tools you used",
    ],
    logo: "C",  // First letter of company name
    color: "bg-blue-500",  // Choose appropriate color
  },
  // Add more experiences
];
\`\`\`

#### 3. Projects Data
\`\`\`typescript
// Update both components/projects-section.tsx and app/projects/[slug]/page.tsx
const projects = [
  {
    id: "project-1",
    slug: "project-slug",  // URL-friendly version
    title: "Project Name",
    description: "Brief description for cards",
    longDescription: "Detailed description for project pages",
    image: "/path/to/project-image.jpg",
    images: [  // Additional screenshots
      "/path/to/screenshot1.jpg",
      "/path/to/screenshot2.jpg",
    ],
    tag: "Category",  // E-Commerce, SEO, System, etc.
    tagColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    technologies: ["Tech1", "Tech2", "Tech3"],
    githubUrl: "https://github.com/username/repo",
    demoUrl: "https://your-demo.com",
    year: "2023",
    duration: "3 months",
    team: "Solo Project",  // or "3 Developers"
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
    ],
    challenges: "Main challenge you faced during development",
    solution: "How you solved the challenge",
  },
  // Add more projects
];
\`\`\`

#### 4. Skills and Technologies
\`\`\`typescript
// components/about-section.tsx - Update skills
const skills = [
  "Your Skill 1",
  "Your Skill 2", 
  "Your Skill 3",
  // Add your skills
];

const techStack = [
  "Technology 1",
  "Technology 2",
  "Framework 1",
  "Tool 1",
  // Add your tech stack
];
\`\`\`

#### 5. Social Media Links
\`\`\`typescript
// Update social links across components
const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn", 
    color: "hover:text-blue-600 dark:hover:text-blue-400"
  },
  {
    Icon: Twitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
    color: "hover:text-blue-500 dark:hover:text-blue-400"
  },
  // Add more platforms
];
\`\`\`

### 🖼️ Image Customization

#### 1. Profile Images
\`\`\`typescript
// Replace placeholder images with your photos
// components/about-section.tsx
<Image
  src="/your-profile-photo.jpg"  // Add to public/ folder
  alt="Your Name - Professional Photo"
  width={200}
  height={200}
  className="rounded-full"
  priority  // For above-fold images
/>
\`\`\`

#### 2. Project Images
\`\`\`typescript
// Add project screenshots to public/ folder
// Update image paths in project data
image: "/projects/project-name/main-screenshot.jpg",
images: [
  "/projects/project-name/screenshot1.jpg",
  "/projects/project-name/screenshot2.jpg",
  "/projects/project-name/screenshot3.jpg",
],
\`\`\`

#### 3. Favicon and Icons
\`\`\`html
<!-- app/layout.tsx - Update favicon and icons -->
<link rel="icon" href="/your-favicon.ico" sizes="any" />
<link rel="icon" href="/your-favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/your-apple-touch-icon.png" />
\`\`\`

## 🔧 Development Guidelines

### 📝 Code Style and Standards

#### 1. TypeScript Best Practices
\`\`\`typescript
// Use explicit interfaces for component props
interface ComponentProps {
  title: string;
  description?: string;  // Optional props with ?
  children: React.ReactNode;
  onClick: (id: string) => void;
}

// Use type unions for specific values
type Theme = "light" | "dark" | "system";
type Size = "small" | "medium" | "large";

// Generic types for reusable components
interface GenericCardProps<T> {
  data: T;
  onSelect: (item: T) => void;
  renderContent: (item: T) => React.ReactNode;
}

// Use const assertions for readonly arrays
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;
\`\`\`

#### 2. Component Structure
\`\`\`typescript
// Standard component template
"use client"  // Only when using hooks or client features

import type React from "react"  // Type-only imports first
import { useState, useEffect } from "react"
import { ComponentName } from "@/components/ui/component-name"

// Props interface
interface ComponentProps {
  title: string;
  optional?: boolean;
}

// Main component function
export function ComponentName({ title, optional = false }: ComponentProps) {
  // 1. Hooks at the top
  const [state, setState] = useState(false);
  
  // 2. Event handlers
  const handleClick = () => {
    // Handle events
  };
  
  // 3. Early returns for loading/error states
  if (!title) return null;
  
  // 4. Main render
  return (
    <div className="component-wrapper">
      {/* JSX content */}
    </div>
  );
}
\`\`\`

#### 3. CSS Class Organization
\`\`\`typescript
// Organize Tailwind classes by category
<div className="
  // Layout
  flex items-center justify-between
  
  // Spacing
  p-4 m-2 gap-4
  
  // Sizing
  w-full h-auto
  
  // Colors & backgrounds
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-gray-100
  
  // Borders & shadows
  border border-gray-200 dark:border-gray-700
  rounded-lg shadow-md
  
  // Interactive states
  hover:bg-gray-50 dark:hover:bg-gray-700
  focus:outline-none focus:ring-2 focus:ring-blue-500
  
  // Animations & transitions
  transition-all duration-200 ease-in-out
  hover:scale-105 hover:shadow-lg
">
\`\`\`

#### 4. Performance Optimization

\`\`\`typescript
// 1. Image Optimization
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Descriptive alt text"
  width={400}
  height={300}
  priority  // For above-fold images
  placeholder="blur"  // Better UX
  blurDataURL="data:image/jpeg;base64,..."  // Low-quality placeholder
/>

// 2. Dynamic Imports for Code Splitting
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("@/components/heavy-component"),
  { 
    loading: () => <div>Loading...</div>,
    ssr: false  // If component doesn't need SSR
  }
);

// 3. Memoization for Expensive Operations
import { memo, useMemo, useCallback } from "react";

const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

const handleClick = useCallback(() => {
  // Handle click
}, [dependency]);

// Memoize entire components when appropriate
export const MemoizedComponent = memo(Component);

// 4. Intersection Observer for Animations
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.2,
  triggerOnce: true
});
\`\`\`

### 🧪 Testing Guidelines

#### 1. Component Testing Setup
\`\`\`typescript
// __tests__/components/hero-section.test.tsx
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/hero-section';

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays the correct title text', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Hi, I'm Nabil/i)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveAttribute('id', 'hero-title');
  });
});
\`\`\`

#### 2. Integration Testing
\`\`\`typescript
// __tests__/pages/projects.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsPage from '@/app/projects/page';

describe('Projects Page', () => {
  it('displays all project cards', () => {
    render(<ProjectsPage />);
    const projectCards = screen.getAllByRole('article');
    expect(projectCards).toHaveLength(6);  // Adjust based on your projects
  });

  it('navigates to project detail on card click', () => {
    render(<ProjectsPage />);
    const firstProject = screen.getByText('Beauty Secrets');
    fireEvent.click(firstProject);
    // Test navigation behavior
  });
});
\`\`\`

#### 3. E2E Testing with Playwright
\`\`\`typescript
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Test navigation to projects page
  await page.click('[aria-label="Projects"]');
  await expect(page).toHaveURL('/projects');
  
  // Test project detail navigation
  await page.click('text=Beauty Secrets');
  await expect(page).toHaveURL('/projects/beauty-secrets');
  
  // Test back navigation
  await page.click('text=Back to Projects');
  await expect(page).toHaveURL('/projects');
});

test('search functionality', async ({ page }) => {
  await page.goto('/');
  
  // Open search dialog
  await page.click('[aria-label="Search projects"]');
  
  // Type search query
  await page.fill('input[placeholder*="search"]', 'beauty');
  
  // Verify search results
  await expect(page.locator('text=Beauty Secrets')).toBeVisible();
  
  // Select result with keyboard
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/projects/beauty-secrets');
});
\`\`\`

### 🔒 Security Best Practices

#### 1. Environment Variables
\`\`\`bash
# .env.local - Never commit to version control
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-analytics-id

# Private variables (server-side only)
EMAIL_SERVICE_API_KEY=your-secret-key
DATABASE_URL=your-database-connection
\`\`\`

#### 2. Content Security Policy
\`\`\`typescript
// next.config.mjs - Add security headers
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  }
};
\`\`\`

#### 3. Input Sanitization
\`\`\`typescript
// utils/sanitize.ts
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')  // Remove potential HTML tags
    .substring(0, 1000);   // Limit length
}

// Usage in contact form
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const sanitizedData = {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    message: sanitizeInput(formData.message),
  };
  // Process sanitized data
};
\`\`\`

## 🚀 Deployment

### 🌐 Vercel Deployment (Recommended)

#### 1. Quick Deploy
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts to configure deployment
\`\`\`

#### 2. Environment Variables in Vercel
\`\`\`bash
# Set via Vercel CLI
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add EMAIL_SERVICE_API_KEY production

# Or via Vercel Dashboard:
# 1. Go to Project Settings
# 2. Navigate to Environment Variables
# 3. Add your variables for each environment
\`\`\`

#### 3. Custom Domain Setup
\`\`\`bash
# Add custom domain via CLI
vercel domains add yourdomain.com

# Or via Vercel Dashboard:
# 1. Go to Project Settings
# 2. Navigate to Domains
# 3. Add your custom domain
# 4. Configure DNS records as instructed
\`\`\`

### 🐳 Docker Deployment

#### 1. Dockerfile
\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
\`\`\`

#### 2. Docker Compose
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - portfolio
    restart: unless-stopped
\`\`\`

### ☁️ Other Deployment Options

#### 1. Netlify
\`\`\`bash
# Build command
npm run build

# Publish directory
out

# Environment variables
# Set in Netlify dashboard under Site settings > Environment variables
\`\`\`

#### 2. AWS Amplify
\`\`\`yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
\`\`\`

#### 3. GitHub Pages (Static Export)
\`\`\`typescript
// next.config.mjs - For static export
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
\`\`\`

\`\`\`bash
# Build and export
npm run build

# Deploy to GitHub Pages
# 1. Push to gh-pages branch
# 2. Enable GitHub Pages in repository settings
# 3. Select gh-pages branch as source
\`\`\`

## 🤖 AI Development Assistant Guide

This section provides comprehensive guidance for AI tools like GitHub Copilot, ChatGPT, Claude, and other AI assistants to understand and work effectively with this codebase.

### 🧠 Codebase Architecture Understanding

#### Project Type and Framework
\`\`\`typescript
/**
 * PROJECT: Interactive Portfolio Website
 * FRAMEWORK: Next.js 14 with App Router
 * LANGUAGE: TypeScript
 * STYLING: Tailwind CSS + shadcn/ui
 * STATE: React Context + Local State
 * ANIMATIONS: CSS + Intersection Observer
 * 
 * KEY FEATURES:
 * - Draggable canvas homepage
 * - Dark/light theme switching
 * - Project search and filtering
 * - Individual project detail pages
 * - Responsive design with animations
 * - SEO optimization
 */
\`\`\`

#### File Organization Patterns
\`\`\`typescript
/**
 * NAMING CONVENTIONS:
 * - Components: PascalCase (HeroSection, ProjectCard)
 * - Files: kebab-case (hero-section.tsx, project-card.tsx)
 * - Hooks: camelCase with 'use' prefix (useScrollAnimation)
 * - Utilities: camelCase (smoothScrollTo, formatDate)
 * - Constants: UPPER_SNAKE_CASE (API_ENDPOINTS, DEFAULT_THEME)
 * 
 * IMPORT ORDER:
 * 1. React and Next.js imports
 * 2. Third-party libraries
 * 3. Internal components (UI components first)
 * 4. Hooks and utilities
 * 5. Types and interfaces
 * 6. Constants and data
 */

// Example import structure:
import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ProjectData } from "@/types/project"
\`\`\`

#### Component Patterns
\`\`\`typescript
/**
 * COMPONENT STRUCTURE PATTERN:
 * 1. Type definitions and interfaces
 * 2. Component function with props destructuring
 * 3. Hooks (state, effects, custom hooks)
 * 4. Event handlers and utility functions
 * 5. Early returns for loading/error states
 * 6. Main JSX return
 * 
 * STYLING PATTERN:
 * - Use Tailwind utility classes
 * - Group classes by category (layout, spacing, colors, etc.)
 * - Include dark mode variants
 * - Add hover and focus states
 * - Use responsive prefixes (sm:, md:, lg:)
 */

// Standard component template for AI to follow:
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ComponentName({ 
  title, 
  description, 
  className,
  children 
}: ComponentProps) {
  // 1. State and hooks
  const [isVisible, setIsVisible] = useState(false);
  const { elementRef } = useScrollAnimation();
  
  // 2. Event handlers
  const handleClick = () => {
    // Implementation
  };
  
  // 3. Early returns
  if (!title) return null;
  
  // 4. Main render
  return (
    <div 
      ref={elementRef}
      className={cn(
        // Base styles
        "flex flex-col items-center justify-center",
        "p-6 rounded-lg border",
        // Colors with dark mode
        "bg-white dark:bg-gray-800",
        "text-gray-900 dark:text-gray-100",
        "border-gray-200 dark:border-gray-700",
        // Interactive states
        "hover:shadow-lg transition-shadow duration-200",
        // Custom className
        className
      )}
      onClick={handleClick}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      )}
      {children}
    </div>
  );
}
\`\`\`

### 🎯 Common Development Tasks

#### Adding New Components
\`\`\`typescript
/**
 * TASK: Create a new component
 * STEPS:
 * 1. Create file in appropriate directory (components/ or components/ui/)
 * 2. Follow naming convention (kebab-case for files, PascalCase for components)
 * 3. Use TypeScript interfaces for props
 * 4. Include accessibility attributes
 * 5. Add dark mode support
 * 6. Export from index file if needed
 */

// AI Prompt Example:
// "Create a testimonial card component with author name, quote, and company"

// Expected structure:
interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  company, 
  avatar,
  className 
}: TestimonialCardProps) {
  return (
    <Card className={cn("p-6", className)}>
      <blockquote className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        {avatar && (
          <Image
            src={avatar || "/placeholder.svg"}
            alt={`${author} avatar`}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">{author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
      </div>
    </Card>
  );
}
\`\`\`

#### Modifying Existing Components
\`\`\`typescript
/**
 * TASK: Modify existing component
 * GUIDELINES:
 * 1. Understand the component's current purpose and structure
 * 2. Maintain existing prop interfaces (add new props, don't remove)
 * 3. Preserve accessibility features
 * 4. Keep dark mode support
 * 5. Test responsive behavior
 * 6. Update related components if needed
 */

// AI Prompt Example:
// "Add a loading state to the ProjectCard component"

// Approach:
// 1. Add isLoading prop to interface
// 2. Add conditional rendering for loading state
// 3. Maintain existing functionality when not loading
// 4. Use consistent loading UI patterns from the project
\`\`\`

#### Adding New Pages
\`\`\`typescript
/**
 * TASK: Create new page
 * STRUCTURE:
 * 1. Create directory in app/ following Next.js App Router conventions
 * 2. Add page.tsx with default export
 * 3. Add loading.tsx for loading states
 * 4. Include Navigation component
 * 5. Add breadcrumb navigation
 * 6. Follow responsive design patterns
 * 7. Include SEO metadata
 */

// AI Prompt Example:
// "Create a blog page that lists blog posts"

// Expected structure:
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-dotted">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-8 pb-4 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </div>
      </div>
      
      {/* Page content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Content here */}
      </div>
    </div>
  );
}
\`\`\`

#### Styling Guidelines for AI
\`\`\`typescript
/**
 * STYLING RULES FOR AI ASSISTANTS:
 * 
 * 1. ALWAYS include dark mode variants
 *    ❌ bg-white text-black
 *    ✅ bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
 * 
 * 2. Use semantic color classes
 *    ❌ bg-red-500
 *    ✅ bg-red-500 (for errors) or bg-primary (for brand colors)
 * 
 * 3. Include hover and focus states
 *    ❌ button with no interactive states
 *    ✅ hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 focus:ring-blue-500
 * 
 * 4. Use consistent spacing scale
 *    ✅ p-4, p-6, p-8 (multiples of 4)
 *    ✅ gap-2, gap-4, gap-6 (consistent spacing)
 * 
 * 5. Follow responsive patterns
 *    ✅ grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 *    ✅ text-sm md:text-base lg:text-lg
 * 
 * 6. Use transition classes for animations
 *    ✅ transition-all duration-200 ease-in-out
 *    ✅ hover:scale-105 hover:shadow-lg
 */

// Color palette reference for AI:
const colorGuide = {
  // Backgrounds
  primary: "bg-white dark:bg-gray-900",
  secondary: "bg-gray-50 dark:bg-gray-800", 
  accent: "bg-gray-100 dark:bg-gray-700",
  
  // Text colors
  primaryText: "text-gray-900 dark:text-gray-100",
  secondaryText: "text-gray-600 dark:text-gray-300",
  mutedText: "text-gray-500 dark:text-gray-400",
  
  // Borders
  border: "border-gray-200 dark:border-gray-700",
  focusBorder: "border-gray-300 dark:border-gray-600",
  
  // Interactive states
  hover: "hover:bg-gray-100 dark:hover:bg-gray-800",
};
\`\`\`

### 🔧 Data Management Patterns

#### Project Data Structure
\`\`\`typescript
/**
 * PROJECT DATA PATTERN:
 * All project data should follow this interface for consistency
 */
interface ProjectData {
  // Basic info
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly version for routing
  title: string;                 // Display title
  description: string;           // Brief description for cards
  longDescription: string;       // Detailed description for project pages
  
  // Media
  image: string;                 // Main project image
  images: string[];              // Additional screenshots/gallery
  
  // Categorization
  tag: string;                   // Category (E-Commerce, SEO, etc.)
  tagColor: string;              // Tailwind classes for tag styling
  
  // Technical details
  technologies: string[];        // Tech stack used
  githubUrl: string;             // Source code link
  demoUrl: string;               // Live demo link (use "#" if none)
  
  // Metadata
  year: string;                  // Year completed
  duration: string;              // Time taken (e.g., "3 months")
  team: string;                  // Team size (e.g., "Solo Project", "3 Developers")
  
  // Detailed info (for project pages)
  features: string[];            // Key features list
  challenges: string;            // Main challenge faced
  solution: string;              // How challenge was solved
}

// Usage pattern for AI:
// When adding new projects, always include all required fields
// When modifying projects, maintain the interface structure
// When displaying projects, use appropriate fields for context
\`\`\`

#### Experience Data Structure
\`\`\`typescript
/**
 * EXPERIENCE DATA PATTERN:
 * Work experience should follow this structure
 */
interface ExperienceData {
  id: string;                    // Unique identifier
  company: string;               // Company name
  role: string;                  // Job title
  period: string;                // Employment period (e.g., "2021–2023")
  description: string;           // Brief role description
  achievements: string[];        // List of accomplishments
  logo: string;                  // Single letter for logo display
  color: string;                 // Tailwind background class for logo
}

// AI guidelines for experience data:
// - Keep achievements specific and quantifiable when possible
// - Use consistent period formatting (YYYY–YYYY)
// - Choose appropriate colors that contrast well with white text
// - Limit achievements to 3-5 items for readability
\`\`\`

### 🎨 Animation and Interaction Patterns

#### Scroll Animation Usage
\`\`\`typescript
/**
 * SCROLL ANIMATION PATTERN:
 * Use the useScrollAnimation hook for consistent animations
 */

// Basic usage:
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.2,        // Trigger when 20% visible
  triggerOnce: true,     // Animate only once
  delay: 0               // No delay
});

// Staggered animations:
const titleAnimation = useScrollAnimation({ threshold: 0.3 });
const contentAnimation = useScrollAnimation({ threshold: 0.2, delay: 200 });
const buttonAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 });

// Apply to JSX:
<div 
  ref={elementRef}
  className={`transition-all duration-800 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  }`}
>
  Content here
</div>

// AI guidelines:
// - Use consistent threshold values (0.1, 0.2, 0.3)
// - Stagger delays in 200ms increments (0, 200, 400, 600)
// - Always include transition classes for smooth animations
// - Use triggerOnce: true for performance unless repeat animation needed
\`\`\`

#### Hover Effect Patterns
\`\`\`typescript
/**
 * HOVER EFFECT PATTERNS:
 * Consistent hover effects across the site
 */

// Card hover effects:
const cardHoverClasses = "hover:shadow-xl hover:-translate-y-2 transition-all duration-300";

// Button hover effects:
const buttonHoverClasses = "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200";

// Image hover effects:
const imageHoverClasses = "hover:scale-105 transition-transform duration-300";

// Link hover effects:
const linkHoverClasses = "hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200";

// AI usage guidelines:
// - Always include transition classes with hover effects
// - Use consistent duration values (200ms for quick, 300ms for standard)
// - Include dark mode variants for color changes
// - Keep scale transforms subtle (1.05 max for most elements)
\`\`\`

### 🔍 SEO and Metadata Patterns

#### Page Metadata Structure
\`\`\`typescript
/**
 * SEO METADATA PATTERN:
 * Each page should include proper metadata
 */

// For app/layout.tsx (global metadata):
export const metadata: Metadata = {
  title: {
    default: "Your Name - Professional Title",
    template: "%s | Your Name",
  },
  description: "Brief description of your professional background and skills",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Your Name - Professional Title",
    description: "Brief description for social sharing",
    siteName: "Your Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Professional Title",
    description: "Brief description for Twitter",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
};

// For individual pages:
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page-specific description",
  openGraph: {
    title: "Page Title",
    description: "Page-specific description",
    url: "https://yourdomain.com/page-path",
  },
};

// AI guidelines for metadata:
// - Keep titles under 60 characters
// - Keep descriptions between 150-160 characters
// - Include relevant keywords naturally
// - Ensure Open Graph images are 1200x630px
// - Use consistent branding across all pages
\`\`\`

### 🚨 Common Pitfalls for AI to Avoid

#### 1. Accessibility Issues
\`\`\`typescript
/**
 * ACCESSIBILITY CHECKLIST:
 * ❌ Missing alt text on images
 * ❌ No ARIA labels on interactive elements
 * ❌ Poor color contrast
 * ❌ Missing focus indicators
 * ❌ No keyboard navigation support
 * 
 * ✅ CORRECT PATTERNS:
 */

// Images with proper alt text:
<Image src="/image.jpg" alt="Descriptive text about the image content" />

// Interactive elements with ARIA labels:
<button aria-label="Close dialog" onClick={handleClose}>
  <X className="w-4 h-4" />
</button>

// Form inputs with proper labels:
<label htmlFor="email" className="sr-only">Email Address</label>
<Input id="email" type="email" placeholder="Email Address" />

// Focus indicators:
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
\`\`\`

#### 2. Performance Issues
\`\`\`typescript
/**
 * PERFORMANCE CHECKLIST:
 * ❌ Large unoptimized images
 * ❌ Unnecessary re-renders
 * ❌ Missing memoization for expensive operations
 * ❌ Blocking JavaScript in critical path
 * 
 * ✅ CORRECT PATTERNS:
 */

// Optimized images:
<Image 
  src="/image.jpg" 
  alt="Description"
  width={400} 
  height={300}
  priority={isAboveFold}
  placeholder="blur"
/>

// Memoized expensive calculations:
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Memoized event handlers:
const handleClick = useCallback(() => {
  // Handle click
}, [dependency]);
\`\`\`

#### 3. Responsive Design Issues
\`\`\`typescript
/**
 * RESPONSIVE DESIGN CHECKLIST:
 * ❌ Fixed pixel values instead of responsive units
 * ❌ Missing mobile-first approach
 * ❌ Inconsistent breakpoint usage
 * ❌ Poor touch target sizes on mobile
 * 
 * ✅ CORRECT PATTERNS:
 */

// Mobile-first responsive classes:
className="text-sm md:text-base lg:text-lg"  // Text sizing
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Layout
className="p-4 md:p-6 lg:p-8"  // Spacing

// Touch-friendly interactive elements:
className="min-h-[44px] min-w-[44px]"  // Minimum touch target size
\`\`\`

### 📝 AI Assistant Prompts and Examples

#### Effective Prompts for This Codebase
\`\`\`typescript
/**
 * GOOD AI PROMPTS:
 * 
 * ✅ "Add a new project to the projects section with the following details: [details]"
 * ✅ "Create a testimonials section that matches the existing design system"
 * ✅ "Modify the hero section to include a call-to-action button"
 * ✅ "Add a blog page following the same layout patterns as other pages"
 * ✅ "Implement a contact form with validation using the existing form patterns"
 * 
 * ❌ AVOID VAGUE PROMPTS:
 * ❌ "Make it look better"
 * ❌ "Add some animations"
 * ❌ "Fix the styling"
 * ❌ "Make it responsive"
 */

// Example of a well-structured prompt:
/*
"Create a skills section component that:
1. Displays skills in a grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
2. Each skill has an icon, title, and description
3. Includes hover effects consistent with other components
4. Uses the existing color scheme and dark mode support
5. Has scroll-triggered animations using the useScrollAnimation hook
6. Follows the same TypeScript patterns as other components"
*/
\`\`\`

#### Code Generation Guidelines
\`\`\`typescript
/**
 * WHEN GENERATING CODE, AI SHOULD:
 * 
 * 1. Follow the existing file structure and naming conventions
 * 2. Use TypeScript interfaces for all props and data structures
 * 3. Include proper imports in the correct order
 * 4. Add accessibility attributes (ARIA labels, alt text, etc.)
 * 5. Include dark mode support for all color-related classes
 * 6. Use the existing utility functions (cn, useScrollAnimation, etc.)
 * 7. Follow the responsive design patterns
 * 8. Include proper error handling and loading states
 * 9. Add meaningful comments for complex logic
 * 10. Export components properly for use in other files
 */

// Template for AI-generated components:
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface ComponentProps {
  // Define props with proper types
}

export function ComponentName({ ...props }: ComponentProps) {
  // Component implementation following established patterns
}
\`\`\`

This comprehensive guide ensures that AI assistants can effectively understand, navigate, and contribute to the codebase while maintaining consistency, quality, and best practices.

## 📖 API Reference

### Custom Hooks

#### `useScrollAnimation`
\`\`\`typescript
interface UseScrollAnimationOptions {
  threshold?: number;        // Intersection threshold (0-1)
  rootMargin?: string;      // Root margin for intersection observer
  triggerOnce?: boolean;    // Whether to trigger animation only once
  delay?: number;           // Delay before triggering animation (ms)
}

function useScrollAnimation(options?: UseScrollAnimationOptions): {
  elementRef: RefObject<HTMLElement>;
  isVisible: boolean;
}
\`\`\`

#### `useActiveSection`
\`\`\`typescript
function useActiveSection(sectionIds: string[]): string
\`\`\`

#### `useTheme`
\`\`\`typescript
interface ThemeProviderState {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

function useTheme(): ThemeProviderState
\`\`\`

### Utility Functions

#### `smoothScrollTo`
\`\`\`typescript
function smoothScrollTo(elementId: string, offset?: number): void
\`\`\`

#### `cn` (Class Name Utility)
\`\`\`typescript
function cn(...inputs: ClassValue[]): string
\`\`\`

## 🧪 Testing

### Running Tests
\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
\`\`\`

### Test Structure
\`\`\`
__tests__/
├── components/           # Component unit tests
├── pages/               # Page integration tests
├── hooks/               # Custom hook tests
└── utils/               # Utility function tests

e2e/                     # End-to-end tests
├── navigation.spec.ts
├── search.spec.ts
└── responsive.spec.ts
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) for the beautiful component library
- [Lucide](https://lucide.dev) for the comprehensive icon set
- [Vercel](https://vercel.com) for hosting and deployment platform

---

**Built with 💜 by Nabil Lemriki**

For questions, suggestions, or support, reach out at [nabil.lemriki@gmail.com](mailto:nabil.lemriki@gmail.com)

**Portfolio URL**: [https://nabillemriki.com](https://nabillemriki.com)
**GitHub**: [https://github.com/nabillemriki](https://github.com/nabillemriki)
**LinkedIn**: [https://linkedin.com/in/nabil-lemriki-588550205](https://linkedin.com/in/nabil-lemriki-588550205)
