<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useListMovieStore } from '@/stores/movieList';

// 1. Get Movie Data
const route = useRoute();
const listMovieStore = useListMovieStore();
const movieId = route.params.id;

// Find the specific movie from the store based on the ID in the URL
const movie = computed(() => {
  return listMovieStore.movieList.find((m) => m.id == movieId);
});

// 2. Mock Episode Logic (Simulating 24 episodes)
const currentEpisode = ref(1);
const totalEpisodes = 24; 
// Create an array [1, 2, 3 ... 24] for the buttons
const episodes = Array.from({ length: totalEpisodes }, (_, i) => i + 1);

// Function to handle clicking an episode
const selectEpisode = (ep) => {
  currentEpisode.value = ep;
  // Here you would normally fetch the new video URL for this episode
};

// Pagination Logic (Mock)
const nextPage = () => {
  if(currentEpisode.value < totalEpisodes) currentEpisode.value++;
};
const prevPage = () => {
  if(currentEpisode.value > 1) currentEpisode.value--;
};
</script>

<template>
  <div class="container mt-4 mb-5" v-if="movie">
    
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="video-frame">
          <div class="video-container">
            <!-- <img 
               :src="`/public/images/${movie.image}`" 
               class="poster-bg" 
               alt="Video Poster"
             /> -->
              <video controls>
                <source src="/images/v1.mp4" type="video/mp4">
              </video>
             <!-- <div class="play-overlay">
               <i class="fas fa-play-circle display-1 text-white"></i>
             </div>
              -->
             </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-0">
      <div class="col-12 col-lg-10">
        <div class="episode-box p-3">
          
          <div class="episode-grid">
            <button 
              v-for="ep in episodes" 
              :key="ep"
              class="btn episode-btn"
              :class="{ 'active': currentEpisode === ep }"
              @click="selectEpisode(ep)"
            >
              {{ ep < 10 ? '0' + ep : ep }}
            </button>
          </div>

          <div class="control-bar mt-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
            <button class="btn control-btn"><i class="fas fa-arrow-up"></i> GO UP</button>
            
            <div class="d-flex gap-2">
              <button class="btn control-btn" @click="prevPage"><i class="fas fa-step-backward"></i> PREV</button>
              <span class="page-count">{{ currentEpisode < 10 ? '0'+currentEpisode : currentEpisode }} / {{ totalEpisodes }}</span>
              <button class="btn control-btn" @click="nextPage">NEXT <i class="fas fa-step-forward"></i></button>
            </div>

            <button class="btn control-btn">GO DOWN <i class="fas fa-arrow-down"></i></button>
          </div>

        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-3">
      <div class="col-12 col-lg-10">
        <h2 class="text-white">{{ movie.name }} - Episode {{ currentEpisode }}</h2>
      </div>
    </div>

  </div>

  <div v-else class="container text-center mt-5">
    <h2>Movie not found</h2>
  </div>
</template>

<style scoped>
/* Main Background Colors */
.video-frame, .episode-box {
  background-color: #111; /* Very dark background behind player */
  border: 1px solid #333;
}

/* 1. Video Container (Responsive 16:9) */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  background: #000;
}

.video-container iframe,video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-container .poster-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8; 
}

/* .play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
} */

/* 2. Episode Grid Styling */
.episode-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); /* Responsive grid */
  gap: 10px;
}

.episode-btn {
  background-color: #1f1f1f; /* Dark grey button */
  color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px 0;
  font-weight: bold;
  transition: all 0.3s ease;
}

.episode-btn:hover {
  background-color: #333;
  border-color: #555;
}

/* The 'Active' state (Purple text like screenshot) */
.episode-btn.active {
  color: #a855f7; /* Purple color */
  border-color: #a855f7;
  background-color: #1a1a1a;
}

/* 3. Control Bar Styling */
.control-bar {
  background-color: #111;
  border-top: 1px solid #333;
  padding-top: 15px;
}

.control-btn {
  background-color: #1f1f1f;
  color: #fff;
  border: 1px solid #333;
  font-size: 0.9rem;
  padding: 5px 15px;
}

.control-btn:hover {
  background-color: #333;
}

.page-count {
  background-color: #1f1f1f;
  color: #fff;
  padding: 6px 15px;
  border-radius: 4px;
  font-weight: bold;
  border: 1px solid #333;
}
</style>