import Page from '../layouts/main';

export default () => (
    <Page>
        <div className="page page--ability-scores">
            <section className="info">
                <h1>Scores</h1>
                <form className="form" action="" id="ability-score-form">
                    <div className="field-group form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="ability-str" name="ability-str" />
                            <label className="field__label" htmlFor="ability-str">Str</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-rank" name="ability-rank" />
                            <label className="field__label" htmlFor="ability-rank">Rank</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-temp" name="ability-temp" />
                            <label className="field__label" htmlFor="ability-temp">Temp</label>
                        </div>
                    </div>

                    <div className="field-group form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="ability-dex" name="ability-dex" />
                            <label className="field__label" htmlFor="ability-dex">Dex</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-rank" name="ability-rank" />
                            <label className="field__label" htmlFor="ability-rank">Rank</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-temp" name="ability-temp" />
                            <label className="field__label" htmlFor="ability-temp">Temp</label>
                        </div>
                    </div>

                    <div className="field-group form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="ability-con" name="ability-con" />
                            <label className="field__label" htmlFor="ability-con">Con</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-rank" name="ability-rank" />
                            <label className="field__label" htmlFor="ability-rank">Rank</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-temp" name="ability-temp" />
                            <label className="field__label" htmlFor="ability-temp">Temp</label>
                        </div>
                    </div>

                    <div className="field-group form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="ability-int" name="ability-int" />
                            <label className="field__label" htmlFor="ability-int">Int</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-rank" name="ability-rank" />
                            <label className="field__label" htmlFor="ability-rank">Rank</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-temp" name="ability-temp" />
                            <label className="field__label" htmlFor="ability-temp">Temp</label>
                        </div>
                    </div>

                    <div className="field-group form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="ability-wis" name="ability-wis" />
                            <label className="field__label" htmlFor="ability-wis">Wis</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-rank" name="ability-rank" />
                            <label className="field__label" htmlFor="ability-rank">Rank</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-temp" name="ability-temp" />
                            <label className="field__label" htmlFor="ability-temp">Temp</label>
                        </div>
                    </div>

                    <div className="field-group form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="ability-cha" name="ability-cha" />
                            <label className="field__label" htmlFor="ability-cha">Cha</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-rank" name="ability-rank" />
                            <label className="field__label" htmlFor="ability-rank">Rank</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="ability-temp" name="ability-temp" />
                            <label className="field__label" htmlFor="ability-temp">Temp</label>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </Page>
)