const TableLine = {
  name: 'tableLine',
  primaryKey: 'id',
  propertipes: {
    id: {type: 'int', indexed: true},
    line: 'string',
    description: 'string',
    update_at: 'string',
  },
};

export default TableLine;
