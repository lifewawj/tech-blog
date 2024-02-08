const sequelize = require('../config/connection');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    process.exit(0);
};

seedDatabase();