const TableColor = {
  name: 'tablecolor',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int', indexed: true},
    color: 'string',
    description: 'string',
    feature: 'string',
    update_at: 'string',
  },
};

export default TableColor;
