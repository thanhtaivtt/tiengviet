import test from 'ava'
import tiengviet from './dist/tiengviet'

test('test tieng viet', t => {
    let data = [
        ["Phận sao phận bạc như vôi", "Fận sao fận bạk n'ư vôi"],
        ["Đã đành nước chảy hoa trôi lỡ làng", "Dã dàn' nướk cảy hoa kôi lỡ làq"],
        ["Ôi Kim Lang! Hỡi Kim Lang!", "Ôi Kim Laq! Hỡi Kim Laq!"],
        ["Thôi thôi thiếp đã phụ chàng từ đây!", "Wôi wôi wiếp dã fụ càq từ dây!"],
        [4545,'4545']
    ]
    data.forEach( a => {
        t.deepEqual(tiengviet(a[0]), a[1]);
    })
})