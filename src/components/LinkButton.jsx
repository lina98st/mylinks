export default function LinkButton({ label, href }) {
  return (
    <div className="button">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  )
}
