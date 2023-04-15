function turn_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 85)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 85)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 60)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 60)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 40)
}
function car_downward () {
	
}
function turn_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 60)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 60)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 85)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 85)
}
basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 1) {
        turn_right()
    } else if (mecanumRobot.LineTracking(LT.Left) == 1 && mecanumRobot.LineTracking(LT.Right) == 0) {
        turn_left()
    } else if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 0) {
        mecanumRobot.state(MotorState.stop)
    } else {
        car_forward()
    }
})
