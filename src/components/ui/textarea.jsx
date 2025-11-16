// Simple Textarea component using plain HTML and CSS

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`textarea ${className}`}
      {...props}
    />
  );
}
