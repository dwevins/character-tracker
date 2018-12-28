import "../styles/styles.scss"

export default () => (
    <div className="page">
        <h1>Character</h1>
        <section className="info">
            <form action="" id="character-form">
                <div className="field">
                    <input type="text" id="character-name" name="character-name"/>
                    <label htmlFor="character-name">Name</label>
                </div>
                <div className="field">
                    <input type="text" id="character-race" name="character-race"/>
                    <label htmlFor="character-race">Race</label>
                </div>
                <div className="field-group">
                    <div className="field">
                        <input type="text" id="character-level" name="character-level"/>
                        <label htmlFor="character-level">Level</label>
                    </div>
                    <div className="field">
                        <input type="text" id="character-alignment" name="character-alignment"/>
                        <label htmlFor="character-alignment">Alignment</label>
                    </div>
                </div>
            </form>
        </section>
    </div>
)
