export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      table_price: {type: 'int', indexed: true},
      comission_1:'int',
      comission_2:'int',
      comission_3:'int',
      update_at:'date',
    },
  };
}
