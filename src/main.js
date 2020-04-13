import covid19ImpactEstimator from './estimator';
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-arrow-callback
// eslint-disable-next-line no-undef
$(document).ready(() => {
  const button = $('[data-go-estimate]');
  const population = $('[data-population]');
  const timeToElapse = $('[data-time-to-elapse]');
  const reportedCases = $('[data-reported-cases]');
  const totalHospitalBeds = $('[data-total-hospital-beds]');
  const periodType = $('[data-period-type]');
  const data = {};


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
    }

    console.log(covid19ImpactEstimator(data));
  });
});
