import styled from 'styled-components'
import { Field } from '../'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 2rem;
  width: 100%;

  &:last-child { margin-bottom: 0 }
`

export const FieldGroup = ({ fields }) => (
  <Wrapper>
    {fields.map((field, key) => (
      <Field key={key} {...field} />
    ))}
  </Wrapper>
)
