
exports.seed = function(knex) {

      return knex('guests').insert([
        { user_id: 2, event_id: 3, attending: true },
        { user_id: 3, event_id: 1, attending: true },
        { user_id: 1, event_id: 2, attending: true },
      ]);
};
