type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
};

export default function Logo({ size = 'md', withText = true }: LogoProps) {
  const dim = size === 'sm' ? 28 : size === 'lg' ? 120 : 36;
  const text = size === 'lg' ? 'text-4xl' : size === 'sm' ? 'text-base' : 'text-xl';

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className="relative flex items-center justify-center rounded-xl neon-orange-border bg-tevexxo-black-soft"
        style={{ width: dim, height: dim }}
      >
        <span
          className="font-display font-extrabold text-tevexxo-orange neon-orange-text"
          style={{ fontSize: dim * 0.5 }}
        >
          T
        </span>
      </div>
      {withText && (
        <span className={`font-display font-bold tracking-tight ${text} text-white`}>
          Tevex<span className="text-tevexxo-orange neon-orange-text">xo</span>
        </span>
      )}
    </div>
  );
}
