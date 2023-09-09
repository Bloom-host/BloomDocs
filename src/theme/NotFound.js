import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
export default function NotFound() {
    const history = useHistory();
    useEffect(() => history.push('/not-found'), []);
    return (<></>);
}
