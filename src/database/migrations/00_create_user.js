const knex = require('knex');

exports.up = function(knex) {
   return knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('birthDate');
        table.string('gender');
        table.string('CPF');
        table.string('startDate');
        table.string('team');
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('user')
}
