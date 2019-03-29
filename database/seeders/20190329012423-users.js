"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    id: 2,
                    name: "test",
                    age: 18,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    }
};
