export default function YourForm() {
  return (
    <div id="wd-your-form-section">
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* Text fields */}
        <h5>About me</h5>
        <label htmlFor="wd-your-first-name">First name:</label>
        <input
          id="wd-your-first-name"
          placeholder="First name"
          defaultValue="Santhosh"
          title="Your first name"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name:</label>
        <input
          id="wd-your-last-name"
          placeholder="Last name"
          defaultValue="Velayutham Venugopal"
          title="Your last name"
        />
        <br />
        <label htmlFor="wd-your-student-id">Student ID:</label>
        <input
          type="password"
          id="wd-your-student-id"
          defaultValue="002511135"
          title="Hidden as you type"
        />
        <br />

        {/* Textarea */}
        <h5>Why I am taking this course</h5>
        <label htmlFor="wd-your-bio">Bio:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={5}
          defaultValue="I want to learn how modern web apps are built end to end, from HTML structure to React components and a real backend."
        />

        {/* Radio buttons: two separate groups */}
        <h5>Enrollment</h5>
        <label>Class standing:</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-your-freshman" value="FRESHMAN" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-your-sophomore" value="SOPHOMORE" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-your-junior" value="JUNIOR" />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-your-senior" value="SENIOR" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-your-graduate" value="GRADUATE" defaultChecked />
        <label htmlFor="wd-your-graduate">Graduate</label>
        <br />
        <label>Enrollment status:</label>
        <br />
        <input type="radio" name="radio-status" id="wd-your-full-time" value="FULL_TIME" defaultChecked />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <br />
        <input type="radio" name="radio-status" id="wd-your-part-time" value="PART_TIME" />
        <label htmlFor="wd-your-part-time">Part-time</label>
        <br />

        {/* Checkboxes */}
        <h5>Interests</h5>
        <input type="checkbox" name="check-interests" id="wd-your-chk-javascript" defaultChecked />
        <label htmlFor="wd-your-chk-javascript">JavaScript</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-your-chk-react" defaultChecked />
        <label htmlFor="wd-your-chk-react">React</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-your-chk-databases" />
        <label htmlFor="wd-your-chk-databases">Databases</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-your-chk-ux" />
        <label htmlFor="wd-your-chk-ux">UX design</label>
        <br />

        {/* Dropdowns */}
        <h5>Academics</h5>
        <label htmlFor="wd-your-major">Major:</label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="CE">Computer Engineering</option>
          <option value="IS">Information Systems</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics I want to deepen this term:</label>
        <br />
        <select multiple id="wd-your-topics" defaultValue={["REACT", "NODE"]}>
          <option value="HTML_CSS">HTML and CSS</option>
          <option value="REACT">React</option>
          <option value="NODE">Node.js</option>
          <option value="MONGODB">MongoDB</option>
          <option value="DEPLOYMENT">Deployment</option>
        </select>
        <br />

        {/* Typed fields */}
        <h5>Details</h5>
        <label htmlFor="wd-your-email">School email:</label>
        <input
          type="email"
          id="wd-your-email"
          placeholder="lastname.f@northeastern.edu"
          defaultValue="velayuthamvenugopa.s@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2026}
          max={2035}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date:</label>
        <input
          type="date"
          id="wd-your-start-date"
          defaultValue="2025-09-07"
          min="2015-01-01"
          max="2030-12-31"
        />
        <br />
        <label htmlFor="wd-your-excitement">Excitement about this course (0–10):</label>
        <input
          type="range"
          id="wd-your-excitement"
          min="0"
          max="10"
          defaultValue="8"
        />
        <br />

        {/* Buttons */}
        <button id="wd-your-button-save" type="submit">
          Save
        </button>
        <button id="wd-your-button-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
