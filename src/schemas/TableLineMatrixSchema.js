const TableLineMatrix = {
  name: 'tableLineMatrix',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int', indexed: true},
    matrix: 'string',
    description: 'string',
    feature: 'string',
    image: 'string',
    update_at: 'string',
    line: 'tableLine[]',
  },
};

export default TableLineMatrix;
