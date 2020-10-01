module.exports = (message) => {
  const serverRoles = [];

  // Lógica necessária para buscar todos os roles
  // em um servidor.
  message.guild.roles.fetch()
    .then((roles) => {
      serverRoles.push(roles);
    })
    .catch((e) => console.error(e));

  return serverRoles;
};
