/**
 * This function makes the NPC roam around the given Points.
 * @param roamPoints Array of RoamPoints
 */
function roam(roamPoints) {
    //Initialize RoamPoint if it isn't yet
    if(!npc.hasTempData(CURRENT_ROAM_POINT_KEY()))
        goToNextRoamPoint(roamPoints)
    
    currentLocation = npc.getTempData(CURRENT_ROAM_POINT_KEY())
    
    if(currentLocation.isTimeToLeave())
        goToNextRoamPoint(roamPoints)
}

/**
 * This function sends the NPC to the next RoamPoint
 */
function goToNextRoamPoint(roamPoints) {
    next = getNextRoamPoint(roamPoints)
    
    //TODO temp fix if there is no location we should be at go to the first location
    if(!next)
        next = roamPoints[0]
    
    next.goHere()
    npc.setTempData(CURRENT_ROAM_POINT_KEY(), next)
}

/**
 * This Method will change to give a list of all possible RoamLocations.
 *
 * @param roamPoints RoamPoints to choose from
 * @returns {*} The first RoamPoint which isTimeToLeave returns false
 */
function getNextRoamPoint(roamPoints) {
    for(i = 0; i < roamPoints.length; i++)
        if(!roamPoints[i].isTimeToLeave())
            return roamPoints[i]
}

/**
 * Representing a RoamPoint in your world.

 * @param point Point with the coordinates of this RoamPoint.
 * @param options
 *      <ul>
 *          <li>
 *              name
 *              name: Name of the RoamPoint.
 *          </li>
 *          <li>
 *              startTime
 *              startTime: When to go to this RoamPoint.
 *          </li>
 *          <li>
 *              [endTime|stayDuration]
 *              endTime: When to leave this RoamPoint.
 *              stayDuration: How long to stay at this RoamPoint. (endTime = startTime + stayDuration)
 *              If both are specified endTime will be used.
 *              If none is specified the npc will stay for a default time which is specified in 'constants.js'.
 *          </li>
 *      </ul>
 * @constructor
 */
function RoamPoint(point, options) {
    this.point = point
    this.name = options.name

    if(options.hasOwnProperty("startTime"))
        this.startTime = options.startTime
    else {
        printObject(point)
        printObject(options)
        npc.say("RoamPoint does not specify 'startTime' aborting")
        return
    }

    if(options.hasOwnProperty("endTime"))
        this.endTime = options.endTime
    else if(options.hasOwnProperty("stayDuration"))
        this.endTime = this.startTime + options.stayDuration
    else
        this.endTime = this.startTime + DEFAULT_STAY_DURATION()

    /**
     * This functions sets the home of the npc to this location
     */
    this.goHere = function() {
        npc.setHome(this.point.x, this.point.y, this.point.z)

        if(DEBUG) {
            npc.say("Time: " + getDayTime())
            npc.say("My new Home is " + ((this.name) ? this.name + ", it is" : "") + " at " + this.point.x + ", " + this.point.y + ", " + this.point.z)
        }
    }

    /**
     * Determines if it is time to leave this location
     * @returns {boolean} true if it is time to leave otherwise false
     */
    this.isTimeToLeave = function() {
        return getDayTime() < this.startTime || getDayTime() > this.endTime
    }
}

/**
 * Representing a point in 3 Dimensional space
 * @param x coordinate
 * @param y coordinate
 * @param z coordinate
 * @constructor
 */
function Point(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
}
