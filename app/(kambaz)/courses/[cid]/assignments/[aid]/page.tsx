"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const isNew = aid === "new";
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === aid),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: cid },
  );
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const router = useRouter();
  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: cid });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
        <p id="wd-ai-assignment-id" className="mt-1 mb-0 text-sm text-neutral-600">
          Assignment id: {isNew ? "new" : aid}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={6}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
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
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
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
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
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
                value={assignment.available}
                onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
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
                value={assignment.until ?? ""}
                onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
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
        {canEdit && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded border border-red-600 bg-red-600 px-4 py-1.5 text-sm text-white no-underline"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
