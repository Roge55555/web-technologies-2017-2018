import React from 'react';
import { Fragment } from 'react';
import SearchComponent from './SearchComponent';
import MainUserInfoComponent from './MainUserInfoComponent';
import BioComponent from './BioComponent';
import AdditionalUserInfoComponent from './AdditionalUserInfoComponent';
import OrganizationsComponent from './OrganizationsComponent';




class IndexComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <SearchComponent className="SearchComponent" />
                <MainUserInfoComponent />
                <BioComponent />
                <AdditionalUserInfoComponent />
                <OrganizationsComponent />

            </Fragment>
        );
    }
}
export default IndexComponent;