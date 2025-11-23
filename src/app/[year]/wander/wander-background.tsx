import Image from 'next/image';

interface WanderBackgroundProps {
  src: string;
}

export function WanderBackground({ src }: WanderBackgroundProps) {
  return (
    <Image
      src={src}
      alt="background"
      fill
      priority
      quality={90}
      sizes="100vw"
      draggable={false}
      className="absolute bottom-0 w-full object-cover [mask-border-mode:alpha]"
    />
  );
}
