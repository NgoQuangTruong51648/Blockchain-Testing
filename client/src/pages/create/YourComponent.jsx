import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
// import image from "./zxc.png"

const YourComponent = () => {
  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
    // ...Thêm các trường input khác
  });
  const componentRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSave = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const image = canvas.toDataURL();
      const link = document.createElement('a');
      link.href = image;
      link.download = 'image1.png';
      link.click();
    });
  };

  return (
    <div>
      <div ref={componentRef}>
        <div>{formValues.input1}</div>
        <div>{formValues.input2}</div>
        {/* <img src={image} alt="Template" /> */}
      </div>
      <form>
        <label>
          Input 1:
          <input
            type="text"
            name="input1"
            value={formValues.input1}
            onChange={handleChange}
          />
        </label>
        <label>
          Input 2:
          <input
            type="text"
            name="input2"
            value={formValues.input2}
            onChange={handleChange}
          />
        </label>
        {/* Thêm các trường input khác tương tự */}
      </form>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default YourComponent;
