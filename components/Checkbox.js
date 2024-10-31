export default function Checkbox({ id, title, onChange }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={id}
        onChange={(event) => onChange(event.target.checked)}
      />
      {title && (
        <label className="form-check-label" for={id}>
          {title}
        </label>
      )}
    </div>
  )
}
