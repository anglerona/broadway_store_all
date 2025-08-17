import { IconType } from "react-icons";

interface FeatureItemProps {
  icon: IconType;
  title: string;
}

export default function FeatureItem({ icon: Icon, title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#06398A] text-3xl">
        <Icon />
      </div>
      <p className="text-gray-700 font-medium">{title}</p>
    </div>
  );
}
