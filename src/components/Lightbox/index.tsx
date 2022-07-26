import React from 'react';
import { THashtags } from 'services';

import { Backdrop, ImageWrapper } from './styles';

interface IProps {
  show: boolean;
  setShow: (show: boolean) => void;
  tweet?: THashtags | null;
}

export const Lightbox: React.FC<IProps> = ({ show, tweet, setShow }) => {

  return (
    <Backdrop show={show} onClick={() => setShow(false)}>
      <ImageWrapper src={tweet?.media.url} onClick={e => e.stopPropagation()}/>
    </Backdrop>
  );
}
