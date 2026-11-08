import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-5 overflow-hidden rounded-sm border border-neutral-300">
      <div className="wd-title flex items-center justify-between bg-neutral-200 px-3 py-3 font-semibold">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 px-2 py-1"
            defaultValue={module.name}
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateModule({ ...module, editing: false });
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
