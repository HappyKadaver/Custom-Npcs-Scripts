function ROAM_LOCATIONS() {
    return [
        new Location(new Point(10, 4, 10), {name:"wet", startTime:0}),
        new Location(new Point(10, 4, -10), {name:"sandy", startTime:500}),
        new Location(new Point(-10, 4, -10), {name:"Fishshack", startTime:1000}),
        new Location(new Point(-10, 4, 10), {name:"Dusty Diner", startTime:1500}),
        new Location(new Point(0, 4, 0), {name:"dry", startTime:2000})
    ]
}
