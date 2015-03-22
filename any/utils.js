function getDayTime() {
    return world.getTime() % 24000
}

function sayTime() {
    npc.say(getDayTime())
}
