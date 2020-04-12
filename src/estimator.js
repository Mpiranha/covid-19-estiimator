
// let demo = {
//     region: {
//         name: "Africa",
//         avgAge: 19.7,
//         avgDailyIncomeInUSD: 5,
//         avgDailyIncomePopulation: 0.71
//     },
//     periodType: "days",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614
// }

const covid19ImpactEstimator = (data) => {


    return {
        data: data,
        impact: {
            currentlyInfected: () => Math.trunc(data.reportedCases * 10),
            infectionsByRequestedTime: () => Math.trunc(this.currentlyInfected * (2 ** factor(data.periodType, data.timeToElapse))),
            severeCasesByRequestedTime: () => Math.trunc(0.15 * this.infectionsByRequestedTime),
            hospitalBedsByRequestedTime: () => Math.trunc((data.totalHospitalBeds * 0.35) - this.severeCasesByRequestedTime),
            casesForICUByRequestedTime: () => Math.trunc(0.05 * this.infectionsByRequestedTime),
            casesForVentilatorsByRequestedTime: () => Math.trunc(0.02 * this.infectionsByRequestedTime),
            dollarsInFlight: () => Math.trunc((this.infectionsByRequestedTime * data.avgDailyIncomePopulation * avgDailyIncomeInUSD) / 30)
        },
        severeImpact: {
            currentlyInfected: () => reportedCases * 50,
            infectionsByRequestedTime: () => Math.trunc(this.currentlyInfected * (2 ** factor(data.periodType, data.timeToElapse))),
            severeCasesByRequestedTime: () => Math.trunc(0.15 * this.infectionsByRequestedTime),
            hospitalBedsByRequestedTime: () => Math.trunc((data.totalHospitalBeds * 0.35) - this.severeCasesByRequestedTime),
            casesForICUByRequestedTime: () => Math.trunc(0.05 * this.infectionsByRequestedTime),
            casesForVentilatorsByRequestedTime: () => Math.trunc(0.02 * this.infectionsByRequestedTime),
            dollarsInFlight: () => Math.trunc((this.infectionsByRequestedTime * data.avgDailyIncomePopulation * avgDailyIncomeInUSD) / 30)
        }
    }
};

const getDay = (periodType, value) => {
    let days = 0;
    if (periodType == "weeks") {
        days = 7 * value;
    } else if (periodType == "months") {
        days = 30 * value;
    } else {
        days = value;
    }

    return days
}

const factor = (periodType, value) => {
    let days = getDay(periodType, value);
    let factor = 0;
    let temp = 0;


    for (let i = 0; i < days; i++) {
        temp += 1;
        if (temp == 3) {
            factor++;
            temp = 0;
        }
    }

    return factor;
}

// 111 111 111 111 1




export default covid19ImpactEstimator;
