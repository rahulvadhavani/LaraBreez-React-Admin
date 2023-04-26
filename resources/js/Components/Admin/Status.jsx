import React from 'react';
import PropTypes from 'prop-types';

function Status({ color, children }) {
  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-${color}-100 dark:bg-gray-800`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full bg-${color}-500`}
      />
      <h2
        className={`text-sm font-normal text-${color}-500`}
      >
        {children}
      </h2>
    </div>
  );
}

Status.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Status;
