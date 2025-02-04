type NavLink = {
    label: string;
    href: string;
}

export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/favorites', label: 'Havorites' },
    { href: '/bookings', label: 'Bookings' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/rentals/create', label: 'Create Rental' },
    { href: '/rentals', label: 'My Rental' },
    { href: '/profile', label: 'Profile' },
];
