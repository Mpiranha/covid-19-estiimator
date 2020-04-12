
const getDay = (periodType, value) => {
  let days = 0;
  if (periodType === 'weeks') {
    days = 7 * value;
  } else if (periodType === 'months') {
    days = 30 * value;
  } else {
    days = value;
  }

  return days;
};

const factor = (periodType, value) => {
  const days = getDay(periodType, value);
  let factors = 0;
  let temp = 0;


  for (let i = 0; i < days; i += 1) {
    temp += 1;
    if (temp === 3) {
      factors += 1;
      temp = 0;
    }
  }

  return factors;
};

const covid19ImpactEstimator = (data) => {
  // impact
  const currentlyInfected = Math.trunc(data.reportedCases * 10);
  const infectionsByRequestedTime = Math.trunc(currentlyInfected
    * (2 ** factor(data.periodType, data.timeToElapse)));
  const severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = Math.trunc((data.totalHospitalBeds * 0.35)
  - severeCasesByRequestedTime);
  const casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
  const dollarsInFlight = Math.trunc((infectionsByRequestedTime
    * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD) / 30);

  // severeImpact
  const currentlyInfectedSevere = Math.trunc(data.reportedCases * 50);
  const infectionsByRequestedTimeSevere = Math.trunc(currentlyInfectedSevere
    * (2 ** factor(data.periodType, data.timeToElapse)));
  const severeCasesByRequestedTimeSevere = Math.trunc(0.15 * infectionsByRequestedTimeSevere);
  const hospitalBedsByRequestedTimeSevere = Math.trunc((data.totalHospitalBeds * 0.35)
  - severeCasesByRequestedTimeSevere);
  const casesForICUByRequestedTimeSevere = Math.trunc(0.05 * infectionsByRequestedTimeSevere);
  const casesForVentilatorsByRequestedTimeSevere = Math.trunc(0.02
  * infectionsByRequestedTimeSevere);
  const dollarsInFlightSevere = Math.trunc((infectionsByRequestedTimeSevere
  * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD) / 30);
  return {
    data,
    impact: {
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSevere,
      infectionsByRequestedTime: infectionsByRequestedTimeSevere,
      severeCasesByRequestedTime: severeCasesByRequestedTimeSevere,
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTimeSevere,
      casesForICUByRequestedTime: casesForICUByRequestedTimeSevere,
      casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSevere,
      dollarsInFlight: dollarsInFlightSevere
    }
  };
};


export default covid19ImpactEstimator;
