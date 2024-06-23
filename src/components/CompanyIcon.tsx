import Image from "next/image";

interface IconProps {
  size: number;
}

// TODO: add your company's logo to /public folder at the root and then configure this component here so you can use this icon elsewhere in your app
const CompanyIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <div>
      <Image
        src="/boilerbase-icon.png"
        alt="Boilerbase Icon"
        width={size}
        height={size}
        className="dark:invert"
      />
    </div>
  );
};

export default CompanyIcon;
