export default function FormGroup({
  title,
  description,
  required,
  children,
  className
}) {
  return (
    <div className={`${className}`}>
      <h4 className="text-secondary">{title} {required && "*"}</h4>
      {description && <p>{description}</p>}

      <div class="form-group">
        {children}
      </div>
    </div>
  )
}