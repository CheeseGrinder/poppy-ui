export function mergeProps<T extends Record<string, any>, U extends Record<string, any>>(
  componentProps: T,
  config: U,
): T & U {
  const cleanProps = Object.fromEntries(Object.entries(componentProps).filter(([_, v]) => v !== undefined))

  return {
    ...config,
    ...cleanProps,
  } as T & U
}
