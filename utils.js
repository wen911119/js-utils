// 数字千分位格式化
export function toThousands(n) {
    n = n + ''
    const re = /\d{1,3}(?=(\d{3})+$)/g;
    const n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, "$&,") + s2; });
    return n1;
}
// toThousands(32311131.32)
// "32,311,131.32"