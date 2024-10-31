export default function RadioButton({ name, items, onChange }) {
  return (
    <div className="d-flex gap-4">
      {items.map((item) => (
        <div className="form-check" key={item.id}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={item.id}
            onChange={(event) => onChange(event.target.id)}
          />
          <label
            className="form-check-label"
            htmlFor={item.id}
          >
            {item.title}
          </label>
        </div>
      ))}
    </div>
  )
}