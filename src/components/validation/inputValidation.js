import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './InputValidation.css'

export const InputValidation = ({ fields, onSubmit }) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.rules}
            render={({ field: innerField }) => {
              if (field.name === 'repeatPassword') {
                field.rules = field.rules || {};
                field.rules.validate = value => value === password || "The passwords do not match";
              }
              if (field.type === 'select') {
                return (
                    <select {...innerField}>
                        <option value="" disabled>Select your country of residence</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Israel">Israel</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Poland">Poland</option>
                        <option value="Romania">Romania</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Ukraine">Ukraine</option>
                    </select>
                );
              }
              if (field.name === 'specificDetails') {
                return <textarea className="custom-textarea" {...innerField}></textarea>;
              }
              return <input className="custom-input" {...innerField} type={field.type} placeholder={field.placeholder} />;
            }}
          />
          {errors[field.name] && <p className="error-message">{errors[field.name].message}</p>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};