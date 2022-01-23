exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          name: 'Verbena bonariens',
          price: 78,
          color: 'white',
          size: 's',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 2,
          name: 'Lilium “Pearl White”',
          price: 88,
          color: 'purple',
          size: 'sm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 3,
          name: 'Hesperantha c.',
          price: 60,
          color: 'yellow',
          size: 'm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 4,
          name: 'Verbena bonariens',
          price: 52,
          color: 'red',
          size: 'l',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 5,
          name: 'Ming Tree',
          price: 255,
          color: 'blue',
          size: 'xl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 6,
          name: 'Anthurium “Red”',
          price: 62,
          color: 'white',
          size: 'xxl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 7,
          name: 'Aeschynanthus',
          price: '125',
          color: 'white',
          size: 's',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 8,
          name: 'Miltonia “Sunset”',
          price: 78,
          color: 'blue',
          size: 'm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 9,
          name: 'Geranium palustre',
          price: '78',
          color: 'green',
          size: 'xl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 10,
          name: 'Howea forsteriana',
          price: 300,
          color: 'green',
          size: 'xl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 11,
          name: 'Rosa “Pink”',
          price: 99,
          color: 'pink',
          size: 'xxl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 12,
          name: 'Dahlia “Pink”',
          price: 115,
          color: 'pink',
          size: 's',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 13,
          name: 'Rosa “Sweer honey”',
          price: 99,
          color: 'red',
          size: 'sm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 14,
          name: 'Hesperantha c.',
          price: 78,
          color: 'green',
          size: 'm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 15,
          name: 'Daphne',
          price: 69,
          color: 'orange',
          size: 'l',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 16,
          name: 'Anthurium “Pink”',
          price: 58,
          color: 'yellow',
          size: 'sm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: false,
          discount_percent: 0,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 17,
          name: 'Helianthemum',
          price: 78,
          color: 'purple',
          size: 'l',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 20,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 18,
          name: 'Cistus purpureus',
          price: 70,
          color: 'white',
          size: 's',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 30,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 19,
          name: 'Helenium “Waltraut”',
          price: 80,
          color: 'blue',
          size: 'sm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 20,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 20,
          name: 'Crocosmia “Mistral”',
          price: 85,
          color: 'orange',
          size: 'xxl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 20,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 21,
          name: 'Fuchsia',
          price: 90,
          color: 'white',
          size: 's',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 35,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 22,
          name: 'Solanum crispum',
          price: 82,
          color: 'blue',
          size: 'sm',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 45,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 23,
          name: 'Hydrangea',
          price: 60,
          color: 'green',
          size: 'xl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 50,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 24,
          name: 'Apple Blossom',
          price: 79,
          color: 'yellow',
          size: 'xxl',
          is_available: true,
          stock_amount: 100,
          is_on_discount: true,
          discount_percent: 25,
          picture: 'https://via.placeholder.com/500x500',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    })
    .catch((error) => {
      console.error(error);
    });
};
