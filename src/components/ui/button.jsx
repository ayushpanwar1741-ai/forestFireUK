// Simple Button component using plain HTML and CSS

export function Button({ children, onClick, disabled, className = '', variant = 'primary', size = 'md', ...props }) {
  const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
