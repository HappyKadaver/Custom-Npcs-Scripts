function ROAM_LOCATIONS() {
    spawn = getWorldLocations().spawn;

    return [
        new RoamPoint(spawn.wet, {startTime:0, endTime: 750}),
        new RoamPoint(spawn.sandy, {startTime:750, endTime: 1500}),
        new RoamPoint(spawn.fishshack, {startTime:1500, stayDuration: 250}),
        new RoamPoint(spawn.dustyDiner, {startTime:1750}),
        new RoamPoint(spawn.dry, {startTime:2250, endTime: 2500}),
        new RoamPoint(spawn.someNameIMadeUp, {startTime:2500, endTime: 24000})
    ]
}
