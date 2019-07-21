import { Section } from '../../elements'
import { FieldGroups } from './data'
import { FieldGroup } from '../../components'

export const Character = () => (
  <Section>
    <h1>Character</h1>
    <form className="form" action="" id="character-form">
      {FieldGroups.map((group, key) => (
        <FieldGroup key={key} {...group} />
      ))}
    </form>
  </Section>
)
