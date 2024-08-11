const apiUrl = import.meta.env.VITE_URL_API_COLOMBIA;

export const getPresidentsByPoliticalParty = async () => {
  const prev = new Date().getTime();
  const response = await fetch(`${apiUrl}/President`);
  const next = new Date().getTime();
  const presidents = await response.json();

  const totalPresidents = presidents.length;

  const groupedByParty = presidents.reduce((acc, president) => {
    const party = (president.politicalParty || "Desconocido").toLowerCase();

    if (!acc[party]) {
      acc[party] = { count: 0, presidents: [] };
    }
    acc[party].count++;
    acc[party].presidents.push(president);
    return acc;
  }, {});

  const sortedParties = Object.entries(groupedByParty)
    .sort((a, b) => b[1].count - a[1].count)
    .map(([party, data]) => ({ party, ...data }));

  return {
    totalPresidents,
    sortedParties,
    time: new Date(next - prev).getMilliseconds(),
  };
};
