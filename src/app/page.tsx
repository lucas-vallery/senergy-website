'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.replace(window.location.pathname.replace(/\/$/, '') + '/fr/');
  }, []);

  return null;
}