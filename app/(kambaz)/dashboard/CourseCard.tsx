import Link from "next/link";
import Image from "next/image";
import { useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore, isEnrolled } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function CourseCard({
  course,
  onEdit,
}: {
  course: Course;
  onEdit: () => void;
}) {
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const enrolled = currentUser
    ? isEnrolled(enrollments, currentUser._id, course._id)
    : false;
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={course.image}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-base font-semibold text-blue-700">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-12 overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Go
          </button>
          <button
            type="button"
            id="wd-edit-course-click"
            className="ms-2 inline-flex items-center rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            onClick={(event) => {
              event.preventDefault();
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            id="wd-delete-course-click"
            className="ms-2 inline-flex items-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
          >
            Delete
          </button>
          {currentUser && (
            <button
              type="button"
              className={`mt-2 block rounded px-3 py-1.5 text-sm font-medium text-white ${
                enrolled ? "wd-unenroll-course-click bg-red-600" : "wd-enroll-course-click bg-green-600"
              }`}
              onClick={(event) => {
                event.preventDefault();
                if (enrolled) {
                  unenroll(currentUser._id, course._id);
                } else {
                  enroll(currentUser._id, course._id);
                }
              }}
            >
              {enrolled ? "Unenroll" : "Enroll"}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}
