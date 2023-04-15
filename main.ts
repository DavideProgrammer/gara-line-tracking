function turn_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 15)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 15)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 22)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 22)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 15)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 15)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 15)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 15)
}
function car_downward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 5)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 5)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 5)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 5)
}
function turn_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 22)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 22)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 15)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 15)
}
basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 1) {
        turn_right()
    } else if (mecanumRobot.LineTracking(LT.Left) == 1 && mecanumRobot.LineTracking(LT.Right) == 0) {
        turn_left()
    } else if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 0) {
        car_downward()
    } else {
        car_forward()
    }
})
