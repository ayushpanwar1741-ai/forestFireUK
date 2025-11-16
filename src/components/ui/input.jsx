// Simple Input component using plain HTML and CSS

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`input ${className}`}
      {...props}
    />
  );
}
