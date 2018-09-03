import EnrolmentDict from './enrolmentdict.vue'

const components = [
    EnrolmentDict
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main