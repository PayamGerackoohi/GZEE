/**
 * Distance LZ92
*/
const
    /**
     * Udc: [48, 60] => In = 1
     * Udc: [110, 250] => In = 5
     */
    In = 1,
    /**
     * Un: [100, 130] => H = 1
     * Un: [200, 260] => H = 2
     */
    H = 1,
    _m1 = 2,
    _m2 = 2,
    _m3 = 2,
    n1 = 13,
    n2 = 15,
    n3 = 10,
    line_angle = 68 // degree

const r_x = 1 / Math.tan(line_angle * Math.PI / 180)
const h_i = H / In

let m1, m2, m3
switch (_m1) {
    case 1: m1 = .1; break;
    case 2: m1 = .5; break;
    case 3: m1 = 5; break;
}
switch (_m2) {
    case 1: m2 = .1; break;
    case 2: m2 = 1; break;
    case 3: m2 = 10; break;
}
switch (_m3) {
    case 1: m3 = .1; break;
    case 2: m3 = 1; break;
    case 3: m3 = 10; break;
}
const
    xzone1 = h_i * m1 * 100 / n1,
    xzone2 = h_i * m2 * 100 / n2,
    xzone3 = h_i * m3 * 100 / n3,
    rzone1 = xzone1 * r_x,
    rzone2 = xzone2 * r_x,
    rzone3 = xzone3 * r_x
console.log(`Zone 1: ${rzone1.toFixed(3)} + j${xzone1.toFixed(3)} = ${toPolar(xzone1, rzone1)}`)
console.log(`Zone 2: ${rzone2.toFixed(3)} + j${xzone2.toFixed(3)} = ${toPolar(xzone2, rzone2)}`)
console.log(`Zone 3: ${rzone3.toFixed(3)} + j${xzone3.toFixed(3)} = ${toPolar(xzone3, rzone3)}`)

function toPolar(r, x) {
    const rr = Math.sqrt(r * r + x * x)
    const deg = Math.atan2(r, x) * 180 / Math.PI
    return `${rr.toFixed(3)} ∠ ${deg.toFixed(1)}°`
}
/*
 + j= 4.148 ∠ 68.0°
2.694 + j6.667 = 7.190 ∠ 68.0°
4.040 + j10.000 = 10.785 ∠ 68.0°
*/
