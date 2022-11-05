const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dzegvu64c',
    api_key: '611673158461299',
    api_secret:'5VUuGfQ4P0kYHzkTr_-QxXPX670'
});

module.exports = { cloudinary };