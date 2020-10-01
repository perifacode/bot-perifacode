module.exports = (message) => {
  // creates an empty list
  let serverRoles = [];

  // gets all roles from a messages' guild;
  message.guild.roles.fetch()
    .then(roles => {
      serverRoles.push(roles);
    })
    .catch(e => console.error(e));

  return serverRoles;
}