const TablePrice = {
  primaryKey: 'id',
  name: 'tablePrice',
  properties: {
    id: {type: 'int', indexed: true},
    table_price: 'string',
    comission_1: 'string',
    comission_2: 'string',
    comission_3: 'string',
    update_at: 'string',
  },
};

export default TablePrice;
