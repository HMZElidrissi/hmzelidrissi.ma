# hmzelidrissi.ma - Astro Project

A modern website built with Astro, featuring MDX content management, React components, and Tailwind CSS styling.

## Features

- **MDX Support**: Write content in Markdown with JSX components
- **React Integration**: Use React components alongside Astro
- **Tailwind CSS**: Modern utility-first CSS framework
- **TypeScript**: Full TypeScript support
- **Content Collections**: Structured content management with Astro Content Collections
- **Responsive Design**: Mobile-first responsive design
- **Component Library**: Built-in UI components using shadcn/ui

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── PersonCard.astro # Custom person display component
├── content/            # MDX content files
│   ├── people/         # Team member profiles
│   ├── home.ts         # Home page configuration
│   ├── menus.ts        # Navigation menu configuration
│   └── socials.ts      # Social media configuration
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout component
├── lib/                # Utility functions
│   ├── utils-client.ts # Client-side utilities
│   └── utils.ts        # Server-side utilities
├── pages/              # Astro pages
│   ├── index.astro     # Home page
│   ├── about/          # About page
│   ├── team/           # Team page
│   ├── gallery/        # Gallery page
│   └── 404.astro       # 404 error page
└── schemas/            # Content validation schemas
    ├── people.ts       # Person content schema
    └── utils.ts        # Utility schemas
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hmzelidrissi.ma-astro
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Content Management

### Adding Team Members

1. Create a new folder in `src/content/people/` with the person's name
2. Add an `index.mdx` file with the following frontmatter:

```mdx
---
name: "Person Name"
avatar: ./person-name.jpg
job: "Job Title"
clubRole: "Role in Organization"
isBoardMember: true
socials:
  - type: "linkedin"
    href: "https://linkedin.com/in/username"
  - type: "github"
    href: "https://github.com/username"
---

Person description and bio content here.
```

3. Add a profile image in the same folder
4. The person will automatically appear on the team page

### Available Social Media Types

- `x` - X (Twitter)
- `linkedin` - LinkedIn
- `instagram` - Instagram
- `github` - GitHub
- `bluesky` - Bluesky
- `facebook` - Facebook

## Customization

### Colors and Theme

The project uses CSS custom properties for theming. Edit `src/styles/globals.css` to customize:

- Primary colors
- Background colors
- Text colors
- Border colors
- Accent colors

### Fonts

The project includes:

- **Inter**: Primary sans-serif font
- **Tomorrow**: Heading font

Fonts are loaded from Google Fonts and can be customized in the Layout component.

## Technologies Used

- [Astro](https://astro.build/) - Static site generator
- [React](https://reactjs.org/) - UI library
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Accessible components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
