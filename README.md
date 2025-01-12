# Next.js App Router with Module Federation Example

This is a micro-frontend architecture example using Next.js App Router and Module Federation. The project consists of multiple independent applications that work together as a unified system.

## Project Structure

```
nextjs-app-router-mf-guesty-example/
├── host/             # Host application (Main container)
├── admin/            # Admin application
├── user/             # User application
└── guest/            # Guest application
```

## Applications

- **Host**: The main container application that orchestrates the micro-frontends
- **Admin**: Administrative interface application
- **User**: User-facing application
- **Guest**: Guest/public-facing application

## Technical Stack

- Next.js 15.1.4
- React 19.0.0
- TypeScript
- Module Federation
- Tailwind CSS

## Prerequisites

Before running the applications, make sure you have the following installed:

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd nextjs-app-router-mf-guesty-example
```

2. Install dependencies for each application:
```bash
# Install dependencies for host
cd host
pnpm install

# Install dependencies for admin
cd ../admin
pnpm install

# Install dependencies for user
cd ../user
pnpm install

# Install dependencies for guest
cd ../guest
pnpm install
```

3. Start the development servers:

Each application can be started independently using:
```bash
pnpm dev
```

Default ports for each application:
- Host: http://localhost:3000
- Admin: http://localhost:3001
- User: http://localhost:3002
- Guest: http://localhost:3003

## Development Guidelines

1. Each application is a standalone Next.js project
2. The host application serves as the container and handles routing between micro-frontends
3. Use Module Federation for sharing components and logic between applications
4. Follow the established code style and TypeScript conventions

## Building for Production

To build any of the applications for production:

```bash
cd [application-directory]
pnpm build
```

## Contributing

1. Create a feature branch from main
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details
