import { useParams } from "react-router-dom";
import { useEffect } from "react";
export function Process() {
  const { type, id } = useParams();

  useEffect(() => {
    const lastOpened = { type: type, id: id };
    localStorage.setItem("lastOpenProduct", JSON.stringify(lastOpened));
  }, [[type, id]]);
  return (
    <div>
      <h1>
        {type.charAt(0).toUpperCase() + type.slice(1)} #{id}
      </h1>
    </div>
  );
}
