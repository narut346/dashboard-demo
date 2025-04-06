export default function Home() {
  const hospitals = [
    { name: 'รพ.พิจิตร', times: [168, 204, 160, 174, 114, 210, 232, 137, 146, 187] },
    { name: 'รพ.สามง่าม', times: [140, 88, 128, 168, 161, 109, 164, 94, 194, 194] },
    { name: 'รพ.โพธิ์ประทับช้าง', times: [47, 76, 111, 50, 115, 111, 65, 100, 76, 90] },
  ];

  const getColor = (minutes) => {
    if (minutes < 60) return 'bg-green-400';
    if (minutes <= 120) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6">⏱️ Dashboard ระยะเวลารอคอย</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">โรงพยาบาล</th>
              {Array.from({ length: 10 }).map((_, i) => (
                <th className="border p-2" key={i}>Day {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hospitals.map((h, i) => (
              <tr key={i}>
                <td className="border p-2 font-medium whitespace-nowrap">🏥 {h.name}</td>
                {h.times.map((t, j) => (
                  <td
                    key={j}
                    className={`border p-2 text-white text-center ${getColor(t)}`}
                  >
                    {t} นาที
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
