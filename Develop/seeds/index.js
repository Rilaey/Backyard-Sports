const seedSportsData = require("./sportSeeds");
const seedTeamData = require("./teamSeeds");
const seedUserData = require("./userSeeds");
const seedTeamMemberData = require("./teamMembers");
const sequelize = require('../config/connection');

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();
  console.log("*****USERS SEEDED*****");

  await seedSportsData();
  console.log("*****SPORTS SEEDED*****");

  await seedTeamData();
  console.log("*****TEAMS SEEDED*****");

  await seedTeamMemberData();
  console.log("*****TEAM MEMBERS SEEDED*****");
};

seedDataBase();