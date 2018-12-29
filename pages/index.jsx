import Page from '../layouts/main';

export default () => (
    <Page>
        <div className="page page--character">
            <section className="info">
                <h1>Character</h1>
                <form className="form" action="" id="character-form">
                    <div className="form__child field">
                        <input className="field__input" type="text" id="character-name" name="character-name"/>
                        <label className="field__label" htmlFor="character-name">Name</label>
                    </div>
                    <div className="form__child field">
                        <input className="field__input" type="text" id="character-race" name="character-race"/>
                        <label className="field__label" htmlFor="character-race">Race</label>
                    </div>
                    <div className="form__child field-group">
                        <div className="field">
                            <input className="field__input" type="text" id="character-level" name="character-level"/>
                            <label className="field__label" htmlFor="character-level">Level</label>
                        </div>
                        <div className="field">
                            <input className="field__input" type="text" id="character-alignment" name="character-alignment"/>
                            <label className="field__label" htmlFor="character-alignment">Alignment</label>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </Page>
)
