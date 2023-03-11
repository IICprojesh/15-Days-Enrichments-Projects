// const express = require('express');
// const path = require('path');
const {HttpError} = require('../system/helpers/HttpError');
const apiRoutes = require('../system/routes');

module.exports.setRoutes = (app) => {
    
    /*
        * Application's root route
    */
    app.get('/', (req, res) => {
        res.send('Welcome to the App!');
    })

    /*
        * API route.
        * All the api will start with "/api/[MODULE_ROUTE]"
    */
   app.use('/api',apiRoutes)


    /**
     * Serving Static files from uploads directory.
     * Currently Media module is uploading files into this directory.
     */
    // app.use( '/uploads', express.static( path.join( __dirname, '../uploads' ) ) );

    /**
     * If No route matches. Send user a 404 page
     */
    app.use( '/*', ( req, res ) => {
        const error = new Error( 'Requested path does not exist.' );

        error.statusCode = 404;
        res.status( error.statusCode ).json( new HttpError( error ) );
    } );
}
