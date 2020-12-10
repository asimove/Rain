function rainPos (X: number, Y: number) {
    led.plot(X, Y)
    basic.pause(300)
    basic.clearScreen()
}
basic.forever(function () {
    rainPos(0, 0)
    rainPos(0, 1)
    rainPos(0, 2)
    // rainPos(0, 3)
    rainPos(0, 4)
    rainPos(1, 0)
    rainPos(1, 3)
    rainPos(1, 4)
    rainPos(2, 3)
    rainPos(2, 4)
    rainPos(3, 0)
    rainPos(3, 3)
})
