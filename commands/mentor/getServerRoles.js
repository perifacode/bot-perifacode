module.exports = (message) => {
  let serverRoles = [];
  message.guild.roles.fetch()
    .then(roles => {
      serverRoles.push(roles);
    })
    .catch(e => console.error(e)); 
  return serverRoles;
}