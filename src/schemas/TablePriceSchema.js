export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      table_price: {type: 'int', indexed: true},
      comission_1: 'double',
      comission_2: 'double',
      comission_3: 'double',
      update_at: 'date',
    },
  };
}
