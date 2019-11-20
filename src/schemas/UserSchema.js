const User = {
  name: 'novaDublagem',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int', indexed: true},
    username: 'string',
    password: 'string',
    permission: 'string',
    status: 'string',
    lastupdateapp: 'string',
    user_id: 'string',
    create_at: 'string',
    update_at: 'string',
    table_price: 'TablePrice[]',
  },
};
export default User;
