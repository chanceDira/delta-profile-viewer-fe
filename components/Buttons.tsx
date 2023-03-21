import React from 'react'

export const Primary = ({ name }: any) => {
    return (
        <button className="text-white bg-secondary-600 px-6 py-2 rounded text-lg">
        {name}
      </button>
    );
  };