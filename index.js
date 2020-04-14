/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-arrow-callback
// eslint-disable-next-line no-undef

// let http = require('http');

// // eslint-disable-next-line func-names
// var express = require('express');
// var app = express();
// var path = require('path');

// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.listen(8080);

$(document).ready(() => {
  const button = $('[data-go-estimate]');
  const population = $('[data-population]');
  const timeToElapse = $('[data-time-to-elapse]');
  const reportedCases = $('[data-reported-cases]');
  const totalHospitalBeds = $('[data-total-hospital-beds]');
  const periodType = $('[data-period-type]');
  const data = {
    region: {}
  };


  button.on('click', (event) => {
    event.preventDefault();

    if (population.length > 0 && timeToElapse.length > 0
      && reportedCases.length > 0 && totalHospitalBeds.length > 0
      && periodType != null) {
      data.population = population.val();
      data.timeToElapse = timeToElapse.val();
      data.reportedCases = reportedCases.val();
      data.totalHospitalBeds = totalHospitalBeds.val();
      data.periodType = periodType.val();
      data.region.avgDailyIncomePopulation = 0.5;
      data.region.avgDailyIncomeInUSD = 1.5;


      console.log(covid19ImpactEstimator(data));
    }
  });
});
