'use client';

import { BookOpen, Mouse, Tablet } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/shared/cn';

import { usePDFViewer } from './pdf-viewer-provider';

const selectedButtonClass = cn('bg-white text-black');
const activeButtonClass = cn('active:bg-white active:text-black');

export function ModeSelector() {
  const { viewMode, setViewMode } = usePDFViewer();

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => setViewMode('scroll')}
        variant="outline-transparent"
        className={cn(activeButtonClass, viewMode === 'scroll' && selectedButtonClass)}
      >
        <Tablet className="size-4" />
      </Button>
      <Button
        onClick={() => setViewMode('click')}
        variant="outline-transparent"
        className={cn(activeButtonClass, viewMode === 'click' && selectedButtonClass)}
      >
        <Mouse className="size-4" />
      </Button>
      <Button
        onClick={() => setViewMode('book')}
        variant="outline-transparent"
        className={cn(
          activeButtonClass,
          viewMode === 'book' && selectedButtonClass,
          'hidden md:block'
        )}
      >
        <BookOpen className="size-4" />
      </Button>
    </div>
  );
}
