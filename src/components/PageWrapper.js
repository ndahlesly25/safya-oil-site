import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <main className="page-wrapper">
      {children}
    </main>
  );
};

export default PageWrapper;
