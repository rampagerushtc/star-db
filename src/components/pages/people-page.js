import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
const { id } = match.params;
    return (
        <Row
            left={<PersonList onItemSelected={(itemId) => history.push(itemId)} />}
            right={<PersonDetails itemId={id} />}
        />
    );
}

export default withRouter(PeoplePage);