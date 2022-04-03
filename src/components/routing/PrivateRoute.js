import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: {Component, ...rest},auth:{isAuthenticated,loading} }) => {
    

    return (
        <Route { ...rest } render={props => !isAuthenticated && !loading ? (
            <Redirect to='login' />
        ) : (
            <Component {...props} />
        )} />
    )
};

const mapStateProps = state => ({
    auth: state.auth
})

export default connect(mapStateProps) (PrivateRoute);
