interface CharacterIconProps {
  character: "kon" | "pon";
  name: string;
  size?: number;
}

export default function CharacterIcon({
  character,
  name,
  size = 40,
}: CharacterIconProps) {
  const src =
    character === "kon" ? "/assets/kon-icon.webp" : "/assets/pon-icon.webp";

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div
        className="rounded-full overflow-hidden border-2 border-outline"
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          className="object-cover"
        />
      </div>
      <span className="text-xs text-text-sub font-bold">{name}</span>
    </div>
  );
}
