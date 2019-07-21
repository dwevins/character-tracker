import { Field } from '../'

export const FieldGroup = ({ altLayout, fields }) => (
  <div className="field-group field-group--alt form__child">
    {fields.map((field, key) => (
      <Field key={key} {...field} />
    ))}
  </div>
)
