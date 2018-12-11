export const toTitleCase=s=>{
  if (typeof(s)==='string'&&s.length>0) {
    return s.charAt(0).toUpperCase().concat(s.slice(1))
  }
  return ''
}

export const uncamel=s=>{
  if (typeof(s)==='string'&&s.length>0) {
    const w = s.match(/[A-Za-z][a-z]*/g) || []
    if (Array.isArray(w)&&w.length>0) {
      for (let i in w) {
        if (i==0) {
          w[i] = toTitleCase(w[i])
        } else {
          w[i] = w[i].toLowerCase()
        }
      }
      return w.join(' ')
    }
  }
  return ''
}
