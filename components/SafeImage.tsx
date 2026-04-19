"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallback?: React.ReactNode;
}

export default function SafeImage({ fallback, className, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return <>{fallback ?? null}</>;
  }

  return (
    <Image
      {...props}
      className={className}
      onError={() => setError(true)}
    />
  );
}
