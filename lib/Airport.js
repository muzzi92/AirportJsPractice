function Airport() {
    this.hanger = []
};

Airport.prototype.land = function(plane) {
    this.hanger.push(plane);
};

module.exports = Airport;
