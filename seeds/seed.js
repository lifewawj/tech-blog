const sequelize = require('../config/connection');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');


    console.log('\n----- USER SEEDED -----\n');


    console.log('\n----- POST SEEDED -----\n')

    
    process.exit(0);
};

seedDatabase();