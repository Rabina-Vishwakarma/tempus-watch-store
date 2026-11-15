
export default function SmartImg({ src, alt, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        console.error("Image failed to load:", src);
        e.currentTarget.onerror = null;
        e.currentTarget.src = `${import.meta.env.BASE_URL}fallback.svg`;
      }}
      {...rest}
    />
  );
}
