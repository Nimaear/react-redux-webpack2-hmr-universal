import { createSelector } from 'reselect';


const oldThemes = {
  creen: '#1abc9c',
  green: '#27ae60',
  blue: '#3498db',
  blue2: '#2980b9',
  purple: '#9b59b6',
  navyblue: '#34495e',
  gray: '#7f8c8d',
  red: '#c0392b',
  lightgreen: '#66d777',
  teal: '#019695',
  mustard: '#929019',
  darkblue: '#105493',
  golden: '#d1ce62',
  mango: '#f9c332',
  pinktaco: '#ee7cb6',
  pinkster: '#f18d8b',
  orange: '#f39331',
  love: '#a83351',
  purplehaze: '#802c6a',
  raspberry: '#ed4c7c',
};


// const ooldThemes = {
//   creen: { r:26, g:188, b:156 },
//   green: { r:39, g:174, b:96 },
//   blue: { r:52, g:152, b:219 },
//   blue2: { r:41, g:128, b:185 },
//   purple: { r:155, g:89, b:182 },
//   navyblue: { r:52, g:73, b:94 },
//   gray: { r:127, g:140, b:141 },
//   red: { r:192, g:57, b:43 },
//   lightgreen: { r:102, g:215, b:119 },
//   teal: { r:1, g:150, b:149 },
//   mustard: { r:146, g:144, b:25 },
//   darkblue: { r:16, g:84, b:147 },
//   golden: { r:209, g:206, b:98 },
//   mango: { r:249, g:195, b:50 },
//   pinktaco: { r:238, g:124, b:182 },
//   pinkster: { r:241, g:141, b:139 },
//   orange: { r:243, g:147, b:49 },
//   love: { r:168, g:51, b:81 },
//   purplehaze: { r:128, g:44, b:106 },
//   raspberry: { r:237, g:76, b:124 }
// }

// function decimalToHex(d, padding) {
//     var hex = Number(d).toString(16);
//     padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

//     while (hex.length < padding) {
//         hex = "0" + hex;
//     }

//     return hex;
// }

// Object.keys(ooldThemes).forEach(theme => {
//   console.log(`${theme}: '#${decimalToHex(ooldThemes[theme].r)}${decimalToHex(ooldThemes[theme].g)}${decimalToHex(ooldThemes[theme].b)}'`)
// })

export const getStore = createSelector(
  (state, name) => {
    if (state.entities.store && state.entities.store[name]) {
      const themeColor = state.entities.store[name].theme.color || 'creen';
      const store = {
        ...state.entities.store[name],
        theme: {
          ...state.entities.store[name].theme,
          color: oldThemes[themeColor] || themeColor
        }
      }
      return store;
    }
    return {
      theme: {
        color: '#008C8F',
        logoUrl: '//coursio.s3-eu-west-1.amazonaws.com/c9874250ed9a230280a3c59f18925db4/9dc67911253bcaba11f4733f010ef1ad/a3541e141722c34ce8fea4d519415285483309f60dd39703daeebfedbf09bad8.png'
      },
      presentation: {

      },
      owner: {
        name: 'Coursio'
      }
    };
  },
  store => store
);

const makeGetStoreitem = () => {
  return createSelector(
    (state, name) => state.entities.storeItem || {},
    (state, name, type, id) => `${type}-${id}`,
    (storeItems, id) => {
      return {
        ...storeItems[id],
        type: parseInt(storeItems[id].type, 10)
      } || {};
    }
  );
}

export const getStoreItem = makeGetStoreitem();

const makeGetStoreItems = () => {
  return createSelector(
    (state, name) => state.entities.store && state.entities.store[name] && state.entities.store[name].items || [],
    (state, name) => state.entities.storeItem,
    (state, name) =>  state.entities.store && state.entities.store[name] && state.entities.store[name].search,
    (state, name) =>  state.entities.store && state.entities.store[name] && state.entities.store[name].filter,
    (storeItems, entities, search, filter) => {
      let items = storeItems.map(id => {
        return {
          ...entities[id],
          type: parseInt(entities[id].type, 10)
        } || {};

      });
      if (search) {
        const regExp = new RegExp(search, 'i');
        items = items.filter(item => item.name.search(regExp) > -1);
      }
      if (filter && filter.itemType) {
        const { itemType } = filter
        items = items.filter(item => item.type === itemType);
      }
      return items;
    }
  );
}

export const getStoreItems = makeGetStoreItems();
