const apiUrl = import.meta.env.VITE_URL_API_COLOMBIA;

export const getTouristicAttractionsByDepartmentAndCity = async () => {
  const prev = new Date().getTime();
  const [attractionsResponse, departmentsResponse] = await Promise.all([
    fetch(`${apiUrl}/TouristicAttraction`),
    fetch(`${apiUrl}/Department`),
  ]);
  const next = new Date().getTime();

  const attractions = await attractionsResponse.json();
  const departments = await departmentsResponse.json();

  const departmentDictionary = departments.reduce((acc, department) => {
    acc[department.id] = department.name;
    return acc;
  }, {});

  let totalAttractions = 0;

  const groupedByDepartmentCity = attractions.reduce((acc, attraction) => {
    const { city } = attraction;
    const { name: cityName, departmentId } = city;

    const departmentName = departmentDictionary[departmentId];

    if (!acc[departmentName]) {
      acc[departmentName] = { attractionsTotal: 0, cities: {} };
    }
    if (!acc[departmentName].cities[cityName]) {
      acc[departmentName].cities[cityName] = { count: 0, attractions: [] };
    }

    acc[departmentName].cities[cityName].count++;
    acc[departmentName].cities[cityName].attractions.push(attraction);

    acc[departmentName].attractionsTotal++;

    totalAttractions++;

    return acc;
  }, {});

  return {
    totalAttractions,
    attractions,
    groupedByDepartmentCity,
    time: new Date(next - prev).getMilliseconds(),
  };
};
