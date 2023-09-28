<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>default content (if no slot passed in)</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
.modal h1 {
  color: #03cfb4;
  padding: 0;
  border: none;
}
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  border: 1px solid #eee;
}
</style>
