const User = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true},
    username: 'string',
    permission: 'string',
    status: 'string',
    lastupdateapp: 'string',
    user_id: 'string',
    create_at: 'string',
    update_at: 'string',
  },
};
export default User;
