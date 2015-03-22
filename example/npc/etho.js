function ROAM_LOCATIONS() {
    return [
        new RoamPoint(new Point(10, 4, 10), {name:"wet", startTime:0, endTime: 500}),
        new RoamPoint(new Point(10, 4, -10), {name:"sandy", startTime:1000, endTime: 2000}),
        new RoamPoint(new Point(-10, 4, -10), {name:"Fishshack", startTime:2000, endTime: 3000}),
        new RoamPoint(new Point(-10, 4, 10), {name:"Dusty Diner", startTime:3000, endTime: 4000}),
        new RoamPoint(new Point(0, 4, 0), {name:"dry", startTime:4000, endTime: 24000}),
        new RoamPoint(new Point(0, 4, 10), {name:"random", startTime:500, endTime: 1000})
    ]
}
