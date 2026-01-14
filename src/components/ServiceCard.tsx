import { Star } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  providerName: string;
  providerAvatar: string;
  rating: number;
  price: number;
  category?: string;
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  providerName,
  providerAvatar,
  rating,
  price,
  category,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[var(--skillswap-neutral-200)] overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-[var(--skillswap-neutral-100)] overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        {category && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[var(--skillswap-neutral-700)]">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2">{title}</h3>
        <p className="text-sm text-[var(--skillswap-neutral-600)] mb-4 line-clamp-2">
          {description}
        </p>

        {/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={providerAvatar}
            alt={providerName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-[var(--skillswap-neutral-700)]">{providerName}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--skillswap-neutral-200)]">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[var(--skillswap-warning)] text-[var(--skillswap-warning)]" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg text-[var(--skillswap-teal)]">{price}</span>
            <span className="text-xs text-[var(--skillswap-neutral-500)]">credits/hr</span>
          </div>
        </div>
      </div>
    </div>
  );
}
