radio.setGroup(214)
basic.forever(function () {
    radio.sendNumber(0)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(5000)
    radio.sendNumber(1)
    pins.servoWritePin(AnalogPin.P0, 15)
    basic.pause(5000)
})
basic.forever(function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
