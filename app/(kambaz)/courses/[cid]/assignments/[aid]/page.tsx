import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={6}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
        <label htmlFor="wd-points" className="text-sm md:w-[180px] md:shrink-0 md:text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
        <label htmlFor="wd-group" className="text-sm md:w-[180px] md:shrink-0 md:text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-1.5"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
        <label
          htmlFor="wd-display-grade-as"
          className="text-sm md:w-[180px] md:shrink-0 md:text-right"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-1.5"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-start md:gap-4">
        <label
          htmlFor="wd-submission-type"
          className="text-sm md:w-[180px] md:shrink-0 md:pt-4 md:text-right"
        >
          Submission Type
        </label>
        <div className="w-full rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-1.5"
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-start md:gap-4">
        <div className="text-sm md:w-[180px] md:shrink-0 md:pt-4 md:text-right">Assign</div>
        <div className="w-full rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-1.5"
          />
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2024-05-13"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-1.5"
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <hr />
      <div className="mt-3 flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-1.5 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
