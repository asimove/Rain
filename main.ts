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
function rainPos (X: number, Y: number) {
    led.plot(X, Y)
    basic.pause(300)
    basic.clearScreen()
}
/**
 * })
 */
Sun()
// basic.forever(function () {
rainPos(0, 0)
rainPos(0, 1)
rainPos(0, 2)
rainPos(0, 4)
rainPos(1, 0)
rainPos(1, 3)
rainPos(1, 4)
rainPos(2, 2)
rainPos(2, 3)
rainPos(2, 4)
rainPos(3, 0)
rainPos(3, 3)
rainPos(4, 1)
rainPos(4, 3)
rainPos(4, 4)
