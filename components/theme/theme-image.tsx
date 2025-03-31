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

  return (
    <>
      {resolvedTheme === 'light' ? (
        <Image {...rest} src={srcLight} />
      ) : (
        <Image {...rest} src={srcDark} />
      )}
    </>
  );
}
