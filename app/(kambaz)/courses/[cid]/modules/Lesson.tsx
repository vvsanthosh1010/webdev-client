import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson border-t border-l-[3px] border-t-neutral-300 border-l-green-700 px-3 py-3">
      <div className="flex items-center justify-between">
        <span className="wd-title">{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-content mt-2 mb-0 list-disc ps-8">{children}</ul>
    </li>
  );
}
