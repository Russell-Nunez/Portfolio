// Plain <a>/<video>/<iframe> don't get basePath from Next; Link and next/image do.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
