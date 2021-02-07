let start = 78
basic.forever(function () {
    start += -1
    basic.showNumber(start)
    if (start > 16) {
        if (start % 2 == 0) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(1000)
        } else if (start % 2 != 0) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(1000)
        }
    } else {
        start = 78
        basic.showNumber(start)
    }
})
