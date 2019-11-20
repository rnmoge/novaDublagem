const TableLineMatrixColor = {
  name: 'novaDublagem',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int', indexed: true},
    update_at: 'string',
    line: 'TableLine[]',
    color: 'TableColor[]',
    matrix: 'TableLineMatrix[]',
  },
};

export default TableLineMatrixColor;
