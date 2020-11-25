import React from 'react';

const TechnologyLink = (url, techName) => {
  return (
    <a href={url}
    target='_blank'
    rel='noopener noreferrer'
    className='technology-link'>{techName}</a>
  );
}

export default TechnologyLink;