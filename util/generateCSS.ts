export const generateCSS = (
  component: any,
  properties: string[],
  modifiers: string[],
  pseudoClasses: string[]
): string => {
  // const map = new Map()
  // const mapPrimary = new Map()

  // if (window.getComputedStyle(document.documentElement).getPropertyValue('--button-background')) {
  //   map.set('background', 'var(--button-background)')
  // }

  // if (window.getComputedStyle(document.documentElement).getPropertyValue('--button-color')) {
  //   map.set('color', 'var(--button-color)')
  // }

  //.primary
  // if (
  //   window
  //     .getComputedStyle(document.documentElement)
  //     .getPropertyValue('--button-background--primary')
  // ) {
  //   mapPrimary.set('background', 'var(--button-background--primary)')
  // }

  let cssString = ''

  const getPropertyValue = (propertie: string) =>
    window.getComputedStyle(document.documentElement).getPropertyValue(propertie)

  properties.forEach((propertie) => {
    if (getPropertyValue(`--${component}-${propertie}`)) {
      cssString += `${propertie}: var(--${component}-${propertie}); `
    }
  })

  modifiers.forEach((modifier) => {
    cssString += ` &.${modifier}{`
    properties.forEach((propertie) => {
      if (
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`--${component}_${modifier}-${propertie}`)
      ) {
        cssString += `${propertie}: var(--${component}_${modifier}-${propertie}); `
      }
    })
    cssString += `}`
    console.log(cssString)
  })

  //cssString += '&.primary { background: var(--button_primary-background); }'

  // pseudoClasses.forEach((pseudoClasse) => {
  //   if (
  //     window
  //       .getComputedStyle(document.documentElement)
  //       .getPropertyValue(`--${component}-${propertie}`)
  //   ) {
  //     cssString += `${propertie}: var(--${component}-${propertie});`
  //   }
  // })

  //   if (window.getComputedStyle(document.documentElement).getPropertyValue('--button-background')) {
  //     cssString += 'background: var(--button-background);'
  //   }

  //   if (window.getComputedStyle(document.documentElement).getPropertyValue('--button-color')) {
  //     cssString += 'color: var(--button-color);'
  //   }

  // if (primary) {
  //   cssString += '&.primary {'

  //   if (
  //     window
  //       .getComputedStyle(document.documentElement)
  //       .getPropertyValue('--button-background--primary')
  //   ) {
  //     cssString += 'background: var(--button-background--primary);'
  //   }

  //   cssString += '}'
  //   //console.log(cssString)
  // }

  //console.log(JSON.stringify(map) + '.primary {' + Object.fromEntries(mapPrimary) + '}')

  return cssString
}
