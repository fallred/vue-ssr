import Vue from 'vue';

import Vuex from 'vuex';


Vue.use(Vuex);

export default (request)=>{
    let store = new Vuex.Store({
        state:{
            username:'jw'
        },
        mutations:{
            set_username(state){
                state.username = 'zfpx1';
            }
        },
        actions:{
            set_username({commit}){
                return request.get('/api/tagList').then(function(result){
                    if (result.code===200) {
                        let list  = result.data.list;
                        commit('set_tag_list',list);
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                });
                /*
                return new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        commit('set_username');
                        resolve();
                    }, 1000);
                });
                */
            }
        }
    });
    if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store;
}