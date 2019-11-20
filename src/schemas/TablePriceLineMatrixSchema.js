const TablePriceLineMatrix = {
  name: 'novaDublagem',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int'},
    table_price_table_price: 'TablePrice[]',
    line_matrix_line: 'TableLineMatrix[]',
    group_size_gruop_size: 'TableGroupSize[]',
    price_1: 'string',
    price_2: 'string',
    price_3: 'string',
    update_at: 'string',
  },
};

export default TablePriceLineMatrix;
