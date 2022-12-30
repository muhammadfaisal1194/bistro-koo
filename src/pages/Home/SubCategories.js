import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";

const SubCategories = ({
  selectedType,
  selectedSubCategories,
  setSelectedType,
}) => {
  return (
    <>
      <div className="d-flex spacing">
        {selectedSubCategories.map((cat) => (
          <div
            onClick={() => {
              setSelectedType(cat._id);
            }}
            class={`tab-drink text-center  ${
              selectedType === cat._id ? "tab-drink-active" : ""
            }`}
          >
            <div>
              <FontAwesomeIcon icon={faWineBottle} />
            </div>
            <div>{cat.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubCategories;
