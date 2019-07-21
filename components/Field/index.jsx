import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
`

const Input = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 100%;

  &:focus { outline: none }
`

const Label = styled.label`
  width: 100%;
`

export const Field = ({ id, label, type }) => (
  <Wrapper>
    <Input className="field__input" type={type} id={id} name={id} />
    <Label className="field__label" htmlFor={id}>{label}</Label>
  </Wrapper>
)
