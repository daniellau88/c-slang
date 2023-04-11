import { ProgramType } from '../typings'
import { ArithmeticType, getBaseTypePromotionPriority } from './arithmeticUtils'
import { isArray, isBaseType, isPointer, isTypeEquivalent } from './typeUtils'
import { binaryToInt, intToBinary } from './utils'

export const convertValueToType = (
  val: number,
  valType: ProgramType,
  newType: ProgramType,
): [number, boolean] => {
  let isChanged = false
  if (!isTypeEquivalent(valType, newType)) {
    isChanged = true
    if (valType.length === 0) {
    } // If value's type is unknown, use address's type
    else {
      // BaseType to BaseType
      if (isArray(newType)) {
        throw new Error('Cannot convert type')
      }
      if (isBaseType(newType) && isBaseType(valType)) {
        const newArithmeticType = getBaseTypePromotionPriority(newType)
        const valArithmeticType = getBaseTypePromotionPriority(valType)

        const maxPriority = Math.max(newArithmeticType, valArithmeticType)
        // Integer to Float
        if (valArithmeticType < maxPriority) {
          // change from integer binary to float binary
          val = binaryToInt(val)
        }
        // Float to Integer
        if (newArithmeticType < maxPriority) {
          val = intToBinary(Math.trunc(val))
        }
      } 
      // BaseType to Non BaseType
      else if (!isBaseType(newType) && isBaseType(valType)) {
        const valArithmeticType = getBaseTypePromotionPriority(valType)
        if (valArithmeticType == ArithmeticType.Float) {
          throw new Error('Cannot convert type')
        }
        // integer to non array, OK
      } 
      // Non Basetype to BaseType
      else if (isBaseType(newType) && !isBaseType(valType)){
        const newArithmeticType = getBaseTypePromotionPriority(newType)
        if (newArithmeticType == ArithmeticType.Float) {
          // Pointer to Float
          val = binaryToInt(val)
        }
        // Pointer to Integer, OK
      } 
      // non BaseType to nonBaseType (Pointer to Pointer or Array to Pointer)
      else {
        // OK
      }
    }
  }
  return [val, isChanged]
}
