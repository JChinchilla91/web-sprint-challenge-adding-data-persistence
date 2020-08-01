exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: 'Turn the TV upside down', description: 'Self explanatory', completed: false },
    { project_name: 'Sell shoes at the FootLocker(?)', description: 'Blue collar type stuff', completed: false },
    { project_name: 'Rap for about 17 years', completed: false }
  ])
}