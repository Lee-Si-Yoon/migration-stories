import { WanderBackground } from '@/widgets/wander-background';

export default function Wander22Page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <WanderBackground src="/imgs/wander/2022/wanderBackground.webp" />
      <div className="absolute right-0 bottom-0 left-0 flex h-full items-center justify-center overflow-clip">
        {/* Story objects will be added here */}
      </div>
    </div>
  );
}
