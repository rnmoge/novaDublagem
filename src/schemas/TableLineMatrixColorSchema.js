const TableLineMatrixColor = {
  name: 'tableLineMatrixColor',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int', indexed: true},
    update_at: 'string',
    line: 'tableLine[]',
    color: 'tableColor[]',
    matrix: 'tableLineMatrix[]',
  },
};

export default TableLineMatrixColor;
