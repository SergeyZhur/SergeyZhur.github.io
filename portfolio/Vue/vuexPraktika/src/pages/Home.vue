<template>
       <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
              <h1>HOME Router</h1>
              <p>{{message}}</p>
          </div>
        </section>
        </div>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.getters.getMessage
    }
  }
}
</script>