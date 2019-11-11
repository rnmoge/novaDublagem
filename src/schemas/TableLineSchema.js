export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      line: {type: 'int', indexed: true},
      description: 'string',
      update_at: 'date',
    },
  };
}
