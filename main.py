string = 0

def on_button_pressed_a():
    radio.send_string("" + str((string)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string("String")
    radio.send_string("" + str((string)))
radio.on_received_string(on_received_string)
