const knex = require('../../config/db');
const moment = require('moment-timezone');
const HttpError = require('../lib/utils/http-error');

const createUser = async (body) => {
  await knex('users').insert({
    uid: body.uid,
    full_name: body.full_name,
    email: body.email,
    mobile: body.mobile,
    address: body.address,
    zipcode: body.zipcode,
    city: body.city,
    country: body.country,
    created_at: moment(Date.now()).format(),
  });
  return {
    successful: true,
  };
};
const getUserById = async (uid) => {
  try {
    const user = await knex('users')
      .select('uid', 'full_name', 'email', 'mobile', 'address')
      .where({ uid });
    if (user.length === 0) {
      throw new HttpError(`Specified ID does not exist`, 404);
    }
    return user;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('Unexpected error', 500);
  }
};
const getUserFavorites = async (user_id) => {
  if (!user_id) {
    throw new HttpError('User id should be a number', 400);
  }
  try {
    const favorites = await knex('favorites')
      .join('products', 'products.id', 'product_id')
      .select('products.*')
      .where({ user_id })
      .distinct();
    if (favorites.length === 0) {
      throw new HttpError(
        `The favorite products for user ${user_id} is not found`,
        404,
      );
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};

const updateUser = async (userId, updatedUser) => {
  if (isNaN(userId) || !userId) {
    throw new HttpError('User Id should be a number', 400);
  }

  try {
    const updatedAt = moment().format();
    const updatedRows = await knex('users').where({ id: userId }).update({
      full_name: updatedUser.full_name,
      email: updatedUser.email,
      address: updatedUser.address,
      zipcode: updatedUser.zipcode,
      city: updatedUser.city,
      country: updatedUser.country,
      mobile: updatedUser.mobile,
      updated_at: updatedAt,
    });

    const NO_ROWS_UPDATED = 0;
    if (updatedRows === NO_ROWS_UPDATED) {
      throw new HttpError(`User with ID: ${userId} not found`, 404);
    }
    return { message: `User with ID: ${userId} updated at ${updatedAt}` };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
  getUserFavorites,
  getUserById,
  updateUser,
};
