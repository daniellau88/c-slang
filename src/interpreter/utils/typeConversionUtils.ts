import { CannotPerformLossyConversion } from "../../errors/errors";
import { ProgramType } from "../typings";
import { ArithmeticType, getBaseTypePromotionPriority } from "./arithmeticUtils";
import { isBaseType, isTypeEquivalent } from "./typeUtils";
import { binaryToInt, intToBinary } from "./utils";

export const convertValueToType = (val: number, valType: ProgramType, newType: ProgramType): number => {
    if (!isTypeEquivalent(valType, newType)) {
        console.log("valType: ", valType)
        console.log("newType: ", newType)
        if (valType.length === 0) {
        } // If value's type is unknown, use address's type
        else {
            // BaseType to BaseType
            if (isBaseType(newType) && isBaseType(valType)) {
                const newArithmeticType = getBaseTypePromotionPriority(newType)
                const valArithmeticType = getBaseTypePromotionPriority(valType)

                const maxPriority = Math.max(newArithmeticType, valArithmeticType)
                // this means the an Integer is assigned to a Float
                if (valArithmeticType < maxPriority) {
                    // change from integer binary to float binary
                    val = binaryToInt(val)
                }
                //this means a Float is assigned to an Integer
                if (newArithmeticType < maxPriority) {
                    // truncate the float to an integer
                    val = intToBinary(Math.trunc(val))
                }
            } // BaseType to Pointer
            else if (!isBaseType(newType) && isBaseType(valType)) {
                const valArithmeticType = getBaseTypePromotionPriority(valType)
                if (valArithmeticType == ArithmeticType.Float) {
                    throw new Error("Cannot convert type")
                }
                // if its already an integer, then nothing is wrong
            } // Pointer to BaseType
            else {
                const newArithmeticType = getBaseTypePromotionPriority(newType)
                if (newArithmeticType == ArithmeticType.Float) {
                    // Pointer to Float -> change the pointer (integer binary) to float
                    val = binaryToInt(val)
                }
                // if it is Pointer to Integer, nothing is wrong
            }
        }
    }
    return val
}