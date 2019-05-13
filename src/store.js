import Vue from 'vue';

import Vuex from 'vuex';


Vue.use(Vuex);

export default (request)=>{
    let store = new Vuex.Store({
        state: {
            username:'jw',
            tagList: []
        },
        mutations:{
            set_username(state){
                state.username = 'zfpx1';
            },
            set_tag_list(state,list){
                state.tagList = list;
            }
        },
        getters: {
            tagList({tagList}) {
                return tagList;
            }
        },
        actions:{
            set_username({commit}){
                return new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        commit('set_username');
                        resolve();
                    }, 1000);
                });
            },
            set_tag_list({commit}){
                return request.get('/api/tagList').then(function(result){
                    if (result.status===200) {
                        let list  = result.data;
                        commit('set_tag_list',list);
                    }
                });
            }
        }
    });
    if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store;
}