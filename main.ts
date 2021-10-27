input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
})
basic.forever(function () {
	
})
