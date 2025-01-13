# @guesty/shared

A shared component library for the Guesty micro-frontend application.

## Installation

Since this is a workspace package, you can add it to your project's dependencies:

```json
{
  "dependencies": {
    "@guesty/shared": "workspace:*"
  }
}
```

Then run:

```bash
pnpm install
```

## Available Components

### Header

A reusable header component that can be used across different applications.

```tsx
import { Header } from '@guesty/shared'

export default function Page() {
  return (
    <div>
      <Header />
      {/* Your content */}
    </div>
  )
}
```

### Footer

A reusable footer component with copyright information.

```tsx
import { Footer } from '@guesty/shared'

export default function Page() {
  return (
    <div>
      {/* Your content */}
      <Footer />
    </div>
  )
}
```

## Configuration

### Tailwind CSS

To ensure the shared components' styles are properly applied, update your app's `tailwind.config.ts` or `tailwind.config.js` to include the shared package's paths:

```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add these lines to scan shared package components
    "../shared/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../shared/dist/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [],
} satisfies Config;
```

This configuration ensures that Tailwind scans both the source and compiled files of the shared package for class names.

## Development

### Adding New Components

1. Create a new component in `src/components/[ComponentName]/index.tsx`
2. Export the component in `src/index.ts`
3. The package will automatically rebuild when you run `pnpm install`

### Building

The package automatically builds when:
- Running `pnpm install`
- Installing the package in a new workspace
- Pulling new changes from the repository

To manually build:

```bash
pnpm build
```

### Watch Mode

For development, you can run the package in watch mode:

```bash
pnpm dev
```

This will automatically rebuild the package when you make changes to the source files.
