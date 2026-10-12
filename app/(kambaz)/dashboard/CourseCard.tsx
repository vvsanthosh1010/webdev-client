import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  id, title, subtitle, image,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={image}
          width={300}
          height={160}
          alt={title}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="m-0 mb-2 truncate text-base font-semibold text-blue-700">
            {title}
          </h5>
          <p className="wd-dashboard-course-title m-0 mb-3 h-12 overflow-hidden text-sm text-neutral-600">
            {subtitle}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Go
          </button>
        </div>
      </Link>
    </div>
  );
}
