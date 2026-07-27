import { defineStore } from "pinia";
export const useListMovieStore = defineStore("listMovie", {
    state: () => ({
        noData:false,
        movieList:[
            {
                id: 1,
                category: "china",
                name: "Hang Knung Vong Chorchork",
                image: "m1.jpg",
                active: false
            },
            {
                id: 2,
                category: "china",
                name: "Nisai Chivit Nery PhKu Phkang",
                image: "m2.jpg",
                active: false
            },
            {
                id: 3,
                category: "china",
                name: "Som leng Damtri Chlong Vealea",
                image: "m3.jpg",
                active: false
            },
            {
                id: 4,
                category: "china",
                name: "Smorphumi Nak Klahan",
                image: "m4.jpg",
                active: false
            },
            {
                id: 5,
                category: "china",
                name: "Piphop kun Nak klahan",
                image: "m5.jpg",
                active: false
            },
            {
                id: 6,
                category: "china",
                name: "Krom Brotebatka Songkrous Chivit",
                image: "m6.jpg",
                active: false
            },
            {
                id: 7,
                category: "china",
                name: "Damnok Cham Reach Vong Atkombang",
                image: "m7.jpg",
                active: false
            },
            {
                id: 8,
                category: "china",
                name: "Onteak Sdach Chorchork Lolourng Sne Preas Neang",
                image: "m8.jpg",
                active: false
            },
            {
                id: 9,
                category: "china",
                name: "Athkombang Samai Thang I",
                image: "m9.jpg",
                active: false
            },
            {
                id: 10,
                category: "china",
                name: "Kompul Metep Srey Ler Samorphum",
                image: "m10.jpg",
                active: false
            },
            {
                id: 11,
                category: "china",
                name: "Ku Nisaiy Preah Ang Mjas",
                image: "m11.jpg",
                active: false
            },
            {
                id: 12,
                category: "china",
                name: "Somnak Seufang",
                image: "m12.jpg",
                active: false
            },
            {
                id: 13,
                category: "china",
                name: "Soben Sneh Knong Preng Nitean",
                image: "m13.jpg",
                active: false
            },
            {
                id: 14,
                category: "china",
                name: "Pheakriyea Rers Svamey",
                image: "m14.jpg",
                active: false
            },
            {
                id: 15,
                category: "china",
                name: "Akombang Sombot Veha",
                image: "m15.jpg",
                active: false
            },
            {
                id: 16,
                category: "china",
                name: "Kompul Metorb Srey Heuyean",
                image: "m16.jpg",
                active: false
            },
            {
                id: 17,
                category: "china",
                name: "Ku Kam Tep thyda",
                image: "m17.jpg",
                active: false
            },
            {
                id: 18,
                category: "china",
                name: "Chamnorng Sneh Kheat Kor Srey",
                image: "m18.jpg",
                active: false
            },
            {
                id: 19,
                category: "korea",
                name: "Oun Chea Besdoung Bong",
                image: "k1.jpg",
                active: false
            },
            {
                id: 20,
                category: "korea",
                name: "Orndat Nei Bomnong Bra Thna",
                image: "k2.jpg",
                active: false
            },
            {
                id: 21,
                category: "korea",
                name: "Santus Dav Neary Khlahan",
                image: "k3.jpg",
                active: false
            },
            {
                id: 22,
                category: "korea",
                name: "Soben Ke Veasna",
                image: "k4.jpg",
                active: false
            },
            {
                id: 23,
                category: "korea",
                name: "Kompul Pneak Ngea Sneh",
                image: "k5.jpg",
                active: false
            },
            {
                id: 24,
                category: "korea",
                name: "SongkreamChakamKonBros",
                image: "k6.jpg",
                active: false
            },
            {
                id: 25,
                category: "korea",
                name: "Ukret Kam Besdoung",
                image: "k7.jpg",
                active: false
            },
            {
                id: 26,
                category: "korea",
                name: "Pka Pis",
                image: "k8.jpg",
                active: false
            },
            {
                id: 27,
                category: "korea",
                name: "Pukmak Yeng Chea Zombie",
                image: "k9.jpg",
                active: false
            },
            {
                id: 28,
                category: "korea",
                name: "Ethipol Sneha",
                image: "k10.jpg",
                active: false
            },
            {
                id: 29,
                category: "korea",
                name: "Vichea Than Art Kom Bang",
                image: "k11.jpg",
                active: false
            },
            {
                id: 30,
                category: "korea",
                name: "Krom Char Kech Pises",
                image: "k12.jpg",
                active: false
            },
            {
                id: 31,
                category: "korea",
                name: "Sangsa Knhom Jea Mnus Phub Pkay",
                image: "k13.jpg",
                active: false
            },
            {
                id: 32,
                category: "korea",
                name: "Nitean Sne Knong Rach Vong Lorhet",
                image: "k14.jpg",
                active: false
            },
            {
                id: 33,
                category: "korea",
                name: "Somleng Besdoung",
                image: "k15.jpg",
                active: false
            },
            {
                id: 34,
                category: "korea",
                name: "Kromom Leklork Kamlors Smors Sne",
                image: "k16.jpg",
                active: false
            },
            {
                id: 35,
                category: "korea",
                name: "Nak Bro Manh Teaskor",
                image: "k17.jpg",
                active: false
            },
            {
                id: 36,
                category: "korea",
                name: "Kompul Chaor Chet Chea",
                image: "k18.jpg",
                active: false
            },
        ]
    }),
    getters: {
        getMovieLists(){
            return this.movieList
        },
        getChinaMovieLists(){
            return this.movieList.filter(movie => movie.category === "china")
        },
        getKoreaMovieLists(){
            return this.movieList.filter(movie => movie.category === "korea")
        }
    },
    actions: {
    },
})
