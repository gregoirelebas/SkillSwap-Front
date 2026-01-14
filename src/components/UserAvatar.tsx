interface UserAvatarProps {
  name: string;
  imageUrl: string;
  status?: 'online' | 'offline' | 'busy';
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ name, imageUrl, status, size = 'md' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const statusColors = {
    online: 'bg-[var(--skillswap-success)]',
    offline: 'bg-[var(--skillswap-neutral-400)]',
    busy: 'bg-[var(--skillswap-orange)]',
  };

  const statusSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  return (
    <div className="relative inline-block">
      <img
        src={imageUrl}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-white`}
      />
      {status && (
        <div
          className={`absolute bottom-0 right-0 ${statusSizes[size]} ${statusColors[status]} rounded-full ring-2 ring-white`}
        />
      )}
    </div>
  );
}
