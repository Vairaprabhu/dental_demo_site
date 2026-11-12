import { useState } from "react";
import { treatments } from "../data/siteData.js";

function todayAsDateInput() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+() .-]{7,}"
            title="Enter a phone number with at least 7 characters."
            required
          />
        </label>
        <label>
          Treatment you are curious about
          <select name="treatment" defaultValue="">
            <option value="">Not sure yet</option>
            {treatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.slug}>
                {treatment.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preferred date
          <input name="date" type="date" min={todayAsDateInput()} />
        </label>
        <label className="form-message">
          Anything you would like us to know?
          <textarea name="message" rows="4" />
        </label>
      </div>
      <div className="form-submit-row">
        <button className="button button-dark" type="submit">
          Send an enquiry <span aria-hidden="true">↗</span>
        </button>
        <span className="form-required-note">* Required fields</span>
      </div>
      {submitted && (
        <p className="form-feedback" role="status" aria-live="polite">
          Thanks — your enquiry has been submitted in this demo. No appointment is
          confirmed, and your details have not been sent to ORA.
        </p>
      )}
      <p className="form-privacy">
        Demo form only. Information entered here is not stored or transmitted.
      </p>
    </form>
  );
}
