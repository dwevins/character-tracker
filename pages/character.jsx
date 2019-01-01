/**
 * Character Page
 *
 * This component defines the Character page.
 * Information includes:
 *  - Name
 *  - Level
 *  - Race
 *  - Alignment
 *  - Class
 *  - Deity
 *  - Height
 *  - Weight
 *  - Size
 *  - Hair Color
 *  - Eye Color
 *  - Gender
 *
 * Only viewable when an authorized user is logged in.
 */

import { Fragment } from 'react';
import ProtectedPage from '../layouts/ProtectedPage';

export default class CharacterPage extends ProtectedPage {
    constructor(props) {
        super(props);
    }

    renderPageContent() {
        return(
            <Fragment>
                <h1>Character</h1>
                    <form className="form" action="" id="character-form">
                        <div className="field-group field-group--alt form__child">
                            <div className="field field--long">
                                <input className="field__input" type="text" id="character-name" name="character-name"/>
                                <label className="field__label" htmlFor="character-name">Name</label>
                            </div>
                            <div className="field field--short">
                                <input className="field__input" type="text" id="character-level" name="character-level"/>
                                <label className="field__label" htmlFor="character-level">Level</label>
                            </div>
                        </div>

                        <div className="field-group field-group--alt form__child">
                            <div className="field field--long">
                                <input className="field__input" type="text" id="character-race" name="character-race"/>
                                <label className="field__label" htmlFor="character-race">Race</label>
                            </div>
                            <div className="field field--short">
                                <input className="field__input" type="text" id="character-alignment" name="character-alignment"/>
                                <label className="field__label" htmlFor="character-alignment">Alignment</label>
                            </div>
                        </div>

                        <div className="field-group form__child">
                            <div className="field">
                                <input className="field__input" type="text" id="character-class" name="character-class"/>
                                <label className="field__label" htmlFor="character-class">Class</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="character-deity" name="character-deity"/>
                                <label className="field__label" htmlFor="character-deity">Deity</label>
                            </div>
                        </div>

                        <div className="form__child field-group">
                            <div className="field">
                                <input className="field__input" type="text" id="character-height" name="character-height"/>
                                <label className="field__label" htmlFor="character-height">Height</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="character-weight" name="character-weight"/>
                                <label className="field__label" htmlFor="character-weight">Weight</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="character-size" name="character-size"/>
                                <label className="field__label" htmlFor="character-size">Size</label>
                            </div>
                        </div>

                        <div className="form__child field-group">
                            <div className="field">
                                <input className="field__input" type="text" id="character-hair" name="character-hair"/>
                                <label className="field__label" htmlFor="character-hair">Hair</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="character-eye" name="character-eye"/>
                                <label className="field__label" htmlFor="character-eye">Eye</label>
                            </div>
                            <div className="field">
                                <input className="field__input" type="text" id="character-gender" name="character-gender"/>
                                <label className="field__label" htmlFor="character-gender">Gender</label>
                            </div>
                        </div>
                    </form>
            </Fragment>
        )
    }
}
