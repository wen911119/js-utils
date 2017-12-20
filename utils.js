// 数字千分位格式化
export function toThousands(n) {
    n = n + ''
    const re = /\d{1,3}(?=(\d{3})+$)/g;
    const n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, "$&,") + s2; });
    return n1;
}
// toThousands(32311131.32)
// "32,311,131.32"

// 时间戳格式化

export function timestampFormat(ts, template) {
    let t = new Date(ts)
    let year = t.getFullYear()
    let month = _trim(t.getMonth() + 1)
    let day = _trim(t.getDate())
    let h = _trim(t.getHours())
    let m = _trim(t.getMinutes())
    let s = _trim(t.getSeconds())
    template = template.replace('YYYY',year)
    template = template.replace('MM',month)
    template = template.replace('DD',day)
    template = template.replace('hh',h)
    template = template.replace('mm',m)
    template = template.replace('ss',s)
    return template
}

// 小于10的补0
function _trim(n) {
    n = parseInt(n)
    if (n < 10) {
        n = parseInt('0' + n)
    }
    return n
}