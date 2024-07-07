import Vue from 'vue'
import { 
  ElButton,
  ElInput,
  ElLink,
  ElMessageBox
} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElInput)
  app.use(ElLink)
}

Vue.prototype.$confirm = ElMessageBox.confirm