const { test } = require('../index')
test(
    new Array(1000).fill(null).map((_, i) => { i+=1; return [ i, i, i ] })
)