import Realm from 'realm';

import Schemas from '../schemas';

export default function getRealm() {
  return Realm.open({
    schema: [Schemas.TablePrice, Schemas.User],
  });
}
