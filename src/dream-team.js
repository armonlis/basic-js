

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members.filter(el => typeof(el) === 'string')
                                         .map(el => el.replace(/ /g, '').toUpperCase()[0])
                                         .sort()
                                         .join('') : false
}