export default class UserSchema {
  static schema = {
    name: 'novaDublagem',
    primaryKey: 'id',
    propertipes: {
      id: {type: 'int', indexed: true},
      table_price_table_price: {type: 'int', indexed: true},
      line_matrix_line: {type: 'int', indexed: true},
      line_matrix_matrix: {type: 'int', indexed: true},
      group_size_gruop_size: {type: 'int', indexed: true},
      price_1:'int',
      price_2:'int',
      price_3:'int',
      update_at:'date',
    },
  };
}
