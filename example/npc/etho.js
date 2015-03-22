function ROAM_LOCATIONS() {
    return [
        new RoamPoint(new Point(10, 4, 10), {name:"wet", startTime:0, endTime: 750}),
        new RoamPoint(new Point(10, 4, -10), {name:"sandy", startTime:750, endTime: 1500}),
        new RoamPoint(new Point(-10, 4, -10), {name:"Fishshack", startTime:1500, stayDuration: 250}),
        new RoamPoint(new Point(-10, 4, 10), {name:"Dusty Diner", startTime:1750}),
        new RoamPoint(new Point(0, 4, 0), {name:"dry", startTime:2250, endTime: 2500}),
        new RoamPoint(new Point(0, 4, 10), {name:"random", startTime:2500, endTime: 24000})
    ]
}
