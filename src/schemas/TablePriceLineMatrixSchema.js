const TablePriceLineMatrix = {
  name: 'tablePriceLineMatrix',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int'},
    table_price_table_price: 'tablePrice[]',
    line_matrix_line: 'tableLineMatrix[]',
    group_size_gruop_size: 'tableGroupSize[]',
    price_1: 'string',
    price_2: 'string',
    price_3: 'string',
    update_at: 'string',
  },
};

export default TablePriceLineMatrix;
