const roles = require('../../roles');

module.exports = (reactionsList, guildMember, rolesList) => {
  // gets all roles from guildMember
  // _roles is a built-in property
  const guildMemberRoles = guildMember.roles._roles;

  reactionsList.forEach(reaction => {
    // gets a role from roles const 
    const role = roles.filter(role => role.emoji === reaction)[0];
    
    // finds corresponding guildRole
    const guildRole = rolesList[0].cache.find(r => r.name.toLowerCase() === role.roleName);
    if(guildMemberRoles.find(role => role.name === guildRole.name) && reaction !== "✅"){
      // removes already own roles 
      guildMember.roles.remove(guildRole.id)
    } else {
      // adds a new role
      guildMember.roles.add(guildRole.id);
    }
  })
}