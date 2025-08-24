# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production app (includes Prisma generate)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack & Architecture

This is a Next.js 14 Airbnb clone using:

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components, Lucide React icons
- **Authentication**: Clerk (with middleware protection)
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: Radix UI primitives via shadcn/ui
- **Theme**: next-themes for dark mode support
- **Validation**: Zod schemas

## Project Structure

```
app/
├── layout.tsx          # Root layout with Clerk + theme providers
├── page.tsx            # Homepage
├── profile/            # User profile pages
├── rentals/            # Property rental management
└── providers.tsx       # Theme and other providers

components/
├── ui/                 # shadcn/ui components
├── navbar/             # Navigation components
├── form/               # Reusable form inputs
├── home/               # Homepage components
└── properties/         # Property-related components

utils/
├── db.ts              # Prisma client singleton
├── actions.tsx        # Server actions
├── schemas.tsx        # Zod validation schemas
└── types.tsx          # TypeScript type definitions
```

## Database Schema

- **Profile**: User profiles linked to Clerk authentication
- **Property**: Rental properties with full details (name, description, amenities, etc.)
- Relationship: Profile (1) -> Properties (many)

## Authentication & Middleware

- Clerk handles authentication with middleware protection
- Protected routes: `/bookings`, `/checkout`, `/favorites`, `/profile`, `/rentals`, `/reviews`
- Security headers configured in middleware for production

## Key Patterns

- **Server Actions**: Located in `utils/actions.tsx` for database operations
- **Form Handling**: Custom form components in `components/form/` with Zod validation
- **Database Access**: Use the Prisma singleton from `utils/db.ts`
- **Component Structure**: Follows shadcn/ui conventions with Radix UI primitives
- **Styling**: Utility-first with Tailwind, custom components use `className` prop

## Environment Setup

Required environment variables (see `.env.local`):
- Database connection strings for Prisma
- Clerk authentication keys
- Other service API keys as configured

## Development Notes

- Prisma schema includes both Profile and Property models with proper relationships
- The app uses App Router with TypeScript strict mode
- All form inputs are centralized in `components/form/` for consistency
- Theme switching is handled via next-themes with system preference support