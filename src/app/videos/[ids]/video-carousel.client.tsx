'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { VimeoPlayer } from '@/widgets/video-player';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/shared/cn';

import data from './data.json';

type VideoData = typeof data;

export function VideoCarousel({ idsArray }: { idsArray: string[] }) {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handlePrevious = () => {
    api?.scrollPrev();
  };
  const handleNext = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 p-4">
      <Carousel setApi={setApi} className="w-full max-w-7xl">
        <CarouselContent>
          {idsArray.map((id, index) => {
            const videoData = data[id as keyof VideoData];

            return (
              <CarouselItem key={id}>
                <div className="flex flex-col gap-6">
                  <VimeoPlayer
                    url={`https://player.vimeo.com/video/${id}`}
                    variant="inline"
                    autoPlay={false}
                  />
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-2xl font-semibold">{videoData.title}</h2>
                    <p className="text-lg text-gray-400">{videoData.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={handlePrevious}
          className={cn('size-12', current === 1 && 'opacity-50')}
          size="icon"
          variant="outline-transparent"
          rounded="full"
        >
          <ArrowLeft className="size-6" />
        </Button>
        <div className="text-muted-foreground">
          Video {current} of {count}
        </div>
        <Button
          onClick={handleNext}
          className={cn('size-12', current === count && 'opacity-50')}
          size="icon"
          variant="outline-transparent"
          rounded="full"
        >
          <ArrowRight className="size-6" />
        </Button>
      </div>
    </div>
  );
}
