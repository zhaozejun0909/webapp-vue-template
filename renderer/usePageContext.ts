// https://vike.dev/usePageContext
import { inject } from 'vue'
import type { PageContext } from 'vike/types'
import type { App, InjectionKey, Ref } from 'vue'

const key: InjectionKey<Ref<PageContext>> = Symbol('sbkeytwo')

/** https://vike.dev/usePageContext */
function usePageContext(): Ref<PageContext> {
    const pageContext = inject(key)
    if (!pageContext)
        throw new Error('setPageContext() not called in parent')
    return pageContext
}

function setPageContext(app: App, pageContext: Ref<PageContext>): void {
    app.provide(key, pageContext)
}

export { usePageContext }
export { setPageContext }
