/**
 * Return an Object containing information about every Locations in the world.
 * @returns {{spawn: {wet: Location, sandy: Location, fishshack: Location, dustyDiner: Location, dry: Location, someNameIMadeUp: Location}}}
 */
function getWorldLocations() {
    return {
        spawn: {
            wet: new Location(10, 4, 10, "wet"),
            sandy: new Location(10, 4, -10, "sandy"),
            fishshack: new Location(-10, 4, -10, "fishshack"),
            dustyDiner: new Location(-10, 4, 10, "dustyDiner"),
            dry: new Location(0, 4, 0, "dry"),
            someNameIMadeUp: new Location(0, 4, 10, "SomeNameIMadeUp")
        },

    }
}