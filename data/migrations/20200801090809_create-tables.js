
exports.up = function(knex) {
  return knex.schema.
  createTable('projects', tbl => {
      tbl.increments('id')
      tbl.string('project_name', 128).notNullable();
      tbl.string('description', 128)
      tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl => {
      tbl.increments('id')
      tbl.string('resource_name', 128).notNullable().unique();
      tbl.string('description', 128)
  })
  .createTable('tasks', tbl => {
      tbl.increments('id')
      tbl.string('description').notNullable();
      tbl.string('notes')
      tbl.boolean('completed').notNullable().defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('project_resources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
