import React, {Component} from 'react';
import BuisenessLocations from './BuisenessLocations/BuisenessLocations';

import Auth from './../../services/auth.service'

export default class Home extends Component {

    state = {
        business_locations: null,
    }

    constructor(...args){
        super(...args);
        this.download_business_location();
    }

    download_business_location = () => {
        fetch(
            'http://localhost:1337/api/v1/facebook/business-locations',
            {
                method: 'POST',
                headers: {'Authorization': Auth.token}
            })
            .then(res => res.json())
            .then(res => {
                this.setState({business_locations: res});
                return res;
            });
    }

    render() {
        const {business_locations} = this.state;
        return (
            <div>
                {business_locations && <BuisenessLocations business_locations={business_locations}/>}
            </div>
        )
    }
}