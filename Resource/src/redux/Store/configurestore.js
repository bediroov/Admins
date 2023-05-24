import { createStore } from 'redux';
import { blogReducer } from '../Reducer/blogReducer';




const configurestore = () => {
    const store = createStore(blogReducer)

    return store;

}

export default configurestore;