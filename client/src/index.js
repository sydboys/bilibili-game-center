import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./normalize.css"
import './index.css';

window.appDataCache ={//页面数据缓存,在切换页面后保存加载的数据，不必再执行ajax
    home:{},//{bookGame,hotGame,carousel,hotStrategy,newGame,st}
    rank:{},//{BestSelling,GoodTrend,MorePraise,Hot,st,tab}
    find:{},
    strategy:{},
    my:{}
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
