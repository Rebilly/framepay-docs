const fs = require('fs');

// load local configuration
if (fs.existsSync('.env.local')) {
    require('dotenv')
        .config({
            path: './.env.local',
        });
}

// load default configuration
require('dotenv').config();
