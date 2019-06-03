"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"admin_role",
			[
				{
					id: 1,
					admin_id: 1,
					role_id: 1,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 2,
					admin_id: 2,
					role_id: 2,
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
