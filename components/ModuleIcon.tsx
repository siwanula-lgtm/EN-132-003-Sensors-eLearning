import {
  Activity,
  Cpu,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Move,
  Radar,
  Sun,
  Thermometer,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Cpu,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Move,
  Radar,
  Sun,
  Thermometer,
  Wifi,
};

export default function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
