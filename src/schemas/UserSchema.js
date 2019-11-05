export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      user: {type: 'int', indexed: true},
      password: 'string',
      permission: 'int',
      status: 'bool',
      lastupdateapp: 'date',
      user_id: 'int',
      create_at: 'date',
      update_at: 'date',
    },
  };
}
