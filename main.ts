let string = 0
input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (string))
})
radio.onReceivedString(function (receivedString) {
    basic.showString("String")
    radio.sendString("" + (string))
})
