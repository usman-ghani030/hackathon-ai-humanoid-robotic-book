import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

function NavbarLogo() {
  const themeConfig = useThemeConfig();
  const {navbar: {title, logo = {}}} = themeConfig;
  const logoLink = useBaseUrl(logo.href || '/');
  const baseLogoStyle = {
    height: '32px',
    width: '32px',
    marginRight: '16px',
  };
  const logoStyle = {...baseLogoStyle, ...logo.style};

  return (
    <Link to={logoLink} className="navbar__brand">
      {logo.src && (
        <img src={useBaseUrl(logo.src)} alt={logo.alt} style={logoStyle} />
      )}
      {title != null && (
        <strong
          className={clsx('navbar__title', {
            [logo.className]: logo.className,
          })}>
          {title}
        </strong>
      )}
    </Link>
  );
}

export default function CustomNavbar() {
  return (
    <nav class="navbar navbar--primary" aria-label="Main navigation">
      <div class="container">
        <div class="navbar__inner">
          <div class="navbar__items">
            <NavbarLogo />
            <div role="presentation" class="navbar__item navbar__link">
              <Link to="/docs/module-1-ros2/ros2-nervous-system">Docs</Link>
            </div>
            <div role="presentation" class="navbar__item navbar__link">
              <a href="https://github.com/spec-driven-dev/hackathon-book" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div class="navbar__items navbar__items--right">
            <div class="navbar__item">
              <div class="clean-btn navbar__toggle clean-btn--navbar" role="button" tabindex="0" aria-label="Toggle navigation bar">
                <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                  <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}