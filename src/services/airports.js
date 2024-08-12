const apiUrl = import.meta.env.VITE_URL_API_COLOMBIA;

export const getAirportsByDepartmentAndCity = async () => {
  const prev = new Date().getTime();
  const response = await fetch(`${apiUrl}/Airport`);
  const next = new Date().getTime();
  const airports = await response.json();

  const totalAirports = airports.length;

  const groupedByDepartmentCity = airports.reduce((acc, airport) => {
    const { department, city } = airport;
    const { name: departmentName } = department;
    const { name: cityName } = city;

    if (!acc[departmentName]) {
      acc[departmentName] = { airportsTotal: 0, cities: {} };
    }
    if (!acc[departmentName].cities[cityName]) {
      acc[departmentName].cities[cityName] = { count: 0, airports: [] };
    }
    acc[departmentName].cities[cityName].count++;
    acc[departmentName].cities[cityName].airports.push(airport);

    acc[departmentName].airportsTotal++;

    return acc;
  }, {});

  return {
    totalAirports,
    airports,
    groupedByDepartmentCity,
    time: new Date(next - prev).getMilliseconds(),
  };
};

export const getAirportsByRegionDepartmentCityType = async () => {
  const prev = new Date().getTime();
  const [airportResponse, regionResponse] = await Promise.all([
    fetch(`${apiUrl}/Airport`),
    fetch(`${apiUrl}/Region`),
  ]);
  const next = new Date().getTime();

  const airports = await airportResponse.json();
  const regions = await regionResponse.json();

  const regionDictionary = regions.reduce((acc, region) => {
    acc[region.id] = region.name;
    return acc;
  }, {});

  const groupedByRegionDeptCityType = airports.reduce((acc, airport) => {
    const { department, city, type } = airport;
    const { name: departmentName, regionId } = department;
    const { name: cityName } = city;

    const regionName = regionDictionary[regionId];

    if (!acc[regionName]) {
      acc[regionName] = {};
    }
    if (!acc[regionName][departmentName]) {
      acc[regionName][departmentName] = {};
    }
    if (!acc[regionName][departmentName][cityName]) {
      acc[regionName][departmentName][cityName] = {};
    }
    if (!acc[regionName][departmentName][cityName][type]) {
      acc[regionName][departmentName][cityName][type] = 0;
    }
    acc[regionName][departmentName][cityName][type]++;

    return acc;
  }, {});

  return {
    groupedByRegionDeptCityType,
    time: new Date(next - prev).getMilliseconds(),
  };
};
