import React from 'react';

type MyButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function MyButton({ label, onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {label}
    </button>
  );
}