import React from 'react';

import Container from 'react-bootstrap/Container';

import FirstPage from './FirstPage/FirstPage';
import FootPage from './FootPage/FootPage';
import Travel from './Travel/Travel';
import Read from './Read/Read';
import Navigation from './Navigation/Navigation';

const Life = () => {

	const refs = {
        'FirstPage': React.createRef(),
        'Travel': React.createRef(),
        'Read': React.createRef()
	}

    return (
		<>
            <Navigation refProp={refs} />
			<Container fluid>
				<div ref={refs['FirstPage']}><FirstPage /></div>
				<div ref={refs['Travel']}><Travel /></div>
				<div ref={refs['Read']}><Read /></div>
				<FootPage />
			</Container>
		</>
    )
};

export default Life;