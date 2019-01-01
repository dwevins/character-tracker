/**
 * Combat Page
 *
 * This component defines the Combat page.
 *
 * Only viewable when an authorized user is logged in.
 */

import ProtectedPage from '../layouts/ProtectedPage';

export default class CombatPage extends ProtectedPage {
    constructor(props) {
        super(props);
    }

    /**
     * TODO:
     * Add combat fields.
     */
    renderPageContent() {
        return (
            <h1>Combat</h1>
        )
    }
}
