input.onButtonPressed(Button.A, function () {
    radio.sendString("HEEY")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    radio.sendString("hola")
})
basic.forever(function () {
    let string = 0
    basic.showString("" + (string))
})
