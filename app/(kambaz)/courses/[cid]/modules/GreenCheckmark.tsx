import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="relative me-1 inline-flex items-center">
      <FaCheckCircle
        className="absolute text-xl text-green-700"
        style={{ top: "2px" }}
      />
      <FaCircle className="text-base text-white" />
    </span>
  );
}
