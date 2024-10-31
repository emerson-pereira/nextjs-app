export default function Dropdown({ title, items, onClick }) {
  return (
    <div className="dropdown">
      <button
        className="
          btn
          btn-outline-secondary
          dropdown-toggle
          border-secondary-subtle
        "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title || "Selecionar"}
      </button>
      <ul className="dropdown-menu">
        {items.map(item => (
          <li key={item.title}>
            <a
              className="dropdown-item"
              href={item.link}
              onClick={onClick}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}