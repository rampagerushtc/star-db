import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({history}) => {
    return (
        <StarshipList
            onItemSelected={(itemId) => {
                const newPath = `/starships/${itemId}`;
                history.push(newPath);
             }} />
    );
}

export default withRouter(StarshipsPage);