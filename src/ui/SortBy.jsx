import Select from "./Select";
import { useUrl } from "../hooks/useUrl";

function SortBy({ options }) {
  const { setUrl, getUrl } = useUrl("sortBy", "");
  function handleChange(value) {
    setUrl(value);
  }

  return (
    <Select
      options={options}
      value={getUrl}
      type="white"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default SortBy;
