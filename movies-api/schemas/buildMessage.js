
function buildMessage(entity, action){
  switch (action) {
    case 'create':
      return `${entity} ${action}d`;
    case 'list':
      return `${entity}s ${action}ed`;
    case 'retrieve':
      return `${entity} ${action}d`;
    default:
      return null
  }
}

module.exports = buildMessage;