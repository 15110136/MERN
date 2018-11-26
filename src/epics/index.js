import { combineEpics } from 'redux-observable';
import ListEpic from '../components/showList/ListEpic';
import HomepageEpic from '../containers/homepage/HomepageEpic';
import ProductEpic from '../containers/product/ProductEpic';
import DetailProductEpic from '../containers/detailProduct/DetailProductEpic';

const epics = [
    ListEpic,
    HomepageEpic,
    ProductEpic,
    DetailProductEpic,
];

const rootEpic = combineEpics(...epics);

export default rootEpic;
