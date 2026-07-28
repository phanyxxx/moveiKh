import { defineStore } from "pinia";
export const useListMenuStore = defineStore("listMenu", {
    state: () => ({
        list:[
            {
                id: 1,
                name: "Daily Update",
                path: "/daily-update",
                active: false
            },
            {
                id: 2,
                name: "Korea Drama",
                path: "/korea",
                active: false
            },
            {
                id: 3,
                name: "China Drama",
                path: "/china",
                active: false
            },
        ],
    }),
    getters: {
        getLists(){
            return this.list
        },
        getMovieLists(){
            return this.movieList
        }
    },
    actions: {
    },
})