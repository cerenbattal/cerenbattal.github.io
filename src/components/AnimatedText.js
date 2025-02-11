export function AnimatedText({ text, className = '' }) {
  return (
    <span className={`inline-block transition-colors duration-200`}>
      {text}
    </span>
  );
} 