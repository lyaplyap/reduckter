export const MenuIcon = ({ size = 'm', color = 'currentColor' }) => {
    if (size === 'l') {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16H28" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8H28" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 24H28" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    }

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};