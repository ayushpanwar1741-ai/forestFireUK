// Simple Badge component using plain HTML and CSS

export function Badge({ children, className = '', ...props }) {
  return (
    <span className={`badge ${className}`} {...props}>
      {children}
    </span>
  );
}
