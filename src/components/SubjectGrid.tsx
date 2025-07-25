import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calculator,
  Beaker,
  Microscope,
  Globe,
  Users,
  TrendingUp,
  BarChart3,
  Brain,
  Landmark,
  History,
  TreePine,
  Heart,
  Lightbulb,
  Monitor,
  Languages,
  Building,
  CreditCard,
  DollarSign,
  Atom,
  FlaskConical,
  Dna,
  Calculator as MathIcon,
  PieChart,
  Coins,
  Building2,
  TrendingDown,
  Briefcase,
  MapPin,
  Clock,
  Mosque,
  Scale,
  HeartHandshake,
  UserCheck,
  Wheat,
  Sprout,
  BookText,
  Pen,
  Code,
} from "lucide-react";

interface Subject {
  id: string;
  name: string;
  mainSubject: string;
  paper: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SubjectGridProps {
  group: string;
}

export const SubjectGrid = ({ group }: SubjectGridProps) => {
  const navigate = useNavigate();

  const getSubjectIcon = (subject: string) => {
    if (subject.includes("Bangla")) return subject.includes("1st") ? BookText : Pen;
    if (subject.includes("English")) return subject.includes("1st") ? BookOpen : Languages;
    if (subject.includes("ICT")) return Code;
    if (subject.includes("Physics")) return Atom;
    if (subject.includes("Chemistry")) return FlaskConical;
    if (subject.includes("Biology")) return Dna;
    if (subject.includes("Higher Math")) return MathIcon;
    if (subject.includes("Statistics")) return PieChart;
    if (subject.includes("Economics")) return TrendingUp;
    if (subject.includes("Civics")) return Scale;
    if (subject.includes("Islamic History")) return Mosque;
    if (subject.includes("History")) return Clock;
    if (subject.includes("Geography")) return MapPin;
    if (subject.includes("Psychology")) return Brain;
    if (subject.includes("Logic")) return Lightbulb;
    if (subject.includes("Social Work")) return HeartHandshake;
    if (subject.includes("Sociology")) return UserCheck;
    if (subject.includes("Islamic Studies")) return Mosque;
    if (subject.includes("Agriculture")) return Wheat;
    if (subject.includes("Agricultural Education")) return Sprout;
    if (subject.includes("Accounting")) return Calculator;
    if (subject.includes("Management")) return Building2;
    if (subject.includes("Finance")) return Coins;
    if (subject.includes("Marketing")) return Briefcase;
    return BookOpen;
  };

  const subjects: Record<string, Subject[]> = {
    science: [
      { id: "bangla_1st", name: "Bangla 1st Paper", mainSubject: "Bangla", paper: "1st Paper", icon: BookText },
      { id: "bangla_2nd", name: "Bangla 2nd Paper", mainSubject: "Bangla", paper: "2nd Paper", icon: Pen },
      { id: "english_1st", name: "English 1st Paper", mainSubject: "English", paper: "1st Paper", icon: BookOpen },
      { id: "english_2nd", name: "English 2nd Paper", mainSubject: "English", paper: "2nd Paper", icon: Languages },
      { id: "ict", name: "ICT", mainSubject: "ICT", paper: "", icon: Code },
      { id: "physics_1st", name: "Physics 1st Paper", mainSubject: "Physics", paper: "1st Paper", icon: Atom },
      { id: "physics_2nd", name: "Physics 2nd Paper", mainSubject: "Physics", paper: "2nd Paper", icon: Atom },
      { id: "chemistry_1st", name: "Chemistry 1st Paper", mainSubject: "Chemistry", paper: "1st Paper", icon: FlaskConical },
      { id: "chemistry_2nd", name: "Chemistry 2nd Paper", mainSubject: "Chemistry", paper: "2nd Paper", icon: FlaskConical },
      { id: "biology_1st", name: "Biology 1st Paper", mainSubject: "Biology", paper: "1st Paper", icon: Dna },
      { id: "biology_2nd", name: "Biology 2nd Paper", mainSubject: "Biology", paper: "2nd Paper", icon: Dna },
      { id: "higher_math_1st", name: "Higher Math 1st Paper", mainSubject: "Higher Math", paper: "1st Paper", icon: MathIcon },
      { id: "higher_math_2nd", name: "Higher Math 2nd Paper", mainSubject: "Higher Math", paper: "2nd Paper", icon: MathIcon },
      { id: "statistics_1st", name: "Statistics 1st Paper", mainSubject: "Statistics", paper: "1st Paper", icon: PieChart },
      { id: "statistics_2nd", name: "Statistics 2nd Paper", mainSubject: "Statistics", paper: "2nd Paper", icon: PieChart },
    ],
    humanities: [
      { id: "bangla_1st", name: "Bangla 1st Paper", mainSubject: "Bangla", paper: "1st Paper", icon: BookText },
      { id: "bangla_2nd", name: "Bangla 2nd Paper", mainSubject: "Bangla", paper: "2nd Paper", icon: Pen },
      { id: "english_1st", name: "English 1st Paper", mainSubject: "English", paper: "1st Paper", icon: BookOpen },
      { id: "english_2nd", name: "English 2nd Paper", mainSubject: "English", paper: "2nd Paper", icon: Languages },
      { id: "ict", name: "ICT", mainSubject: "ICT", paper: "", icon: Code },
      { id: "economics_1st", name: "Economics 1st Paper", mainSubject: "Economics", paper: "1st Paper", icon: TrendingUp },
      { id: "economics_2nd", name: "Economics 2nd Paper", mainSubject: "Economics", paper: "2nd Paper", icon: TrendingUp },
      { id: "civics_1st", name: "Civics 1st Paper", mainSubject: "Civics", paper: "1st Paper", icon: Scale },
      { id: "civics_2nd", name: "Civics 2nd Paper", mainSubject: "Civics", paper: "2nd Paper", icon: Scale },
      { id: "islamic_history_1st", name: "Islamic History 1st Paper", mainSubject: "Islamic History", paper: "1st Paper", icon: Mosque },
      { id: "islamic_history_2nd", name: "Islamic History 2nd Paper", mainSubject: "Islamic History", paper: "2nd Paper", icon: Mosque },
      { id: "history_1st", name: "History 1st Paper", mainSubject: "History", paper: "1st Paper", icon: Clock },
      { id: "history_2nd", name: "History 2nd Paper", mainSubject: "History", paper: "2nd Paper", icon: Clock },
      { id: "geography_1st", name: "Geography 1st Paper", mainSubject: "Geography", paper: "1st Paper", icon: MapPin },
      { id: "geography_2nd", name: "Geography 2nd Paper", mainSubject: "Geography", paper: "2nd Paper", icon: MapPin },
      { id: "psychology_1st", name: "Psychology 1st Paper", mainSubject: "Psychology", paper: "1st Paper", icon: Brain },
      { id: "psychology_2nd", name: "Psychology 2nd Paper", mainSubject: "Psychology", paper: "2nd Paper", icon: Brain },
      { id: "logic_1st", name: "Logic 1st Paper", mainSubject: "Logic", paper: "1st Paper", icon: Lightbulb },
      { id: "logic_2nd", name: "Logic 2nd Paper", mainSubject: "Logic", paper: "2nd Paper", icon: Lightbulb },
      { id: "social_work_1st", name: "Social Work 1st Paper", mainSubject: "Social Work", paper: "1st Paper", icon: HeartHandshake },
      { id: "social_work_2nd", name: "Social Work 2nd Paper", mainSubject: "Social Work", paper: "2nd Paper", icon: HeartHandshake },
      { id: "sociology_1st", name: "Sociology 1st Paper", mainSubject: "Sociology", paper: "1st Paper", icon: UserCheck },
      { id: "sociology_2nd", name: "Sociology 2nd Paper", mainSubject: "Sociology", paper: "2nd Paper", icon: UserCheck },
      { id: "islamic_studies_1st", name: "Islamic Studies 1st Paper", mainSubject: "Islamic Studies", paper: "1st Paper", icon: Mosque },
      { id: "islamic_studies_2nd", name: "Islamic Studies 2nd Paper", mainSubject: "Islamic Studies", paper: "2nd Paper", icon: Mosque },
      { id: "agriculture_1st", name: "Agriculture 1st Paper", mainSubject: "Agriculture", paper: "1st Paper", icon: Wheat },
      { id: "agriculture_2nd", name: "Agriculture 2nd Paper", mainSubject: "Agriculture", paper: "2nd Paper", icon: Wheat },
    ],
    commerce: [
      { id: "bangla_1st", name: "Bangla 1st Paper", mainSubject: "Bangla", paper: "1st Paper", icon: BookText },
      { id: "bangla_2nd", name: "Bangla 2nd Paper", mainSubject: "Bangla", paper: "2nd Paper", icon: Pen },
      { id: "english_1st", name: "English 1st Paper", mainSubject: "English", paper: "1st Paper", icon: BookOpen },
      { id: "english_2nd", name: "English 2nd Paper", mainSubject: "English", paper: "2nd Paper", icon: Languages },
      { id: "ict", name: "ICT", mainSubject: "ICT", paper: "", icon: Code },
      { id: "accounting_1st", name: "Accounting 1st Paper", mainSubject: "Accounting", paper: "1st Paper", icon: Calculator },
      { id: "accounting_2nd", name: "Accounting 2nd Paper", mainSubject: "Accounting", paper: "2nd Paper", icon: Calculator },
      { id: "management_1st", name: "Management 1st Paper", mainSubject: "Management", paper: "1st Paper", icon: Building2 },
      { id: "management_2nd", name: "Management 2nd Paper", mainSubject: "Management", paper: "2nd Paper", icon: Building2 },
      { id: "finance_banking_1st", name: "Finance 1st Paper", mainSubject: "Finance", paper: "1st Paper", icon: Coins },
      { id: "finance_banking_2nd", name: "Finance 2nd Paper", mainSubject: "Finance", paper: "2nd Paper", icon: Coins },
      { id: "marketing_1st", name: "Marketing 1st Paper", mainSubject: "Marketing", paper: "1st Paper", icon: Briefcase },
      { id: "marketing_2nd", name: "Marketing 2nd Paper", mainSubject: "Marketing", paper: "2nd Paper", icon: Briefcase },
      { id: "agricultural_education_1st", name: "Agricultural Education 1st Paper", mainSubject: "Agricultural", paper: "1st Paper", icon: Sprout },
      { id: "agricultural_education_2nd", name: "Agricultural Education 2nd Paper", mainSubject: "Agricultural", paper: "2nd Paper", icon: Sprout },
      { id: "economics_1st", name: "Economics 1st Paper", mainSubject: "Economics", paper: "1st Paper", icon: TrendingUp },
      { id: "economics_2nd", name: "Economics 2nd Paper", mainSubject: "Economics", paper: "2nd Paper", icon: TrendingUp },
      { id: "statistics_1st", name: "Statistics 1st Paper", mainSubject: "Statistics", paper: "1st Paper", icon: PieChart },
      { id: "statistics_2nd", name: "Statistics 2nd Paper", mainSubject: "Statistics", paper: "2nd Paper", icon: PieChart },
    ],
  };

  const currentSubjects = subjects[group] || [];

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subject/${subjectId}`);
  };

  const getGroupClass = () => {
    switch (group) {
      case "science":
        return "subject-science";
      case "humanities":
        return "subject-humanities";
      case "commerce":
        return "subject-commerce";
      default:
        return "subject-science";
    }
  };

  return (
    <div className="p-4 pb-20">
      <div className="grid grid-cols-3 gap-3">
        {currentSubjects.map((subject) => {
          const Icon = subject.icon;
          return (
            <Button
              key={subject.id}
              variant="ghost"
              onClick={() => handleSubjectClick(subject.id)}
              className={`btn-premium ${getGroupClass()} h-auto p-4 flex flex-col items-center gap-3 hover:scale-105 hover:shadow-md`}
            >
              <Icon className="h-10 w-10 text-primary" />
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground leading-tight">
                  {subject.mainSubject}
                </div>
                {subject.paper && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {subject.paper}
                  </div>
                )}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};