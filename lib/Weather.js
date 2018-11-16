function Weather(){};

Weather.prototype.condition = function() {
    let random = Math.floor(Math.random() * 2);

    return (random === 0) ? 'sunny' : 'stormy';
};

module.exports = Weather;
