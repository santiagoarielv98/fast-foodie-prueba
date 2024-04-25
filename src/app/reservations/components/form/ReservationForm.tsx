import React from "react";

export default function ReservationForm() {
  return (
    <div className="row g-1">
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-people"></i>
          </span>
          <select id="numberOfPeople" className="form-select">
            <option value=""> Select number of people </option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
            <option value="5">5 persons</option>
            <option value="6">6 persons</option>
          </select>
          <div className="invalid-feedback">Please select the number of people</div>
        </div>
      </div>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-calendar"></i>
          </span>
          <select id="select" className="form-select">
            <option value=""> Select date </option>
            <option value="2024-10-01">October 1, 2024</option>
            <option value="2024-10-02">October 2, 2024</option>
            <option value="2024-10-03">October 3, 2024</option>
            <option value="2024-10-04">October 4, 2024</option>
            <option value="2024-10-05">October 5, 2024</option>
          </select>
          <div className="invalid-feedback">Please select the date</div>
        </div>
      </div>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-clock"></i>
          </span>
          <select id="time" className="form-select">
            <option value=""> Select time</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
          </select>
          <div className="invalid-feedback">Please select the time</div>
        </div>
      </div>
      <div className="col-12 mb-2">
        <div className="input-group">
          <span className="input-group-text align-items-start">
            <i className="bi bi-card-text"></i>
          </span>
          <textarea
            id="name"
            className="form-control"
            placeholder="Comments (optional)"
            maxLength={255}
            rows={3}
          ></textarea>
          <div className="invalid-feedback">Please enter your name</div>
        </div>
      </div>
    </div>
  );
}
