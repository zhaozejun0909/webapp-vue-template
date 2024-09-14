import antfu from '@antfu/eslint-config'

export default antfu({
    // unocss: true, // enable unocss
    // 代码风格相关
    stylistic: {
        indent: 4,
        braceStyle: '1tbs',
    },
    rules: {
        'eslint-comments/no-unlimited-disable': 'off',
    },
    formatters: {
        // CSS, LESS, SCSS , also the `<style>` blocks in Vue
        css: true,
        html: true,
    },
    ignores: ['**/fixtures', '*-lock.yaml', '*-lock.json'],
})
