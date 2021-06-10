import {
  formatNationalId,
  getNationalIdWithoutDotsAndDash,
  nationalIdValidation,
} from './nationalId'

interface NationalIdValidations {
  useFormatNationalId: (nationalId: string) => string
  useGetNationalIdWithoutDotsAndDash: (nationalId: string) => string
  useNationalIdValidation: (nationalId: string) => boolean
}

export const useNationalIdValidations = (): NationalIdValidations => {
  const useFormatNationalId = formatNationalId
  const useGetNationalIdWithoutDotsAndDash = getNationalIdWithoutDotsAndDash
  const useNationalIdValidation = nationalIdValidation
  return {
    useFormatNationalId,
    useGetNationalIdWithoutDotsAndDash,
    useNationalIdValidation,
  }
}
