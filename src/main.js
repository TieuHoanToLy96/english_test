import { createApp } from "vue"
import App from "@/App.vue"

import "@/styles/main.sass"

import router from "@/router"
import vuetify from "@/plugins/vuetify.js"
import piana from "@/plugins/piana.js"

import { Button, Input, Modal } from 'ant-design-vue'
import { CloseSvg } from "vue-pancake-icons"

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(piana)
app.use(Button)
app.use(Input)
app.use(Modal)
app.use(CloseSvg)

app.mount("#app")
