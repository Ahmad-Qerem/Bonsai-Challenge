"use client";
import { useField } from "formik";

interface TextfieldProps {
  label?: string;
  name: string;
}

const Textfield: React.FC<TextfieldProps> = ({ label, name }) => {
  const [field, meta] = useField(name);

  return (
    <div className="input-field  mb-3">
      {label && (
        <label className="form-label m-0 text-nowrap" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={`${meta.touched && meta.error ? "is-invalid" : ""}`}
        id={name}
        {...field}
      />
      {meta.touched && meta.error && (
        <div className="text-danger text-nowrap" style={{ height: 16 }}>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default Textfield;
