/* eslint-disable jsx-a11y/alt-text */
'use client';

import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string;
  srcDark: string;
};

export default function ThemeImage(props: Props) {
  const { srcLight, srcDark, ...rest } = props;
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'light':
      src = srcLight;
      break;
    case 'dark':
      src = srcDark;
      break;
    default:
      src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      break;
  }

  return (
    <>
      <Image {...rest} src={src} />
    </>
  );
}
