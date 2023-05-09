// pages/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto py-6">
      <header className="flex items-center justify-between mb-6">
        <div className="text-3xl font-bold">Earthquake Tracker</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-lg font-semibold">
              <a href="/cities">Cities</a>
            </li>
            <li className="text-lg font-semibold">
              <a href="/earthquakes">Earthquakes</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
