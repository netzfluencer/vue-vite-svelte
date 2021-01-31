<template>
  <div ref="sc" />
</template>

<script>
let C = null

export default {
  props: {
    module: {
      type: Function,
      required: true
    },
    props: {
      type: Object,
      default: null
    },
    handlers: {
      type: Object,
      default: null
    }
  },
  mounted() {
    const M = this.module
    C = new M ({
      target: this.$refs.sc,
      props: this.props
    })
    if (this.handlers) {
      Object.entries(this.handlers).forEach(h => {
        C.$on(h[0], h[1])
      });
    }
  },
  watch: {
    props: {
      deep: true,
      handler: (n) => C.$set(n)
    }
  },
  beforeUnmount() {
    C.$destroy()
  }
}
</script>
