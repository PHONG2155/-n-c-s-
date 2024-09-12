'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { menus } from '../../../libs/menus';

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky');
      } else {
        elementId?.classList.remove('is-sticky');
      }
    });
  });

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState(true);
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id='navbar' className='navbar-area'>
        <div className='main-nav'>
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <Link href='/' className='navbar-brand'>
                <Image
                  src='/images/white-logo.png'
                  className='main-logo'
                  alt='logo'
                  width={149}
                  height={37}
                />
                <Image
                  src='/images/black-logo.png'
                  className='optional-logo'
                  alt='logo'
                  width={149}
                  height={37}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div className={classOne} id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>

                {/* others-options */}
                <div className='others-options'>
                  <Link href='/cart/' className='cart-btn'>
                    <i className='flaticon-commerce-and-shopping'></i>
                    <span>1</span>
                  </Link>

                  <div className='option-item'>
                    <i
                      className='search-btn flaticon-search'
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div>
                  {/* 
                  <Link href='/contact/' className='btn btn-primary'>
                    quan que
                  </Link> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? '' : 'search-overlay-active'
        }`}
      >
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>

            <div
              className='search-overlay-close'
              onClick={handleToggleSearchModal}
            >
              <span className='search-overlay-close-line'></span>
              <span className='search-overlay-close-line'></span>
            </div>

            <div className='search-overlay-form'>
              <form>
                <input
                  type='text'
                  className='input-search'
                  placeholder='Search here...'
                />
                <button type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
