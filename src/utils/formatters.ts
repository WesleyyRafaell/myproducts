/* eslint-disable no-prototype-builtins */

export function formatStrapiResponse(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => formatStrapiResponse(item))
  }

  if (typeof obj === 'object' && obj !== null) {
    if (obj.hasOwnProperty('data')) {
      return formatStrapiResponse(obj.data)
    } else if (obj.hasOwnProperty('attributes')) {
      return formatStrapiResponse(obj.attributes)
    } else {
      const result: any = {}
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = formatStrapiResponse(obj[key])
        }
      }
      return result
    }
  }

  return obj
}

export const formatCurrency = (price: string) => {
  const value = parseInt(price)

  let formattedValue = (value / 100)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')

  formattedValue = formattedValue.replace('.', ',')

  return 'R$ ' + formattedValue
}
