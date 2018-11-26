import { combineReducers } from 'redux';
import ListReducer from '../components/showList/ListReducer';
import HomepageReducer from '../containers/homepage/HomepageReducer';
import ProductReducer from '../containers/product/ProductReducer';
import DetailProductReducer from '../containers/detailProduct/DetailProductReducer';

export default combineReducers({
    listUsers: ListReducer,
    HomepageReducer,
    ProductReducer,
    DetailProductReducer,
});
