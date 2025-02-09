<template>
  <section class="section studies">
    <h3>My hobbies</h3>
    <div class="wrapper">
      <div class="card" v-for="(image, index) in images" :key="index">
        <img :src="image.url" :alt="image.alt">
      </div>
    </div>
  </section>
</template>

<script>
import sport from "../assets/sport.png";
import asso from "../assets/association.png";
import dj from "../assets/dj.png";

export default {
  name: 'Studies',
  data() {
    return {
      images: [
        {
          url: sport,
          alt: 'Description 1'
        },
        {
          url: asso,
          alt: 'Description 2'
        },
        {
          url: dj,
          alt: 'Description 2'
        }
      ]
    }
  }
}
</script>