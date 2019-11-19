import Realm from 'realm';

import UserSchema from '../schemas/UserSchema';
import TablePriceSchema from '../schemas/TablePriceSchema';
import TablePriceLineMAtrix from '../schemas/TablePriceLineMatrixSchema';
import TableLineSchema from '../schemas/TableLineSchema';
import TableLineMatrixSchema from '../schemas/TableLineMatrixSchema';
import TableLineMatrixColorSchema from '../schemas/TableLineMatrixColorSchema';
import TableGroupSizeSchema from '../schemas/TableGroupSizeSchema';
import TableColorSchema from '../schemas/TableColorSchema';

export default function getRealm() {
  return Realm.open({
    schema: [
      UserSchema,
      TablePriceSchema,
      TablePriceLineMAtrix,
      TableLineSchema,
      TableLineMatrixSchema,
      TableLineMatrixColorSchema,
      TableGroupSizeSchema,
      TableColorSchema,
    ],
  });
}
