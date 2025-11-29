'use client';

import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { usePDFViewer } from './pdf-viewer-provider';

export function ScaleAdjuster() {
  const { scale, setScale } = usePDFViewer();

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => setScale(scale - 0.1)} variant="outline-transparent">
        <Minus className="size-4" />
      </Button>
      <p className="text-sm">{Math.round(scale * 100)}%</p>
      <Button onClick={() => setScale(scale + 0.1)} variant="outline-transparent">
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
