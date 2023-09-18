import React from 'react';
import { useForm, Controller } from 'react-hook-form';

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
              return <input {...innerField} type={field.type} placeholder={field.placeholder} />;
            }}
          />
          {errors[field.name] && <p className="error-message">{errors[field.name].message}</p>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};