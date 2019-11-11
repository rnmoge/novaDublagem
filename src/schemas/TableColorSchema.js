export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      color: {type: 'int', indexed: true},
      description: 'string',
      feature: 'string',
      update_at: 'date',
    },
  };
}
