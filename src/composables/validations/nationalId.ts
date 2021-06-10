interface NationalIdAndCheckDigit {
  checkDigit: string
  nationalIdWithoutCheckDigit: string
}

export const getNationalIdAndCheckDigit = (
  nationalId: string,
): NationalIdAndCheckDigit => {
  const nationalIdSrtLength = nationalId.length
  const checkDigit = nationalId[nationalIdSrtLength - 1]
  const nationalIdWithoutCheckDigit = nationalId.substring(
    0,
    nationalIdSrtLength - 1,
  )
  return {
    checkDigit,
    nationalIdWithoutCheckDigit,
  }
}

export const nationalIdMultiplication = (nationalId: string): number => {
  const strArr = nationalId.split('')
  let multiplier = 2
  const reducer = (accumulator: number, currentValue: string): number => {
    const multiplication = parseInt(currentValue) * multiplier
    if (multiplier === 7) multiplier = 2
    else multiplier += 1
    return (accumulator += multiplication)
  }
  const sumOfMultipl = strArr.reverse().reduce(reducer, 0)
  return sumOfMultipl
}

export const calculateCheckDigit = (mod11Result: number): string => {
  const checkDigit = 11 - mod11Result
  if (checkDigit === 11) return '0'
  else if (checkDigit === 10) return 'k'
  return checkDigit.toString()
}

/**
 * @param rut {string} Chilean id document, format 21232321k
 * @returns {boolean} True if the id is valid
 */

export const nationalIdValidation = (nationalId: string): boolean => {
  if (!nationalId.length) return false
  const {
    checkDigit,
    nationalIdWithoutCheckDigit,
  } = getNationalIdAndCheckDigit(nationalId)

  const digitsMultiplication = nationalIdMultiplication(
    nationalIdWithoutCheckDigit,
  )

  const mod11Result = digitsMultiplication % 11

  const calculatedCheckDigit = calculateCheckDigit(mod11Result)

  return checkDigit === calculatedCheckDigit
}

export const formatNationalId = (nationalId: string): string => {
  if (!nationalId) return ''
  const {
    checkDigit,
    nationalIdWithoutCheckDigit,
  } = getNationalIdAndCheckDigit(nationalId)
  const nationalIdWithDots = nationalIdWithoutCheckDigit.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  )
  return `${nationalIdWithDots}-${checkDigit}`
}

export const getNationalIdWithoutDotsAndDash = (nationalId: string): string => {
  return nationalId.replace(/\./g, '').replace('-', '')
}
