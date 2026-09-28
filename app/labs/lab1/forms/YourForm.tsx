export default function YourForm() {
  return (
    <div id="wd-your-form">
      <h4>Your Form</h4>

      <label htmlFor="wd-text-fields-firstname">First Name: </label>
      <input placeholder="Yevgeniy" id="wd-text-fields-firstname" />
      <br />

      <label htmlFor="wd-text-fields-lastname">Last Name: </label>
      <input placeholder="K" id="wd-text-fields-lastname" />
      <br />

      <label htmlFor="wd-text-fields-password">Password: </label>
      <input
        type="password"
        defaultValue="123@#$asd"
        id="wd-text-fields-password"
      />

      <br />
      <br />

      <label htmlFor="wd-textarea">Bio: </label>
      <br />
      <textarea
        id="wd-textarea"
        cols={30}
        rows={10}
        defaultValue="I am taking this course to learn the foundations of how to build web applications."
      />

      <br />
      <br />

      <label>Class standing: </label>
      <br />
      <input type="radio" name="class-standing" id="wd-radio-freshman" />
      <label htmlFor="wd-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="class-standing" id="wd-radio-sophomore" />
      <label htmlFor="wd-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="class-standing" id="wd-radio-junior" />
      <label htmlFor="wd-radio-junior">Junior</label>
      <br />
      <input type="radio" name="class-standing" id="wd-radio-senior" />
      <label htmlFor="wd-radio-senior">Senior</label>
      <br />
      <br />

      <label>Student type: </label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-fulltime" />
      <label htmlFor="wd-radio-fulltime">Full-time</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-parttime" />
      <label htmlFor="wd-radio-parttime">Part-time</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-nondegree" />
      <label htmlFor="wd-radio-nondegree">Non degree-seeking</label>

      <br />
      <br />

      <label>Interests: </label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-webdev" />
      <label htmlFor="wd-chkbox-webdev">Web Development</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-javascript" />
      <label htmlFor="wd-chkbox-javascript">JavaScript</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-nextjs" />
      <label htmlFor="wd-chkbox-nextjs">Next.js</label>

      <br />
      <br />

      <label htmlFor="wd-select-major">Major: </label>
      <br />
      <select id="wd-select-major" defaultValue="COMPUTERSCIENCE">
        <option value="COMPUTERSCIENCE">Computer Science</option>
      </select>

      <br />
      <br />

      <label htmlFor="wd-select-multiple">Topics to deepen this semester: </label>
      <br />
      <select multiple id="wd-select-multiple" defaultValue={["HTML", "CSS"]}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JAVASCRIPT">JavaScript</option>
        <option value="REACT">React</option>
        <option value="NEXT">Next.js</option>
      </select>

      <br />
      <br />

      <label htmlFor="wd-text-fields-email">Email: </label>
      <input
        type="email"
        placeholder="jdoe@northeastern.edu"
        id="wd-text-fields-email"
      />
      <br />

      <label htmlFor="wd-text-fields-graduation-year">Expected Graduation Year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2026}
        max={2032}
        id="wd-text-fields-graduation-year"
      />
      <br />

      <label htmlFor="wd-text-fields-excitement">Excitement Level: </label>
      <input
        type="range"
        defaultValue="5"
        min={0}
        max={10}
        id="wd-text-fields-excitement"
      />

      <br />
      <br />

      <button id="wd-html-button-save" type="submit">
        Save
      </button>
      <button id="wd-html-button-cancel" type="button">
        Cancel
      </button>
    </div>
  );
}