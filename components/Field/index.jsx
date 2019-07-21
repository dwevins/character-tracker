export const Field = ({ id, label, type }) => (
  <div className="field field--long">
    <input className="field__input" type={type} id={id} name={id} />
    <label className="field__label" htmlFor={id}>{label}</label>
  </div>
)
