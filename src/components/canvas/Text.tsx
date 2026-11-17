import React from 'react';
import { Text as DreiText } from '@react-three/drei';

type Props = React.ComponentProps<typeof DreiText>;

// fuente local para que la escena funcione sin internet
export const Text: React.FC<Props> = (props) => (
  <DreiText font="/fonts/DejaVuSans.ttf" {...props} />
);
