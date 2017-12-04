function populationGrowth() {
    var totalYearsNeeded=0;
    var startPopulation = 1000;
    var targetPopulaton = 1200;

    var firstYearPopulation = calculatePopulationForYear(startPopulation);
    var secondYearPopulation = calculatePopulationForYear(firstYearPopulation);
    var thirdYearPopulation = calculatePopulationForYear(secondYearPopulation);

    if (firstYearPopulation >= targetPopulaton)
    {
        totalYearsNeeded = 1;
    } else if (secondYearPopulation >= targetPopulaton)
    {
        totalYearsNeeded = 2;
    } else if (thirdYearPopulation >= targetPopulaton)
    {
        totalYearsNeeded = 3;
    }

    return totalYearsNeeded;
}

function calculatePopulationForYear(previousYearPopulation)
{
    var populationCalculated = (previousYearPopulation + ((previousYearPopulation*0.02) + 50));
    console.log("Population previous year:"+previousYearPopulation+" calculated: "+populationCalculated);
    return populationCalculated;
}


console.log(populationGrowth());

