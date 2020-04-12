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

const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: () => Math.trunc(data.reportedCases * 10),
    infectionsByRequestedTime: () => Math.trunc(this.currentlyInfected
      * (2 ** factor(data.periodType, data.timeToElapse))),
    severeCasesByRequestedTime: () => Math.trunc(0.15 * this.infectionsByRequestedTime),
    hospitalBedsByRequestedTime: () => Math.trunc((data.totalHospitalBeds * 0.35)
    - this.severeCasesByRequestedTime),
    casesForICUByRequestedTime: () => Math.trunc(0.05 * this.infectionsByRequestedTime),
    casesForVentilatorsByRequestedTime: () => Math.trunc(0.02 * this.infectionsByRequestedTime),
    dollarsInFlight: () => Math.trunc((this.infectionsByRequestedTime
      * data.avgDailyIncomePopulation * data.avgDailyIncomeInUSD) / 30)
  },
  severeImpact: {
    currentlyInfected: () => Math.trunc(data.reportedCases * 50),
    infectionsByRequestedTime: () => Math.trunc(this.currentlyInfected
      * (2 ** factor(data.periodType, data.timeToElapse))),
    severeCasesByRequestedTime: () => Math.trunc(0.15 * this.infectionsByRequestedTime),
    hospitalBedsByRequestedTime: () => Math.trunc((data.totalHospitalBeds * 0.35)
    - this.severeCasesByRequestedTime),
    casesForICUByRequestedTime: () => Math.trunc(0.05 * this.infectionsByRequestedTime),
    casesForVentilatorsByRequestedTime: () => Math.trunc(0.02 * this.infectionsByRequestedTime),
    dollarsInFlight: () => Math.trunc((this.infectionsByRequestedTime
      * data.avgDailyIncomePopulation * data.avgDailyIncomeInUSD) / 30)
  }
});


export default covid19ImpactEstimator;
