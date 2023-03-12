const path = require('path');

module.exports.getConfig = () => {
    const config = {
        'MODE': 'Development',
        'PORT': process.env.PORT || 6000,
        'MONGO_URL': process.env.MONGO_URL,
        'UPLOAD_PATH': path.resolve(`${__dirname}/../uploads`),
        'JWT_SECRET': process.env.JWT_SECRET || 'sHD)@dssd12A',
        'JWT_EXPIRATION_TIME': process.env.JWT_EXPIRATION_TIME || 172800
    }

    // Modify the production
    if(process.env.NODE_ENV === 'production') {
        config.MODE = 'Production'
    }

    return config
}