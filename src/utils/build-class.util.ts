export function buildClassesFromProps(base: string, fromProps: Record<string, string | undefined>): string {
  return Object.values(fromProps).reduce((classes, value) => {
    if (value) {
      classes.push(`${base}-${value}`)
    }
    return classes
  }, [base]).join(' ')
}
