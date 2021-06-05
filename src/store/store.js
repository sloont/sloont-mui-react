import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import api from './middleware/api';

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware(),
        api
    ]
});

export default store;

//*************************** */
// current store state ---->

// state: {
//     entities: {
//         posts: {
//             list: [],
//             loading: false,
//             lastFetch: null
//         }
//     }
// }

//**************************** */