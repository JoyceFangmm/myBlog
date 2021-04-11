module.exports = {
    // Eslint规则
    root: true,
    env: {
        node: true,
        jquery: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-tabs': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用console
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用alert confirm prompt
        'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        'max-params': [0, 2], // 函数最多只能有2个参数
        'eqeqeq': 0, // 必须使用全等
        'operator-linebreak': [2, 'before'], // 换行时运算符在行尾还是行首
        'quotes': [2, 'single'], // 引号类型 `` "" ''
        'radix': 0, // parseInt必须指定第二个参数
        'new-cap': [0], // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
        'no-lonely-if': 0// 禁止else语句内只有if语句
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        $: true
    }
}