import styled from 'styled-components'

const fieldMargin = '7%'
const fieldShort = `calc((100% - ( ${fieldMargin} * 2 )) / 3)`
const fieldLong = `calc((${fieldShort} * 2) + ${fieldMargin})`

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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;

  ${p => p.width === 'short' && `
    width: ${fieldShort};
  `}

  ${p => p.width === 'long' && `
    width: ${fieldLong};
  `}

  &:not(:last-child) {
    margin-right: ${fieldMargin};
  }
`

export const Field = ({ id, label, width, type }) => (
  <Wrapper width={width}>
    <Input className="field__input" type={type} id={id} name={id} />
    <Label className="field__label" htmlFor={id}>{label}</Label>
  </Wrapper>
)
