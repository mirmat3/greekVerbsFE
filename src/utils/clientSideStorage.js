// import {
//   COOKIE_DOMAIN,
//   LOCAL_STORAGE_PERSISTED_STATE_KEY,
//   COOKIE_ID_SESSION_KEY,
//   COOKIE_LAST_VISITED_KEY,
// } from 'constants/constants';
const LOCAL_STORAGE_PERSISTED_STATE_KEY = 'state';
/* STARTS LOCAL/SESSION STORAGE HELPERS */

export const setLocalStorageItem = (key, value) => {
  try {
    // const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, value);
  } catch (err) {
    // Ignore write errors
    // console.warn(`SAVE ${key} ON LOCALSTORAGE ERROR: Item=> ${key} - ${value} ==> `, err);
  }
};

export const getLocalStorageItem = key => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return undefined;
    return JSON.parse(serializedValue);
  } catch (err) {
    // console.warn(`GET LOCALSTORAGE ${key} ERROR ==> `, err);
    return undefined;
  }
};

export const setSessionStorageItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorageItem = key => JSON.parse(sessionStorage.getItem(key));

/* ENDS LOCAL/SESSION STORAGE HELPERS */

/* STARTS PERSISTORS HELPER FUNCTIONS */
// Redux Subcriptions to Load & Save state

export const loadPersistedState = () =>
  getLocalStorageItem(LOCAL_STORAGE_PERSISTED_STATE_KEY);

export const savePersistedState = state =>
  setLocalStorageItem(LOCAL_STORAGE_PERSISTED_STATE_KEY, JSON.stringify(state));

/* ENDS PERSISTORS HELPER FUNCTIONS */

// /* START COOKIES HELPERS */
// export const setCookie = (cName, value, expires, domain) => {
//   const exdate = new Date();
//   if (cName === COOKIE_ID_SESSION_KEY) {
//     exdate.setTime(exdate.getTime() + 10800000); // 3 horas
//   }
//   if (cName === COOKIE_LAST_VISITED_KEY) {
//     exdate.setTime(exdate.getTime() + 30800000); // 9 horas
//   }

//   let cValue = null;
//   if (!domain) {
//     // console.log('no domain');
//     cValue = escape(value) + (expires === null ? '' : `;expires=${exdate};path=/`);
//   } else {
//     // console.log('with domain');
//     cValue =
//       escape(value) +
//       (expires === null ? '' : `;expires=${exdate};domain=${domain};path=/`);
//   }

//   document.cookie = `${cName}=${cValue}`;
// };

// export const getCookie = cName => {
//   let cValue = document.cookie;
//   let cStart = cValue.indexOf(` ${cName}=`);
//   if (cStart === -1) {
//     cStart = cValue.indexOf(`${cName}=`);
//   }
//   if (cStart === -1) {
//     cValue = null;
//   } else {
//     cStart = cValue.indexOf('=', cStart) + 1;
//     let cEnd = cValue.indexOf(';', cStart);
//     if (cEnd === -1) {
//       cEnd = cValue.length;
//     }
//     cValue = unescape(cValue.substring(cStart, cEnd));
//   }
//   return cValue;
// };

// export const deleteCookie = name => {
//   document.cookie = `${name}=;Max-Age=0;path=/`;
// };

// export const deleteCookieIdSession = name => {
//   document.cookie = `${name}=;Max-Age=0;path=/;domain=${COOKIE_DOMAIN}`;
// };

// //  CLEAR ALL STORAGE
// export const clearUserStorageSession = () => {
//   localStorage.clear();
//   localStorage.removeItem(LOCAL_STORAGE_PERSISTED_STATE_KEY);
//   deleteCookie(COOKIE_LAST_VISITED_KEY);
//   deleteCookie(COOKIE_ID_SESSION_KEY);
//   sessionStorage.clear();
// };

/* ENDS COOKIES HELPERS */
