'use client';

import { useEffect, useState } from 'react';
import { useOverlayTriggerState } from 'react-stately';

import Button from '@/widgets/buttons/button';
import Modal from '@/widgets/modal/modal';
import { VimeoPlayer } from '@/widgets/video-player';

interface VideoPlayerModalProps {
  videoSrc: string;
  videoName: string;
}

export function VideoPlayerModal({ videoSrc, videoName }: VideoPlayerModalProps) {
  const state = useOverlayTriggerState({});
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    state.open();
  }, []);

  const handleConfirm = () => {
    state.close();
    setShowVideo(true);
  };

  return (
    <>
      {showVideo && <VimeoPlayer url={videoSrc} title={videoName} showControls autoPlay />}

      <Modal state={state}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="m-0 text-2xl leading-[150%] font-bold text-white">
              이야기를 재생하시겠습니까?
            </h1>
            <h4 className="m-0 mt-2 text-base leading-[140%] font-normal text-white">
              (헤드폰이 있다면 헤드폰을 착용하세요)
            </h4>
          </div>

          <div className="mt-6">
            <Button onPress={handleConfirm} className="px-5 py-2">
              <pre className="m-0 text-center text-base leading-[initial] font-normal text-white">
                네
              </pre>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
