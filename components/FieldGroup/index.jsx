import styled from 'styled-components'
import { Field } from '../'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
`

export const FieldGroup = ({ altLayout, fields }) => (
  <Wrapper>
    {fields.map((field, key) => (
      <Field key={key} {...field} />
    ))}
  </Wrapper>
)
