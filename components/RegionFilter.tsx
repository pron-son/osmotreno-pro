export function RegionFilter({ selected, onChange, regions }: {
    selected: string;
    onChange: (val: string) => void;
    regions: string[];
  }) {
    return (
      <select
        className="border px-3 py-2 rounded"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Все регионы</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    );
  }