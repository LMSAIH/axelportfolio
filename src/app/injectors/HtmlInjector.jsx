import React from 'react';

const HtmlInjector = ({ htmlContent, className }) => {
  return (
    <div>
      <div className={className} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default HtmlInjector;
