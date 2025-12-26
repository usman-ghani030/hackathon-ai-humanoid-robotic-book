import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {usePluralForm} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';

function useBreadcrumb() {
  const location = useLocation();
  const {translate} = require('@docusaurus/Translate');
  const plural = usePluralForm();

  // This is a simplified version - in a real implementation,
  // you'd parse the location.pathname to create the breadcrumb trail
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Docs', path: '/docs' },
    { label: 'Current Page', path: location.pathname, active: true }
  ];

  return { breadcrumbs };
}

export default function Breadcrumb() {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((item, index) => (
          <li key={index} className={`breadcrumb__item ${item.active ? 'breadcrumb__item--active' : ''}`}>
            {item.active ? (
              <span>{item.label}</span>
            ) : (
              <Link to={item.path} className="breadcrumb__link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}