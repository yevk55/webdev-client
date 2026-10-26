import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
      />

      <p id="wd-assignment-id" className="mb-3 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>

      <textarea
        id="wd-description"
        defaultValue={assignment?.description ?? ""}
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
      />

      <br />

      <table>
        <tbody>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                defaultValue={assignment?.points ?? 100}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select
                id="wd-group"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              >
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select
                id="wd-display-grade-as"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              >
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select
                id="wd-submission-type"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              >
                <option>Online</option>
              </select>

              <br />
              <label>Online Entry Options</label>
              <br />

              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />

              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />

              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />

              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />

              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
              <br />
              <br />

              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                type="date"
                id="wd-due-date"
                defaultValue={assignment?.due}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
              <br />
              <br />

              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
              <br />
              <br />

              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                type="date"
                id="wd-available-until"
                defaultValue={assignment?.due}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-ai-editor-notes">Sample notes</label>
            </td>
            <td>
              <textarea
                id="wd-ai-editor-notes"
                className="mb-3 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
                Cancel
              </Link>{" "}
              <Link href={`/courses/${cid}/assignments`} id="wd-save">
                Save
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}