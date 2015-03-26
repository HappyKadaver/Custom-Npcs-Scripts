/**
 * Return an Object containing information about every Locations in the world.
 * 
 * I decided to store all information about Locations in the world in a single file so it would be easier to change later since all Npcs
 * will refer to this.
 * 
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
