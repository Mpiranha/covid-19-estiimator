window.onload = () => {
  const button = document.querySelector('[data-go-estimate]');
  const population = document.querySelector('[data-population]');
  const timeToElapse = document.querySelector('[data-time-to-elapse]');
  const reportedCases = document.querySelector('[data-reported-cases]');
  const totalHospitalBeds = document.querySelector('[data-total-hospital-beds]');
  const periodType = document.querySelector('[data-period-type]');
  const data = {
    region: {}
  };

  button.addEventListener('click', (event) => {
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
    }
  });
};
