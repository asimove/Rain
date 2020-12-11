let list: number[] = []
function Sun () {
    for (let index = 0; index < 4; index++) {
        images.createImage(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `).showImage(0)
        led.plot(0, 0)
        led.unplot(1, 1)
        led.plot(0, 4)
        led.unplot(1, 3)
        led.plot(4, 4)
        led.unplot(3, 3)
        led.plot(4, 0)
        led.unplot(3, 1)
        basic.pause(500)
    }
    basic.clearScreen()
}
function alarm () {
    list = [0, 1, 2, 4]
    for (let value of list) {
        led.toggle(2, value)
    }
    basic.pause(500)
    basic.clearScreen()
}
function rainPos (X: number, Y: number) {
    led.plot(X, Y)
    basic.pause(300)
    basic.clearScreen()
}
// })
// Sun()
// basic.forever(function () {
// rainPos(0, 0)
// rainPos(0, 1)
// rainPos(0, 2)
// rainPos(0, 4)
// rainPos(1, 0)
// rainPos(1, 3)
// rainPos(1, 4)
// rainPos(2, 2)
// rainPos(2, 3)
// rainPos(2, 4)
// rainPos(3, 0)
// rainPos(3, 3)
// rainPos(4, 1)
// rainPos(4, 3)
// rainPos(4, 4)
basic.forever(function () {
    alarm()
    // led.plot(1, 0)
    // led.plot(2, 0)
    // led.plot(3, 0)
    // led.plot(0, 1)
    // led.plot(1, 2)
    // led.plot(1, 3)
    // led.plot(2, 3)
    // led.plot(3, 3)
    // led.plot(4, 1)
    // led.plot(4, 2)
    // basic.pause(600)
    // led.unplot(1, 0)
    // led.unplot(2, 0)
    // led.unplot(3, 0)
    // led.unplot(0, 1)
    // led.unplot(1, 2)
    // led.unplot(1, 3)
    // led.unplot(2, 3)
    // led.unplot(3, 3)
    // led.unplot(4, 1)
    // led.unplot(4, 2)
    // basic.pause(600)
    // // basic.clearScreen()
    // led.plot(1, 1)
    // led.plot(2, 1)
    // led.plot(3, 1)
    // led.plot(0, 2)
    // led.plot(0, 3)
    // led.plot(1, 4)
    // led.plot(2, 4)
    // led.plot(3, 4)
    // led.plot(4, 2)
    // led.plot(4, 3)
    basic.pause(600)
    basic.clearScreen()
})
