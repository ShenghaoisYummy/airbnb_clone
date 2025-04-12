# Home Away - Property Rental Platform

A modern, full-stack property rental platform built with Next.js, Prisma, PostgreSQL, and Clerk authentication. This application allows users to browse, list, book, and review rental properties.

## 🚀 Features

- **User Authentication**: Secure user authentication and profile management with Clerk
- **Property Listings**: Browse, search, and filter properties by category
- **Booking System**: Book properties with integrated Stripe payment
- **Reviews & Ratings**: Leave and read reviews for properties
- **Favorites**: Save properties to a favorites list
- **Admin Dashboard**: Manage properties and view booking statistics
- **Responsive Design**: Modern UI that works on all device sizes

## 📋 Project Checklist

### Setup & Configuration
- [x] Project setup with Next.js
- [x] Tailwind CSS configuration
- [x] Database connection with Prisma
- [x] Authentication with Clerk
- [x] Environment variables configuration

### Core Features Implementation
- [x] Homepage with property listings
- [ ] Property search and filtering
- [x] Property details page
- [x] User profile management
- [ ] Property booking system
- [ ] Payment integration with Stripe
- [ ] Review system for properties
- [ ] Favorites functionality

### Admin Features
- [ ] Admin dashboard
- [x] Property management for owners
- [ ] Bookings management
- [ ] Analytics and reporting

### Advanced Features
- [ ] Interactive maps for property locations
- [x] Image gallery for properties
- [ ] Real-time availability calendar
- [ ] Social sharing functionality
- [ ] Email notifications
- [x] Mobile responsiveness

### Testing & Deployment
- [ ] Unit and integration testing
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Deployment to production
- [ ] CI/CD pipeline setup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS with ShadcnUI components
- **State Management**: Zustand
- **Payment Processing**: Stripe
- **Maps**: Leaflet with React-Leaflet
- **Form Validation**: Zod
- **Charts**: Recharts

## 📝 Getting Started

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL database
- Clerk account
- Stripe account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd home-away
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=
   DIRECT_URL=
   
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   ```

4. Initialize the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 App Structure

- `/app`: Main application pages and routes
- `/components`: Reusable UI components
- `/lib`: Utility functions and shared code
- `/prisma`: Database schema and migrations
- `/public`: Static assets

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
