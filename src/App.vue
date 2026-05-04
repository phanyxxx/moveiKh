<script setup>
import { RouterLink } from 'vue-router'
    import { useListMenuStore } from '@/stores/counter';
    const listMenuStore = useListMenuStore();
</script>
<template>
    <div class="container-fluid menu px-3">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 menu-box">
          <ul>
            <li>
              <RouterLink to="/"><i class="fas fa-home"></i> Home</RouterLink>
            </li>
            <li v-for="(item,index) in listMenuStore.getLists" :key="index">
              <RouterLink :to="item.path">{{item.name}}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <RouterView />
</template>