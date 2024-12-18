import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        className={\`block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-blue-500 focus:ring-blue-500 
          dark:bg-gray-700 dark:border-gray-600 dark:text-white \${className}\`}
        {...props}
      />
    </div>
  );
};