<script setup>
import { ref } from "vue";
import { useListMovieStore } from "@/stores/movieList";
const listMovieStore = useListMovieStore();
const noData = ref(false);
</script>

<template>
  <div class="container mt-3 main" v-if="listMovieStore.getKoreaMovieLists.length === 0">
    <div class="row">
      <div class="col-12 text-center">
        <p>No Korean movies available.</p>
      </div>
    </div>
  </div>
  <div class="container mt-3 main overflow-scroll" v-else>
    <div class="row">
      <div class="col-12 col-lg-9 main-content">
        <div
          class="border-box mb-3 d-flex justify-content-between align-items-center"
        >
          <p class="p1 mb-0">Korean Drama &gt;&gt;</p>
        </div>
        <div class="row g-4 drama-list">
          <div
            class="col-6 col-md-4 col-lg-2"
            v-for="(item, index) in listMovieStore.getKoreaMovieLists"
            :key="index"
          >
            <div class="drama-item">
              <RouterLink :to="{ name: 'movie-detail', params: { id: item.id } }">
                <div class="img-wrapper">
                  <img :src="`/images/${item.image}`" :alt="item.name" />
                </div>
                <h4 class="title">{{ item.name }}</h4>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Featured Post -->
      <div class="col-12 col-lg-3 sideContent">
        <div class="border-box mb-3">
          <p class="p-1 mb-0">Featured Post</p>
        </div>
        <div class="border-right card mb-3 rounded-0 drama-list p-3">
          <div class="row g-4 drama-list">
            <div
              class=""
              v-for="(item, index) in listMovieStore.getMovieLists.slice(0, 1)"
              :key="index"
            >
              <div class="drama-item">
                <RouterLink :to="{ name: 'movie-detail', params: { id: item.id } }">
                  <div class="img-wrapper">
                    <img :src="`/images/${item.image}`" :alt="item.name" />
                  </div>
                  <h4 class="title">{{ item.name }}</h4>
              </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- Popular Posts -->
        <div class="border-box mb-3">
          <p class="p-1 mb-0">Popular Posts</p>
        </div>
        <div class="border-right card mb-3 rounded-0 drama-list p-3">
          <div class="row g-3">
            <div
              class="col-6"
              v-for="(item, index) in listMovieStore.getMovieLists.slice(4, 10)"
              :key="index"
            >
              <div class="drama-item">
                <RouterLink :to="{ name: 'movie-detail', params: { id: item.id } }">
                  <div class="img-wrapper">
                    <img :src="`/images/${item.image}`" :alt="item.name" />
                  </div>
                  <h4 class="title">{{ item.name }}</h4>
              </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- Hot Trending -->
        <div class="border-box mb-3">
          <p class="p-1 mb-0">Hot Trending</p>
        </div>
        <div class="border-right card mb-3 rounded-0 drama-list p-3">
          <div class="row g-3">
            <div
              class="col-6"
              v-for="(item, index) in listMovieStore.getMovieLists.slice(0, 6)"
              :key="index"
            >
              <div class="drama-item">
                <RouterLink :to="{ name: 'movie-detail', params: { id: item.id } }">
                  <div class="img-wrapper">
                    <img :src="`/images/${item.image}`" :alt="item.name" />
                  </div>
                  <h4 class="title">{{ item.name }}</h4>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- Gallery Drama -->
        <div class="border-box mb-3">
          <p class="p-1 mb-0">Gallery Drama</p>
        </div>
        <div class="border-right card mb-3 rounded-0 drama-list p-3">
          <div class="row g-3">
            <div
              class="col-4"
              v-for="(item, index) in listMovieStore.getMovieLists.slice(0, 6)"
              :key="index"
            >
              <div class="drama-item">
                <RouterLink :to="{ name: 'movie-detail', params: { id: item.id } }">
                  <div class="img-wrapper">
                    <img :src="`/images/${item.image}`" :alt="item.name" />
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>