let IRL = 0
let IRR = 0
function HardLeft () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.All)
}
function HardRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.All)
}
function Softleft () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
}
function Turn () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
}
function AllAhead () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}
function SoftRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
}
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    IRL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    IRR = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (IRL == 0 && IRR == 0) {
        AllAhead()
    } else if (IRL == 0) {
        Softleft()
    } else if (IRR == 0) {
        SoftRight()
    } else if (IRL == 1 && IRR == 1) {
        Turn()
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
