const app = Vue.createApp({
    data: () => ({
        message:'Hello <span style="color:red;"> Vue.js </span>'
    })
})
app.mount('#app')