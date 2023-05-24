import React from 'react';
import ReactDOM from 'react-dom/client';
import configurestore from './redux/Store/configurestore';
import { addblog } from './redux/Action/blogAction';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import "../src/assets/sass/style.scss"



const store =configurestore();



 
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addblog({photo:"https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_17-1-450x595.jpg",title:"Design Concern Years After The Moon Landin",desc:"BY ADMIN DECEMBER 9, 2021"}))

store.dispatch(addblog({photo:"https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_13-1-450x595.jpg",title:"Design Concern Years After The Moon Landin",desc:"BY ADMIN DECEMBER 9, 2021"}))

store.dispatch(addblog({photo:"https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_14-1-450x595.jpg",title:"Design Concern Years After The Moon Landin",desc:"BY ADMIN DECEMBER 9, 2021"}))

store.dispatch(addblog({photo:"https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_13-1-450x595.jpg",title:"Design Concern Years After The Moon Landin",desc:"BY ADMIN DECEMBER 9, 2021"}))

store.dispatch(addblog({photo:"https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_16-1-551x431.jpg",title:"Design Concern Years After The Moon Landin",desc:"BY ADMIN DECEMBER 9, 2021"}))

store.dispatch(addblog({photo:"https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_15-1-551x431.jpg",desc:"BY ADMIN DECEMBER 9, 2021"}))




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
<App/>
</Provider>

  </React.StrictMode>
);
