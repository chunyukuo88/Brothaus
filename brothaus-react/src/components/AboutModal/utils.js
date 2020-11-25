import React from 'react';
import staticStrings from '../../StaticStrings.js';

export const StaticString = ({language, stringLabel}) => (
    <div className={language}>
        {staticStrings[stringLabel][language]}
    </div>
);
