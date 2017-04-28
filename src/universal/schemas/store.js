import { schema } from 'normalizr';

export const storeItem = new schema.Entity('storeItem');

// Define your article
export const store = new schema.Entity('store', {
  items: [ storeItem ]
}, {
  idAttribute: (value, parent, key) => {
    return value.owner.username;
  },
});