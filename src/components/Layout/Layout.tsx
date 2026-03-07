import type { ReactNode } from 'react';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 100px)' }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
