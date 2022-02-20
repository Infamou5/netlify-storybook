exports.seed = function (knex) {
  
  return knex('favorites').del()
    .then(()=> {
  knex('orders').del()
      .then(()=> 
  // Deletes ALL existing entries
  knex('users')
    .del()
    .then(()=> 
      // Inserts seed entries
      knex('users').insert([
        {
          id: 1,
          full_name: 'Test User1',
          email: 'testuser1@testmail.com',
          address: 'test address 1',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 2,
          full_name: 'Test User2',
          email: 'testuser2@testmail.com',
          address: 'test address 2',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 3,
          full_name: 'Test User3',
          email: 'testuser3@testmail.com',
          address: 'test address 3',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 4,
          full_name: 'Test User4',
          email: 'testuser4@testmail.com',
          address: 'test address 4',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 5,
          full_name: 'Test User5',
          email: 'testuser5@testmail.com',
          address: 'test address 5',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 6,
          full_name: 'Test User6',
          email: 'testuser6@testmail.com',
          address: 'test address 6',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 7,
          full_name: 'Test User7',
          email: 'testuser7@testmail.com',
          address: 'test address 7',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 8,
          full_name: 'Test User8',
          email: 'testuser8@testmail.com',
          address: 'test address 8',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 9,
          full_name: 'Test User9',
          email: 'testuser9@testmail.com',
          address: 'test address 9',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 10,
          full_name: 'Test User10',
          email: 'testuser10@testmail.com',
          address: 'test address 10',
          zipcode: '1234',
          city: 'Test City',
          country: 'Test Country',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ])
    )
  )
})
    .catch((error) => {
      console.error(error);
    });
};
