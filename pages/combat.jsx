import Page from '../layouts/main';

export default () => (
    <Page>
        <div className="page page--combat">
            <section className="info">
                <h1>Combat</h1>
                <form className="form" action="" id="combat-form">
                    <div className="field-group form__child">
                        <div className="field">
                            <input className="field__input" type="text" id="combat-base-attack" name="combat-base-attack" />
                            <label className="field__label" htmlFor="combat-base-attack">Base Attack Bonus</label>
                        </div>
                        <div className="field-group form__child">
                            <div className="field">
                                <input className="field__input" type="text" id="combat-cmb" name="combat-cmb" />
                                <label className="field__label" htmlFor="combat-cmb">CMB</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="combat-cmd" name="combat-cmd" />
                                <label className="field__label" htmlFor="combat-cmd">CMD</label>
                            </div>
                        </div>
                    </div>
                    <div className="field-group form__child">
                        <div className="field-group form__child">
                            <div className="field">
                                <input className="field__input" type="text" id="combat-initiative" name="combat-initiative" />
                                <label className="field__label" htmlFor="combat-initiative">Initiative</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="combat-speed" name="combat-speed" />
                                <label className="field__label" htmlFor="combat-speed">Speed</label>
                            </div>
                        </div>
                    </div>
                    <div className="field-group form__child">
                        <div className="field-group form__child">
                            <div className="field">
                                <input className="field__input" type="text" id="combat-health-total" name="combat-health-total" />
                                <label className="field__label" htmlFor="combat-health-total">Total HP</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="combat-health-temp" name="combat-health-temp" />
                                <label className="field__label" htmlFor="combat-health-temp">Temporary HP</label>
                            </div>
                        </div>
                    </div>
                    <div className="field-group form__child">
                        <div className="field">
                            <input className="field__input" type="text" id="combat-armor-class" name="combat-armor-class" />
                            <label className="field__label" htmlFor="combat-armor-class">Armor Class</label>
                        </div>
                        <div className="field">
                            <input className="field__input" type="text" id="combat-flat" name="combat-flat" />
                            <label className="field__label" htmlFor="combat-flat">Flat</label>
                        </div>
                        <div className="field">
                            <input className="field__input" type="text" id="combat-touch" name="combat-touch" />
                            <label className="field__label" htmlFor="combat-touch">Touch</label>
                        </div>
                    </div>
                    <div className="field-group form__child">
                        <div className="field field--short">
                            <input className="field__input" type="text" id="combat-dex-save" name="combat-dex-save" />
                            <label className="field__label" htmlFor="combat-dex-save">Dex Save</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="combat-con-save" name="combat-con-save" />
                            <label className="field__label" htmlFor="combat-con-save">Con Save</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="text" id="combat-wis-save" name="combat-wis-save" />
                            <label className="field__label" htmlFor="combat-wis-save">Wis Save</label>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </Page>
)
