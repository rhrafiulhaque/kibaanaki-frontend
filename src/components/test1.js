import React, { useState } from "react";

function ProductForm() {
  const [features, setFeatures] = useState([]);

  function handleAddFeature() {
    setFeatures([...features, { name: "", value: "" }]);
    console.log(features);
  }

  function handleFeatureNameChange(event, index) {
    const newFeatures = [...features];
    newFeatures[index].name = event.target.value;
    setFeatures(newFeatures);
  }

  function handleFeatureValueChange(event, index) {
    const newFeatures = [...features];
    newFeatures[index].value = event.target.value;
    setFeatures(newFeatures);
  }

  return (
    <div>
      <h2>Add Product Features</h2>
      {features.map((feature, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Feature Name"
            value={feature.name}
            onChange={(event) => handleFeatureNameChange(event, index)}
          />
          <input
            type="text"
            placeholder="Feature Value"
            value={feature.value}
            onChange={(event) => handleFeatureValueChange(event, index)}
          />
        </div>
      ))}
      <button onClick={handleAddFeature}>Add Feature</button>
    </div>
  );
}
export default ProductForm;