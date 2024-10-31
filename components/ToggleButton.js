export default function ToggleButton({ title, id, onChange }) {
  return (
    <div className="form-check-reverse form-switch d-flex gap-2">
      <label
        className="form-check-label"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        onChange={onChange}
      />
    </div>
  )
}