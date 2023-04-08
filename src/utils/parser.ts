const unescapeMap = {
  '\\a': 'a',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t',
  '\\v': '\v',
  '\\\\': '\\',
  "\\'": "'",
  '\\"': '"',
  '\\?': '?',
  '\\0': '\0',
}

export const unescapeString = (text: string) => {
  return text.replace(/\\(.)/g, c => unescapeMap[c])
}

export const removeQuotes = (text: string) => {
  return text.substring(1, text.length - 1)
}
