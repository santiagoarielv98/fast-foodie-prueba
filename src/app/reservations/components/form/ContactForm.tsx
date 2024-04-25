import React from "react";

import clsx from "clsx";

export default React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function ContactForm(
  { className, ...rest },
  ref
) {
  return (
    <div className={clsx("row g-1", className)} {...rest} ref={ref}>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name..."
            autoComplete="given-name"
          />
          <input
            type="text"
            id="lastName"
            className="form-control d-none d-md-inline"
            placeholder="Enter your last name..."
            autoComplete="family-name"
          />
        </div>
      </div>
      <div className="col-12 d-md-none d-block mb-2">
        <input type="text" id="lastName-2" className="form-control" placeholder="Enter your last name..." />
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
          />
        </div>
      </div>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-telephone"></i>
          </span>
          <input type="tel" id="phone" className="form-control" placeholder="Enter your phone..." autoComplete="tel" />
        </div>
      </div>
    </div>
  );
});
