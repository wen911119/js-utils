// 数字千分位格式化
export default function toThousands(n) {
    n = n + ''
    const re = /\d{1,3}(?=(\d{3})+$)/g;
    const n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, "$&,") + s2; });
    return n1;
}