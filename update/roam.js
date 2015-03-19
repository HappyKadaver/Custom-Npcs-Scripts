function CURRENT_LOCATION_KEY() {
    return "currentLocation"
}

function DEFAULT_STAY_DURATION() {
    return 500
}

function roam(locations) {
    //Initialize Location if it isn't yet
    if(!npc.hasTempData(CURRENT_LOCATION_KEY()))
        goNextLocations(locations)
    
    currentLocation = npc.getTempData(CURRENT_LOCATION_KEY())
    
    if(currentLocation.isTimeToLeave())
        goNextLocations(locations)
}

function goNextLocations(locations) {
    next = getNextLocation(locations)
    
    //TODO temp fix if there is no location we should be at
    if(!next)
        next = locations[0]
    
    next.goHere()
    npc.setTempData(CURRENT_LOCATION_KEY(), next)
}

function getNextLocation(locations) {
    for(i = 0; i < locations.length; i++)
        if(!locations[i].isTimeToLeave())
            return locations[i]
}

function Location(point, options) {
    this.point = point

    this.name = options.name
    this.startTime = options.startTime
    //TODO Use Stay_duration of options first
    this.endTime = this.startTime + DEFAULT_STAY_DURATION()
    this.action = options.action
    
        
    
    this.goHere = function() {
        npc.setHome(this.point.x, this.point.y, this.point.z)

        if(DEBUG) {
            npc.say("Time: " + getDayTime())
            npc.say("My new Home is " + ((this.name) ? this.name + ", it is" : "") + " at " + this.point.x + ", " + this.point.y + ", " + this.point.z)
        }
    }
    
    this.isTimeToLeave = function() {
        return getDayTime() > this.endTime
    }
}

function Point(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
}
