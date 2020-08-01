exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        { description: 'Do this and that', project_id: 1},
        { description: 'Get a job', project_id: 2},
        { description: 'It\'s whatever, dude', project_id: 1}
    ])
}