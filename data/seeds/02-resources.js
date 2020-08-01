exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        { resource_name: 'Clean background', description: '...well, you know' },
        { resource_name: 'A van' },
        { resource_name: 'Tootsie Rolls' }
    ])
}