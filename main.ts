let strip: neopixel.Strip = null
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
    for (let Index = 0; Index <= 5; Index++) {
        for (let pixel_i = 0; pixel_i <= 30; pixel_i++) {
            if (pixel_i % (Index + 1) == 0) {
                strip.setPixelColor(pixel_i, neopixel.colors(NeoPixelColors.Green))
            } else {
                strip.setPixelColor(pixel_i, neopixel.colors(NeoPixelColors.Blue))
            }
        }
        for (let index = 0; index < 24; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(50)
        }
    }
    strip.showRainbow(1, 360)
    for (let index = 0; index < 200; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.clear()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.clear()
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(80)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(80)
    }
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(70)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(60)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(60)
    }
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(60)
    }
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(1000)
    }
    strip.setBrightness(3000)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
