import { faAngleDown, faCoins } from '@fortawesome/free-solid-svg-icons';
import useInput from '../../hooks/useInput';
import Input from '../input';
import profilePicture from '../../assets/profil.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';
import { Link } from 'react-router-dom';

export default function Header() {
  const searchInput = useInput('');

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // Placeholder for user authentication status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function search() {
    alert('Searching for: ' + searchInput.value);
  }

  function login() {
    // Placeholder for login functionality
    setIsUserLoggedIn(true);
  }

  function logout() {
    // Placeholder for logout functionality
    setIsUserLoggedIn(false);
    setIsMenuOpen(false);
  }

  return (
    <header className="w-full h-20 flex justify-center items-center gap-15 fixed top-0 left-0 bg-white shadow-sm z-10 border-b border-neutral-200 px-6 py-3">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-linear-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white shadow-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 10L12 5L17 10M17 14L12 19L7 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5V12M12 12V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <span className="text-lg text-primary font-semibold">SkillSwap</span>
        </div>
      </Link>

      {/* Search Input */}
      <form className="w-full max-w-md" onSubmit={search}>
        <Input
          id="search-input"
          placeholder="Search for skills"
          value={searchInput.value as string}
          onChange={searchInput.onChange}
          isValid={searchInput.isValid}
        />
      </form>
      {/* Navigation Links */}
      <nav className="row gap-5">
        <Link to="/explore" className="link">
          {' '}
          Explore
        </Link>
        <Link to="/categories" className="link">
          Categories
        </Link>
        <Link to="/how-it-works" className="link">
          How it works
        </Link>
      </nav>
      {/* User Actions */}
      <div className="row gap-5">
        {isUserLoggedIn && (
          <>
            <div className=" bg-amber-300/20 px-4 py-2 rounded-full border border-amber-700">
              <div className="row gap-1">
                <FontAwesomeIcon icon={faCoins} className="text-amber-700" />
                <span className="text-amber-700">5 credits</span>
              </div>
            </div>
            <Link to="/chat" className="link text-lg rounded-lg p-2 hover:bg-neutral-200">
              <FontAwesomeIcon icon={faComments} />
            </Link>
          </>
        )}
        <button className="btn btn-secondary">Post a service</button>{' '}
      </div>

      {isUserLoggedIn ? (
        <div>
          <button
            className="row gap-2 rounded-full pr-2 hover:bg-neutral-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={profilePicture} alt="Profile" className="rounded-full object-cover size-12" />
            <FontAwesomeIcon icon={faAngleDown} className="text-xs text-neutral-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute bg-white border border-neutral-200 shadow-md rounded-md w-48">
              <Link to="/profile" className="link block px-4 py-2 hover:bg-neutral-100">
                Profile
              </Link>
              <Link to="/settings" className="link block px-4 py-2 hover:bg-neutral-100">
                Settings
              </Link>
              <span className="link block px-4 py-2 hover:bg-neutral-100" onClick={logout}>
                Logout
              </span>
            </div>
          )}
        </div>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </header>
  );
}
