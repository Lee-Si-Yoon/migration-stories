'use client';

import { m } from 'framer-motion';

import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { Year } from '@/features/routes';

import { lerp } from '@/shared/utils/math';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';
import { cn } from '@/shared/cn';

interface WanderOBJProps extends React.PropsWithChildren {
  text: string;
  translation: string;
  year: Year;
  onSubmit: VoidFunction;
}

function WanderOBJ({ text, year, translation, children, onSubmit }: WanderOBJProps) {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const imgRef = React.useRef<HTMLDivElement>(null);
  // ANIMATE
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  // STYLING
  const [opacity, setOpacity] = React.useState(1);
  const [durationState, setDuration] = React.useState(0);
  const [centered, setCentered] = React.useState(false);

  React.useEffect(() => {
    if (open) return;

    let timerId: number;
    let direction = Math.random() * Math.PI * 2;
    let velocity = 0.5 + Math.random() * 1;
    const f = () => {
      if (!imgRef.current) return;
      const { x, y, width, height } = imgRef.current.getBoundingClientRect();
      if (x + width < 0 || x > window.innerWidth || y + height < 0 || y > window.innerHeight) {
        setOpacity(0);
        setPosition({ x: 0, y: 0 });
        setCentered(true);
      } else {
        if (centered) {
          setOpacity((prevOpacity) => lerp(prevOpacity, 1, 0.05));
          if (opacity > 0.95) {
            setCentered(false);
          }
        }
        setPosition((pos) => ({
          x: pos.x + Math.sin(direction) * velocity,
          y: pos.y + Math.cos(direction) * velocity,
        }));
      }

      timerId = requestAnimationFrame(f);
    };
    timerId = requestAnimationFrame(f);

    return () => cancelAnimationFrame(timerId);
  }, [open, centered]);

  // center when clicked
  React.useEffect(() => {
    if (!open || !imgRef.current) return;
    const { height } = imgRef.current.getBoundingClientRect();
    setDuration(0);
    let timerId: number;
    let targetPosition = {
      x: 0,
      // 0 is center of screen, 48 is header's height
      y: 0 - height * 0.4,
    };
    const f = () => {
      setPosition((pos) => ({
        x: lerp(pos.x, targetPosition.x, 0.05),
        y: lerp(pos.y, targetPosition.y, 0.05),
      }));
      timerId = requestAnimationFrame(f);
    };
    timerId = requestAnimationFrame(f);
    return () => cancelAnimationFrame(timerId);
  }, [open]);

  return (
    <>
      <div ref={setContainer} />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <m.div
            ref={imgRef}
            role="presentation"
            onClick={() => {
              if (!open) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
            className={cn('fixed', open ? 'z-101 scale-110 border-none brightness-150' : '')}
            transition={{ duration: durationState }}
            animate={{
              x: position.x,
              y: position.y,
              opacity: opacity,
            }}
          >
            {children}
          </m.div>
        </DialogTrigger>

        <DialogPortal data-slot="dialog-portal" container={container}>
          <DialogPrimitive.Overlay
            className={cn(
              'z-50',
              'fixed inset-0',
              'bg-black/50',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0'
            )}
          />
          <DialogPrimitive.Content
            data-slot="dialog-content"
            className={cn(
              'z-50',
              'fixed top-[50%] left-[50%] translate-x-[-50%]',
              'flex flex-col items-center gap-2 md:gap-4',
              'w-full max-w-xl px-4 md:px-0',
              'duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'
            )}
            onEscapeKeyDown={(e) => {
              e.preventDefault();
            }}
            onPointerDownOutside={(e) => {
              e.preventDefault();
            }}
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <DialogHeader>
              <DialogTitle className="text-center text-base font-bold text-white md:text-2xl">
                {text}
              </DialogTitle>
              <DialogDescription className="text-center text-sm font-medium text-gray-400 md:text-xl">
                {translation}
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="mt-6 flex flex-col! items-center gap-6">
              <button
                onClick={() => onSubmit()}
                className={cn(
                  'cursor-pointer',
                  'w-fit px-4 py-4 md:px-8',
                  'rounded-xl bg-gray-400',
                  'text-base leading-tight font-semibold text-black md:text-xl',
                  'active:scale-95'
                )}
              >
                <pre>{`스토리 보기\n`}</pre>
                {year === '23' && (
                  <span className="text-sm font-medium md:text-base">смотреть на историю</span>
                )}
              </button>

              <DialogClose asChild>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      setOpen(false);
                    }, 100);
                  }}
                  className={cn(
                    'cursor-pointer',
                    'flex items-center justify-center',
                    'size-12 rounded-full',
                    'border border-white bg-transparent',
                    'text-white hover:bg-white hover:text-black',
                    'active:scale-95'
                  )}
                >
                  <XIcon className="size-6" />
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </>
  );
}

WanderOBJ.displayName = 'WanderOBJ';

export default WanderOBJ;
