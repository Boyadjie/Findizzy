module.exports = {
  async sendMail(ctx) {
    const reqData = ctx.request.body.data;
    const mailTo = reqData.to;
    const petLocation = reqData.location;

    const entry = await strapi.plugins['email'].services.email.send({
      to: mailTo,
      from: 'strapi.pro@gmail.com',
      replyTo: 'strapi.pro@gmail.com',
      subject: 'Votre annimal à été trouvé !',
      text: `Votre animal vient d'être localiser aux coordonnées suivantes : ${petLocation} !`,
      html: `<h1>Votre animal vient d'être localiser aux coordonnées suivantes : ${petLocation} !<h1/>`,
    });

    ctx.body = entry;
  },
};