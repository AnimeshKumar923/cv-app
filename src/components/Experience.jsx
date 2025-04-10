export default function Experience() {
  return (
    <>
      <div className="experience">
        <h2>Work Experience</h2>
        <label>
          Company Name: <input type="text" id="company_name" required />
        </label>
        <br />
        <label>
          Position: <input type="text" id="job_position" required />
        </label>
        <br />
        <label>
          Responsibilities: <input type="text" id="responsibilities" required />
        </label>
        <br />
        <h3>Duration</h3>
        <label>
          From: <input type="month" id="date_from" required />
          To: <input type="month" id="date_to" required />
        </label>
      </div>
    </>
  );
}
