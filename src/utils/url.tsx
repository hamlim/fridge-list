export function toUrl(arg: string): string {
  return arg.replace(/ /g, '-')
}

export function fromUrl(arg: string): string {
  return arg.replace(/-/g, ' ')
}
