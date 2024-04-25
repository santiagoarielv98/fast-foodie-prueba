import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactSchemaValues } from "../../schemas/contact-schema";

export interface ContactFormProps {
  register: UseFormRegister<ContactSchemaValues>;
  errors?: FieldErrors<ContactSchemaValues>;
}

export default function ContactForm(props: ContactFormProps) {
  const { register, errors } = props;

  return (
    <div className="row g-1">
      <div className="col-12 col-md-6 mb-2 pe-md-0">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input
            type="text"
            id="name"
            className="form-control min-[576px]:!tw-rounded-r-none"
            placeholder="Enter your name..."
            autoComplete="given-name"
            {...register("name")}
          />
        </div>
        {errors?.name && <div className="invalid-feedback d-block">Please enter your name.</div>}
      </div>
      <div className="col-12 col-md-6 mb-2 ps-md-0 z-0">
        <input
          type="text"
          id="lastName-2"
          className="form-control min-[576px]:!tw-rounded-l-none"
          placeholder="Enter your last name..."
          autoComplete="family-name"
          {...register("lastName")}
        />
      </div>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email..."
            autoComplete="email"
            {...register("email")}
          />
        </div>
        {errors?.email && <div className="invalid-feedback d-block">Please enter a valid email.</div>}
      </div>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-telephone"></i>
          </span>
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Enter your phone..."
            autoComplete="tel"
            {...register("phone")}
          />
        </div>
        {errors?.phone && <div className="invalid-feedback d-block">Please enter a valid phone number.</div>}
      </div>
    </div>
  );
}
