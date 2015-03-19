function getDayTime() {
    return world.getTime() % 24000
}

function printTime() {
    npc.say(getDayTime())
}
