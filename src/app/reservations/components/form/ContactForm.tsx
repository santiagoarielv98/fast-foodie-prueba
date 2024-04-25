import React from "react";

export default function ContactForm() {
  return (
    <div className="row g-1">
      <div className="col-12">
        <label htmlFor="name" className="form-label w-50">
          Name
        </label>
        <label htmlFor="lastName" className="w-50 ps-md-3 d-md-inline d-none">
          LastName
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input type="text" id="name" className="form-control" />
          <input type="text" id="lastName" className="form-control d-md-inline d-none" />
        </div>
      </div>
      <div className="col-12 d-block d-md-none">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input type="text" id="lastName" className="form-control" />
      </div>
    </div>
  );
}
