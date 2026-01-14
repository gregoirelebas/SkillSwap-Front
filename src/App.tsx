import { Bell, Calendar, MessageSquare, Settings, Star, ChevronRight, Check } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { CreditBadge } from './components/CreditBadge';
import { UserAvatar } from './components/UserAvatar';
import { SkillSwapButton } from './components/SkillSwapButtons';
import { SearchInput } from './components/SearchInput';
import { ProgressRing } from './components/ProgressRing';
import { TimeBarChart } from './components/TimeBarChart';
import { Checkbox } from './components/ui/checkbox';
import { Slider } from './components/ui/slider';
import { useState } from 'react';

export default function App() {
  const [creditValue, setCreditValue] = useState([5]);

  return (
    <div className="min-h-screen bg-[var(--skillswap-neutral-50)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--skillswap-neutral-200)] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--skillswap-teal)] to-[var(--skillswap-teal-light)] rounded-lg flex items-center justify-center text-white">
              SS
            </div>
            <h1>SkillSwap Design System</h1>
          </div>
          <div className="flex items-center gap-4">
            <CreditBadge credits={12} variant="compact" />
            <UserAvatar
              name="Current User"
              imageUrl="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              status="online"
              size="md"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 border border-[var(--skillswap-neutral-200)]">
            <h1 className="mb-3">SkillSwap UI Toolkit</h1>
            <p className="text-[var(--skillswap-neutral-600)] max-w-3xl">
              A comprehensive design system for building modern, accessible web applications. This
              toolkit includes color palettes, typography, buttons, form elements, and reusable
              components optimized for React and Tailwind CSS.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary - Deep Teal */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)]">
              <h4 className="mb-4">Primary - Deep Teal</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-teal-light)] shadow-sm" />
                  <div>
                    <div className="text-sm">Light</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#14B8A6</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-teal)] shadow-sm" />
                  <div>
                    <div className="text-sm">Base</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#0D9488</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-teal-dark)] shadow-sm" />
                  <div>
                    <div className="text-sm">Dark</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#0F766E</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary - Soft Orange */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)]">
              <h4 className="mb-4">Secondary - Soft Orange</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-orange-light)] shadow-sm" />
                  <div>
                    <div className="text-sm">Light</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#FDBA74</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-orange)] shadow-sm" />
                  <div>
                    <div className="text-sm">Base</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#FB923C</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-orange-dark)] shadow-sm" />
                  <div>
                    <div className="text-sm">Dark</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#F97316</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)]">
              <h4 className="mb-4">Semantic Colors</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-success)] shadow-sm" />
                  <div>
                    <div className="text-sm">Success</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#22C55E</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-warning)] shadow-sm" />
                  <div>
                    <div className="text-sm">Warning</div>
                    <div className="text-xs text-[var(--skillswap-neutral-500)]">#FACC15</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neutral Shades */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)] lg:col-span-3">
              <h4 className="mb-4">Neutral Shades</h4>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className="w-full aspect-square rounded-lg shadow-sm"
                      style={{
                        backgroundColor: `var(--skillswap-neutral-${shade})`,
                      }}
                    />
                    <div className="text-xs text-center text-[var(--skillswap-neutral-600)]">
                      {shade}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="mb-6">Typography</h2>
          <div className="bg-white rounded-xl p-8 border border-[var(--skillswap-neutral-200)] space-y-6">
            <div>
              <h1>Heading 1 - The quick brown fox</h1>
              <p className="text-sm text-[var(--skillswap-neutral-500)] mt-1">
                32px / 2rem - Medium weight
              </p>
            </div>
            <div>
              <h2>Heading 2 - The quick brown fox</h2>
              <p className="text-sm text-[var(--skillswap-neutral-500)] mt-1">
                24px / 1.5rem - Medium weight
              </p>
            </div>
            <div>
              <h3>Heading 3 - The quick brown fox</h3>
              <p className="text-sm text-[var(--skillswap-neutral-500)] mt-1">
                20px / 1.25rem - Medium weight
              </p>
            </div>
            <div>
              <h4>Heading 4 - The quick brown fox</h4>
              <p className="text-sm text-[var(--skillswap-neutral-500)] mt-1">
                16px / 1rem - Medium weight
              </p>
            </div>
            <div>
              <p>
                Body text - The quick brown fox jumps over the lazy dog. This is standard paragraph
                text with normal weight and comfortable line height for easy reading.
              </p>
              <p className="text-sm text-[var(--skillswap-neutral-500)] mt-1">
                16px / 1rem - Normal weight
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="mb-6">Buttons</h2>
          <div className="bg-white rounded-xl p-8 border border-[var(--skillswap-neutral-200)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Primary */}
              <div className="space-y-4">
                <h4>Primary</h4>
                <div className="space-y-3">
                  <SkillSwapButton variant="primary">
                    <Calendar className="w-4 h-4" />
                    Book Service
                  </SkillSwapButton>
                  <SkillSwapButton
                    variant="primary"
                    className="hover:bg-[var(--skillswap-teal-dark)]"
                  >
                    Hover State
                  </SkillSwapButton>
                  <SkillSwapButton variant="primary" disabled>
                    Disabled
                  </SkillSwapButton>
                </div>
              </div>

              {/* Secondary */}
              <div className="space-y-4">
                <h4>Secondary</h4>
                <div className="space-y-3">
                  <SkillSwapButton variant="secondary">
                    <Star className="w-4 h-4" />
                    Favorite
                  </SkillSwapButton>
                  <SkillSwapButton
                    variant="secondary"
                    className="hover:bg-[var(--skillswap-orange-dark)]"
                  >
                    Hover State
                  </SkillSwapButton>
                  <SkillSwapButton variant="secondary" disabled>
                    Disabled
                  </SkillSwapButton>
                </div>
              </div>

              {/* Ghost */}
              <div className="space-y-4">
                <h4>Ghost</h4>
                <div className="space-y-3">
                  <SkillSwapButton variant="ghost">
                    <ChevronRight className="w-4 h-4" />
                    Learn More
                  </SkillSwapButton>
                  <SkillSwapButton
                    variant="ghost"
                    className="hover:bg-[var(--skillswap-neutral-50)]"
                  >
                    Hover State
                  </SkillSwapButton>
                  <SkillSwapButton variant="ghost" disabled>
                    Disabled
                  </SkillSwapButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="mb-6">Form Elements</h2>
          <div className="bg-white rounded-xl p-8 border border-[var(--skillswap-neutral-200)] space-y-8">
            {/* Search Bar */}
            <div className="space-y-3">
              <h4>Search Input</h4>
              <SearchInput placeholder="Search for services, skills, or people..." />
            </div>

            {/* Text Input */}
            <div className="space-y-3">
              <h4>Text Input</h4>
              <input
                type="text"
                placeholder="Enter your skill or service"
                className="w-full px-4 py-3 bg-[var(--skillswap-neutral-50)] border border-[var(--skillswap-neutral-200)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--skillswap-teal)] focus:border-transparent transition-all"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <h4>Checkboxes</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="option1" defaultChecked />
                  <label htmlFor="option1" className="text-sm cursor-pointer">
                    Design & Creative
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="option2" />
                  <label htmlFor="option2" className="text-sm cursor-pointer">
                    Programming & Tech
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="option3" />
                  <label htmlFor="option3" className="text-sm cursor-pointer">
                    Business & Marketing
                  </label>
                </div>
              </div>
            </div>

            {/* Range Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4>Credit Range Slider</h4>
                <span className="text-sm text-[var(--skillswap-teal)]">
                  {creditValue[0]} credits/hour
                </span>
              </div>
              <Slider
                value={creditValue}
                onValueChange={setCreditValue}
                max={20}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-[var(--skillswap-neutral-500)]">
                <span>1 credit</span>
                <span>20 credits</span>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <h2 className="mb-6">Components</h2>

          {/* Service Cards */}
          <div className="mb-8">
            <h3 className="mb-4">Service Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Web Design Consultation"
                description="Professional UI/UX design consultation for modern web applications with focus on accessibility and user experience."
                imageUrl="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODI5ODU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                providerName="Sarah Johnson"
                providerAvatar="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                rating={4.9}
                price={8}
                category="Design"
              />
              <ServiceCard
                title="React Development"
                description="Build scalable React applications with modern best practices, TypeScript, and component libraries."
                imageUrl="https://images.unsplash.com/photo-1567641091594-71640a68f847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NjgzODAyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                providerName="Alex Chen"
                providerAvatar="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                rating={5.0}
                price={12}
                category="Development"
              />
              <ServiceCard
                title="Marketing Strategy"
                description="Comprehensive digital marketing strategy planning with analytics, SEO, and social media expertise."
                imageUrl="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODI5ODU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                providerName="Maria Garcia"
                providerAvatar="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                rating={4.8}
                price={10}
                category="Marketing"
              />
            </div>
          </div>

          {/* Other Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Credit Badges */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)] space-y-4">
              <h4>Credit Badges</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-[var(--skillswap-neutral-600)] mb-2">Default</p>
                  <CreditBadge credits={12} />
                </div>
                <div>
                  <p className="text-sm text-[var(--skillswap-neutral-600)] mb-2">Compact</p>
                  <CreditBadge credits={8} variant="compact" />
                </div>
              </div>
            </div>

            {/* User Avatars */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)] space-y-4">
              <h4>User Avatars with Status</h4>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center space-y-2">
                  <UserAvatar
                    name="User 1"
                    imageUrl="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    status="online"
                    size="lg"
                  />
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Online</p>
                </div>
                <div className="text-center space-y-2">
                  <UserAvatar
                    name="User 2"
                    imageUrl="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    status="busy"
                    size="lg"
                  />
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Busy</p>
                </div>
                <div className="text-center space-y-2">
                  <UserAvatar
                    name="User 3"
                    imageUrl="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzNzI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    status="offline"
                    size="lg"
                  />
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Offline</p>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)] space-y-4">
              <h4>Navigation & Notification Icons</h4>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-neutral-100)] flex items-center justify-center hover:bg-[var(--skillswap-teal)] hover:text-white transition-all cursor-pointer">
                    <Bell className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Bell</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-neutral-100)] flex items-center justify-center hover:bg-[var(--skillswap-teal)] hover:text-white transition-all cursor-pointer">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Messages</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-neutral-100)] flex items-center justify-center hover:bg-[var(--skillswap-teal)] hover:text-white transition-all cursor-pointer">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Calendar</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-neutral-100)] flex items-center justify-center hover:bg-[var(--skillswap-teal)] hover:text-white transition-all cursor-pointer">
                    <Settings className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Visualization */}
        <section className="mb-16">
          <h2 className="mb-6">Data Visualization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Progress Rings */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)] space-y-4">
              <h4>Progress Rings</h4>
              <div className="flex items-center justify-around py-4">
                <div className="text-center space-y-2">
                  <ProgressRing progress={75} label="75%" />
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Skills Learned</p>
                </div>
                <div className="text-center space-y-2">
                  <ProgressRing progress={60} label="60%" />
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Profile Complete</p>
                </div>
                <div className="text-center space-y-2">
                  <ProgressRing progress={90} label="90%" />
                  <p className="text-xs text-[var(--skillswap-neutral-600)]">Rating</p>
                </div>
              </div>
            </div>

            {/* Time Bar Chart */}
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)] space-y-4">
              <h4>Time Usage Bar Chart</h4>
              <TimeBarChart
                data={[
                  { label: 'Design', value: 8 },
                  { label: 'Development', value: 12 },
                  { label: 'Marketing', value: 5 },
                  { label: 'Consulting', value: 6 },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="mb-6">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-teal)]/10 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[var(--skillswap-teal)]" />
              </div>
              <h4 className="mb-2">Corner Radius</h4>
              <p className="text-sm text-[var(--skillswap-neutral-600)]">
                Consistent 8-12px border radius for cards and components creating a modern, friendly
                aesthetic.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-orange)]/10 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[var(--skillswap-orange)]" />
              </div>
              <h4 className="mb-2">Subtle Shadows</h4>
              <p className="text-sm text-[var(--skillswap-neutral-600)]">
                Light shadows on hover states provide depth without overwhelming the clean,
                minimalist design.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[var(--skillswap-neutral-200)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--skillswap-success)]/10 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[var(--skillswap-success)]" />
              </div>
              <h4 className="mb-2">Accessible</h4>
              <p className="text-sm text-[var(--skillswap-neutral-600)]">
                WCAG compliant color contrasts and clear visual hierarchy ensure accessibility for
                all users.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--skillswap-neutral-200)] mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-[var(--skillswap-neutral-600)]">
          SkillSwap Design System - Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
