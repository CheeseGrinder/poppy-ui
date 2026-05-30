export type Booleanish = boolean | 'true' | 'false' | ''

export type ComponentClass<Prefix extends string, Keys extends string> = {
  [K in Keys]: `${Prefix}-${K}`
}
