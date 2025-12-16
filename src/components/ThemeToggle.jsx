export default function ThemeToggle({ onToggle }) {
  return (
    <div className="button-darkmode">
      <button type="button" onClick={onToggle}>
        Dark Mode
      </button>
    </div>
  )
}
