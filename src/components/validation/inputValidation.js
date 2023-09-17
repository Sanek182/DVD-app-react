import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export const inputValidation = ({ fields, onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.rules}
            render={({ field }) => <input {...field} type={field.type} placeholder={field.placeholder} />}
          />
          {errors[field.name] && <p className="error-message">{errors[field.name].message}</p>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};