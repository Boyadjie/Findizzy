module.exports = {
  async getUser(ctx) {
    const regex = new RegExp("\/+api+\/+scan+\/");
    const requestUrl = ctx.request.url;
    const petId = requestUrl.replace(regex, "");

    const entry = await strapi.db.query('plugin::users-permissions.user').findOne({
      select: ["email"],
      where: {
        pets: {
          id : petId
        } 
      },
    });

    ctx.body = entry;
  },
};