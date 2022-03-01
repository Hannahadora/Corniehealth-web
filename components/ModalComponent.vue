<template>
  <div
    class="d-modal"
  >
    <div
      v-if="isActive"
      class="d-modal__content c-centered"
      ref="content"
      @keydown="onKeydown"
      role="document"
      :tabindex="isActive ? 0 : undefined"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  layout: 'auth',
  data() {
    return {
      isActive: true
    }
  },

  watch: {
    isActive(val) {
      if (val) {
        this.show()
      } else {
        this.hide()
      }
    },
  },

  methods: {
    show() {
      this.$nextTick(() => {
        document.documentElement.classList.add("overflow-y-hidden")
        this.$refs.content.focus()
      })
    },
    hide() {
      this.$emit("close")
      this.$nextTick(() => {
        document.documentElement.classList.remove("overflow-y-hidden")
      })
    },
    onKeydown(e) {
      if (e.keyCode === 27) {
        this.isActive = false
      }
      this.$emit("keydown", e)
    },
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isActive && this.show()
    })
  },
}
</script>

<style>
.d-modal {
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.3s ease-in-out;
  background: rgb(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  z-index: 999999.99;
}

.d-modal__content {
  /* position: relative;*/
  outline: none; 
  z-index: 999;
}

.d-modal--active {
  pointer-events: auto;
  overflow-y: auto;
}
</style>
