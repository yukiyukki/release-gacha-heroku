
exports.up = async function(knex) {
  return await knex.schema.createTable('dice_users', (t) => {
    t.increments('id').primary();
    t.string('name');
    t.timestamps();
  });
};

exports.down = async function(knex) {
  return await knex.schema.dropTable('dice_users');
};
