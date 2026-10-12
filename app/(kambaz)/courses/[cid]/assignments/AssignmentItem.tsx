import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

export default function AssignmentItem({
  cid, aid, title, details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item mb-0 flex items-start gap-3 border-t border-l-[3px] border-t-neutral-300 border-l-green-700 px-3 py-3">
      <FaFileAlt className="mt-1 shrink-0 text-green-700" />
      <div>
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline hover:underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
    </li>
  );
}
