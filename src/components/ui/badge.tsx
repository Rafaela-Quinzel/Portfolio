import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'secondary';
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-2 py-1 text-xs';
  const styles =
    variant === 'secondary'
      ? 'bg-white/10 text-gray-300 border-0'
      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20';

  return <span className={[base, styles, className].join(' ')} {...props} />;
}
