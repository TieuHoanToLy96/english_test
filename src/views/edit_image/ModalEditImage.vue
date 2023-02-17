<script>
export default {
  setup() {

  },
  methods: {
    handleOk() {

    }
  }
}
</script>

<template>
  <a-modal :visible="true" @ok="handleOk">
    <template #title>
      <div class="flex">
        <div>ds</div>
        <div>
          Photo Studio
        </div>
      </div>
    </template>
    <template #closeIcon></template>
  </a-modal>
</template>