export type Booleanish = boolean | 'true' | 'false' | ''

export type ComponentClass<Prefix extends string, Keys extends string> = {
  [K in Keys]: `${Prefix}-${K}`
}

export type CounterFn = (current: number, min?: number, max?: number) => string
