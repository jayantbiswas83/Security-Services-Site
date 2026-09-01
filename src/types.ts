export type PageType = 'home' | 'services' | 'solutions' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  highlightWord: string;
  highlightColor: 'cyan' | 'lime' | 'magenta' | 'purple';
  subtitle?: string;
  badge?: string;
  description: string;
  details?: string[];
  ctaLabel?: string;
  linkAction?: string;
  statusText?: string;
  imageType: 'ai-security' | 'soc-automation' | 'vulnerability' | 'cloud-fortress' | 'agentic-ai' | 'pen-testing';
}

export interface SolutionTier {
  id: string;
  name: string;
  targetAudience: string;
  tagline: string;
  description: string;
  features: string[];
  deploymentTime: string;
  defenseLevel: string;
  recommendedFor: string[];
}

export interface IndustrySolution {
  id: string;
  name: string;
  iconName: string;
  threatLandscape: string;
  protectionVector: string;
  complianceBadges: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  clearance: string;
  bio: string;
  expertise: string[];
  priorExperience: string;
}

export interface ThreatMetric {
  label: string;
  value: string;
  unit?: string;
  trend: string;
  description: string;
}

export interface GlobalOffice {
  city: string;
  country: string;
  timezone: string;
  status: 'ONLINE' | 'ACTIVE' | '24/7 COMMAND';
  coordinates: string;
  address: string;
}
