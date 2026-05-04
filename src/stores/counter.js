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
        movieList:[
            {
                id: 1,
                name: "Hang Knung Vong Chorchork",
                image: "m1.jpg",
                active: false
            },
            {
                id: 2,
                name: "Nisai Chivit Nery PhKu Phkang",
                image: "m2.jpg",
                active: false
            },
            {
                id: 3,
                name: "Som leng Damtri Chlong Vealea",
                image: "m3.jpg",
                active: false
            },
            {
                id: 4,
                name: "Smorphumi Nak Klahan",
                image: "m4.jpg",
                active: false
            },
            {
                id: 5,
                name: "Piphop kun Nak klahan",
                image: "m5.jpg",
                active: false
            },
            {
                id: 6,
                name: "Krom Brotebatka Songkrous Chivit",
                image: "m6.jpg",
                active: false
            },
            {
                id: 7,
                name: "Damnok Cham Reach Vong Atkombang",
                image: "m7.jpg",
                active: false
            },
            {
                id: 8,
                name: "Onteak Sdach Chorchork Lolourng Sne Preas Neang",
                image: "m8.jpg",
                active: false
            },
            {
                id: 9,
                name: "Athkombang Samai Thang I",
                image: "m9.jpg",
                active: false
            },
            {
                id: 10,
                name: "Kompul Metep Srey Ler Samorphum",
                image: "m10.jpg",
                active: false
            },
        ]
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