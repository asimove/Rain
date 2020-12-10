function rainPos (X: number, Y: number) {
    led.plot(X, Y)
    basic.pause(500)
    basic.clearScreen()
}
basic.forever(function () {
    rainPos(2, 3)
    rainPos(2, 4)
    rainPos(4, 4)
    rainPos(3, 4)
    rainPos(2, 3)
    rainPos(0, 1)
    rainPos(0, 2)
    rainPos(1, 4)
    rainPos(4, 0)
})
