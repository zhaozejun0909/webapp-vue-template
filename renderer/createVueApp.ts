import { createSSRApp, h, shallowRef } from 'vue'
import type { PageContext } from 'vike/types'
import Layout from './Layout.vue'
import { setData } from './useData'
import { setPageContext } from './usePageContext'
import { objectAssign } from './utils'

function createVueApp(pageContext: PageContext) {
    const pageContextRef = shallowRef(pageContext)
    const dataRef = shallowRef(pageContext.data)
    const pageRef = shallowRef(pageContext.Page)

    const RootComponent = () => h(Layout, null, () => h(pageRef.value))
    const app = createSSRApp(RootComponent)
    setPageContext(app, pageContextRef)
    setData(app, dataRef)

    // app.changePage() is called upon navigation, see +onRenderClient.ts
    objectAssign(app, {
        changePage: (pageContext: PageContext) => {
            pageContextRef.value = pageContext
            dataRef.value = pageContext.data
            pageRef.value = pageContext.Page
        },
    })

    return app
}

export { createVueApp }
