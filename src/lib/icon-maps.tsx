import {
  IconBolt,
  IconBot,
  IconCalendarCheck,
  IconCar,
  IconChat,
  IconClock,
  IconCoin,
  IconCreditCard,
  IconDashboard,
  IconFlow,
  IconGlobe,
  IconHeadset,
  IconHeart,
  IconMapPin,
  IconMegaphone,
  IconRoute,
  IconShieldCheck,
  IconStar,
  IconStorefront,
  IconTag,
  IconTrendingUp,
  IconTruck,
  IconUsers,
  IconWaveform,
} from "@/components/icons";

export const serviceIcons: Record<string, typeof IconBot> = {
  "AI Receptionist": IconHeadset,
  "AI Voice Agent": IconWaveform,
  "AI Chatbot": IconChat,
  "CRM & Customer Management": IconUsers,
  "Workflow Automation": IconFlow,
  "AI Appointment Booking": IconCalendarCheck,
  "AI Sales & Marketing Automation": IconMegaphone,
};

export const benefitIcons: Record<string, typeof IconBot> = {
  "Increase Revenue": IconTrendingUp,
  "Reduce Operating Costs": IconCoin,
  "Improve Customer Satisfaction": IconHeart,
  "Save Time": IconClock,
  "Improve Productivity": IconBolt,
  "Operate 24/7": IconGlobe,
};

export const productIcons: Record<string, typeof IconBot> = {
  automate: IconBot,
  marketplace: IconStorefront,
  rides: IconMapPin,
};

export const marketplaceFeatureIcons: Record<string, typeof IconBot> = {
  "Vendor storefronts": IconStorefront,
  "Secure checkout": IconCreditCard,
  "Buyer protection": IconShieldCheck,
  "Ratings & reviews": IconStar,
  "Order & delivery tracking": IconTruck,
  "Seller dashboard": IconDashboard,
};

export const ridesStepIcons: Record<string, typeof IconBot> = {
  "Set your route": IconRoute,
  "Name your fare": IconTag,
  "Drivers respond": IconCar,
  "Ride, rated and tracked": IconStar,
};
