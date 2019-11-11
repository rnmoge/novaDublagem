export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      line: {type: 'int', indexed: true},
      matrix: {type: 'int', indexed: true},
      color: {type: 'int', indexed: true},
      update_at: 'date',
    },
  };
}
