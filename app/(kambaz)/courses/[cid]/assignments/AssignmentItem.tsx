import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid, aid, title, details, onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete?: () => void;
}) {
  return (
    <li className="wd-assignment-list-item mb-0 flex items-start gap-3 border-t border-l-[3px] border-t-neutral-300 border-l-green-700 px-3 py-3">
      <FaFileAlt className="mt-1 shrink-0 text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline hover:underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      {onDelete && (
        <FaTrash
          className="wd-delete-assignment-click mt-1 shrink-0 cursor-pointer text-red-600"
          onClick={onDelete}
          title="Delete assignment"
        />
      )}
    </li>
  );
}
