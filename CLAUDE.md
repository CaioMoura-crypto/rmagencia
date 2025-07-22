# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack for faster builds
- `npm run build` - Build the production application  
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run typegen` - Generate Sanity schema types (extract schema and generate TypeScript types)

## Project Architecture

This is a Next.js 15 application with Sanity CMS integration using the App Router pattern.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **Sanity CMS** for content management with studio at `/studio`
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Radix UI** for accessible components
- **Motion** for animations

### Project Structure

```
src/
├── app/
│   ├── (frontend)/        # Main frontend routes
│   └── studio/           # Sanity Studio at /studio
├── components/
│   ├── ui/              # Reusable UI components (Radix-based)
│   └── [sections]       # Page-specific components (hero, services, etc.)
├── sanity/
│   ├── lib/             # Sanity client, queries, and utilities
│   ├── schemaTypes/     # Content schema definitions
│   └── types.ts         # Generated TypeScript types
└── lib/
    └── utils.ts         # Shared utilities
```

### Content Management

The application uses a centralized content model (`contentType`) that manages:
- Hero section (title, description, works array)
- Nossa História section (title, description, image)
- Services array (title, image)

Content is queried using the `CONTENT_QUERY` in `src/sanity/lib/queries.ts`.

### Type Generation Workflow

After making schema changes in Sanity:
1. Run `npm run typegen` to update TypeScript types
2. This extracts the schema and generates types in `src/sanity/types.ts`

### Component Architecture

- UI components follow Radix UI patterns with Tailwind styling
- Theme switching is implemented with `next-themes`
- Components use motion animations for enhanced UX
- Styling uses Tailwind v4 with custom utilities

### Development Notes

- The Sanity Studio is accessible at `/studio` in development
- Hot reloading is optimized with Turbopack
- ESLint is configured with Next.js and TypeScript rules
- The application uses styled-components alongside Tailwind CSS