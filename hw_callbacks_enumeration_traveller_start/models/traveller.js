const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const foundStarts = this.journeys.map((singleJourney) => { return singleJourney.startLocation;
  });
  return foundStarts;
};

Traveller.prototype.getJourneyEndLocations = function() {
  const foundEnds = this.journeys.map((singleJourney) => { return singleJourney.endLocation;
  });
  return foundEnds;
};

Traveller.prototype.getModesOfTransport = function () {
  const foundTransport = this.journeys.map((singleJourney) => {
  return singleJourney.transport;
  });
  return foundTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJByT = this.journeys.filter((singleJourney) => {
    return singleJourney.transport === transport;
  });
  return foundJByT;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJByMinD = this.journeys.filter((singleJourney) => {
  return singleJourney.distance > minDistance;
  });
  return foundJByMinD;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const grandTotal = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
  return grandTotal;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const allModesOfTransport = this.getModesOfTransport();
//   const uniqueTransportArray = allModesOfTransport.filter((singleMode, index) => {
//     return allModesOfTransport.indexOf(singleMode)== index;
//    });
//   return uniqueTransportArray;
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  let listofTransport = [];
  this.journeys.forEach((journey) => {
  if (!listofTransport.includes(journey.transport)) {
    listofTransport.push(journey.transport)
  }
  });
  return listofTransport;
};



module.exports = Traveller;
