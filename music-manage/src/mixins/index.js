export const mixin = {
  methods:{
    // 提示信息
    notify(title,type){
      this.$notify({
        title,
        type
      })
    }
  }
}
