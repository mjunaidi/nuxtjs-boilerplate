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

export const dashify=s=>{
  if (typeof(s)==='string'&&s.length>0) {
    const w = s.match(/[A-Za-z][a-z]*/g) || []
    if (Array.isArray(w)&&w.length>0) {
      return w.map(e=>e.toLowerCase()).join('-')
    }
  }
  return ''
}

export const labelify=s=>{
  if (typeof(s)==='object'&&s!==null) {
    return labelify(s.name)
  }
  if (typeof(s)==='string'&&s.length>0) {
    return uncamel(s)
  }
  return ''
}

export const toHex=n=>{
  if (typeof(n)==='number'&&n>0) {
    const s = n.toString(16)
    if (typeof(s)==='string'&&s.length>0) {
      if (s.length===1) {
        return `0${s}`
      }
      if (s.length>=2) {
        return s
      }
    }
  }
  return '00'
}
