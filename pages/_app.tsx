import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CitiesPage from './cities';
import EarthquakesPage from './earthquakes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [activeMenuItem, setActiveMenuItem] = useState('cities');

  const router = useRouter();

  useEffect(() => {
    router.push('/cities');
  }, []);

  const handleMenuClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Earthquake Tracker</div>
        <nav className="menu">
          <div
            className={`menu-item ${activeMenuItem === 'cities' ? 'active' : ''}`}
            onClick={() => handleMenuClick('cities')}
          >
            Cities
          </div>
          <div
            className={`menu-item ${activeMenuItem === 'earthquakes' ? 'active' : ''}`}
            onClick={() => handleMenuClick('earthquakes')}
          >
            Earthquakes
          </div>
        </nav>
      </header>
      {activeMenuItem === 'cities' ? <CitiesPage /> : <EarthquakesPage />}
    </div>
  );
}

export default MyApp;
