'use client';

import { m } from 'framer-motion';

import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { lerp } from '@/shared/utils/math';
import { useModalState } from '@/shared/hooks/use-modal-state';
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
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { cn } from '@/shared/cn';

interface WanderOBJProps extends React.PropsWithChildren {
  text: string;
  translation: string;
  submitText?: string;
  onSubmit: VoidFunction;
}

function WanderOBJ({ text, submitText, translation, children, onSubmit }: WanderOBJProps) {
  const state = useModalState();
  const imgRef = React.useRef<HTMLDivElement>(null);
  // ANIMATE
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  // STYLING
  const [opacity, setOpacity] = React.useState(1);
  const [durationState, setDuration] = React.useState(0);
  const [centered, setCentered] = React.useState(false);
  // INTERACTIONS
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (isClicked) return;

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
  }, [isClicked, centered]);

  // center when clicked
  React.useEffect(() => {
    if (!isClicked || !imgRef.current) return;
    const { height } = imgRef.current.getBoundingClientRect();
    setDuration(0);
    let timerId: number;
    let targetPosition = {
      x: 0,
      // 0 is center of screen, 48 is header's height
      y: 0 - height * 0.5 - 48,
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
  }, [isClicked]);

  return (
    <Dialog open={state.isOpen} onOpenChange={(open) => (!open ? state.close() : undefined)}>
      <DialogTrigger asChild>
        <m.div
          ref={imgRef}
          role="presentation"
          onClick={() => {
            if (!isClicked) {
              state.open();
              setIsClicked(true);
            }
          }}
          className={`absolute cursor-pointer ${isClicked ? 'z-[101] scale-110 brightness-150' : ''}`}
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

      <DialogPortal data-slot="dialog-portal">
        {/* <DialogPrimitive.Overlay
          className={cn(
            'fixed top-0 right-0 bottom-0 left-0 z-50',
            'bg-black/50',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0'
          )}
        /> */}
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className={cn(
            'z-50',
            'fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
            'flex flex-col gap-4',
            // 'shadow-lg',
            'duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'
          )}
        >
          <DialogHeader>
            <DialogTitle className="text-center">{text}</DialogTitle>
            <DialogDescription className="text-center">{translation}</DialogDescription>
          </DialogHeader>

          <Button onClick={() => onSubmit()}>
            <pre>
              {`스토리 보기\n`}
              {submitText}
            </pre>
          </Button>
          <DialogFooter className="justify-center sm:justify-center">
            <DialogClose asChild>
              <Button
                onClick={() => {
                  setTimeout(() => {
                    state.close();
                    setIsClicked(false);
                  }, 100);
                }}
                size="icon"
                variant="outline"
                className="rounded-full bg-transparent text-white hover:bg-white hover:text-black"
              >
                <XIcon className="size-4" />
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

WanderOBJ.displayName = 'WanderOBJ';

export default WanderOBJ;
