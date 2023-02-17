<script>
import useMainStore from "@/store/main.js"
import { PlugConnected } from "vue-pancake-icons"
import ModalEditImage from "@/views/edit_image/ModalEditImage.vue"

export default {
  name: "Home",
  components: {
    PlugConnected
  },
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
  components: {
    ModalEditImage
  },
  methods: {
    increament() {
      this.mainStore.incrementCounter()
    }
  }
}
</script>

<template>
  <a-button type="primary">Edit image</a-button>
  <ModalEditImage />
</template>