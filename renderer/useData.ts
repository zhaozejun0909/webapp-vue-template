// https://vike.dev/useData
import { inject } from 'vue'
import type { App, InjectionKey, Ref } from 'vue'

const key: InjectionKey<Ref<unknown>> = Symbol('sbkeyone')

/** https://vike.dev/useData */
function useData<Data>(): Ref<Data> {
    const data = inject(key)
    if (!data)
        throw new Error('setData() not called')
    return data as Ref<Data>
}

function setData(app: App, data: Ref<unknown>): void {
    app.provide(key, data)
}

export { useData }
export { setData }
