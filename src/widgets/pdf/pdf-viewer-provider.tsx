'use client';

import { useContext, useState, createContext } from 'react';
import { ViewMode } from './model';

const PDFViewerContext = createContext<{
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  scale: number;
  setScale: (scale: number) => void;
}>({ viewMode: 'click', setViewMode: () => {}, scale: 1, setScale: () => {} });

export function PDFViewerProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>('scroll');
  const [scale, setScale] = useState<number>(1);

  return (
    <PDFViewerContext.Provider value={{ viewMode, setViewMode, scale, setScale }}>
      {children}
    </PDFViewerContext.Provider>
  );
}

export function usePDFViewer() {
  return useContext(PDFViewerContext);
}
