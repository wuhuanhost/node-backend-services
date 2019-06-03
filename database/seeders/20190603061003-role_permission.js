"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"role_permission",
			[
				{
					id: 1,
					role_id: 1,
					module_id: 1,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 2,
					role_id: 1,
					module_id: 2,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 3,
					role_id: 1,
					module_id: 3,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 4,
					role_id: 1,
					module_id: 4,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 5,
					role_id: 1,
					module_id: 5,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 6,
					role_id: 2,
					module_id: 1,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 7,
					role_id: 2,
					module_id: 2,
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
