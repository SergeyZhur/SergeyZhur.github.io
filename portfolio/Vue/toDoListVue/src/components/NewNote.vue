<template>
<div class="new-note">
  <label>Title</label>
  <input type="text" v-model="note.title">
  <label>Description</label>
  <textarea v-model="note.descr"></textarea>
  <button class="btn btnPrimary" @click="addNote">New note</button>
</div>
</template>


<script>
export default {
  props: {
    note: {
      type:Object,
      required: true
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    }
  }
}
</script>

<style lang="scss" >
.new-note {
  text-align: center;
  
}
.btn {
  margin-top: 20px;
}
</style>