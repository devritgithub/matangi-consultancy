
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChartBar, 
  Building, 
  Share, 
  Utensils 
} from "lucide-react";

type BusinessCardProps = {
  title: string;
  description: string;
  type: "finance" | "finbudget" | "social" | "food";
  link: string;
};

const BusinessCard = ({ title, description, type, link }: BusinessCardProps) => {
  const icons = {
    finance: <ChartBar size={24} />,
    finbudget: <Building size={24} />,
    social: <Share size={24} />,
    food: <Utensils size={24} />
  };

  const bgColors = {
    finance: "bg-finance-light",
    finbudget: "bg-realestate-light",
    social: "bg-blue-100",
    food: "bg-food-light"
  };

  const textColors = {
    finance: "text-finance",
    finbudget: "text-realestate",
    social: "text-blue-700",
    food: "text-food"
  };

  const buttonColors = {
    finance: "bg-finance hover:bg-blue-800",
    finbudget: "bg-realestate hover:bg-green-800",
    social: "bg-blue-600 hover:bg-blue-800",
    food: "bg-food hover:bg-orange-800"
  };

  return (
    <div className={`business-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl ${bgColors[type]} bg-opacity-20 p-6`}>
      <div className={`${textColors[type]} mb-4 flex justify-center`}>
        {icons[type]}
      </div>
      <h3 className={`text-xl font-bold mb-3 ${textColors[type]}`}>{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link to={link}>
        <Button className={`w-full ${buttonColors[type]} text-white`}>
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default BusinessCard;
