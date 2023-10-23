import User from "../Domain/user";
const input = User.userInputValue.userInput

class Validation {

  // 사용자 입력값 유효성 검사
checkUserInput() {
    const input = User.userInputValue.userInput
    if (!this.checkUserInputLength(input)) {
      return false;
    }
    if (!this.checkUserInputIsNumbers(input)) {
      return false;
    }
    if (!this.checkUserInputNumberRange(input)) {
      return false;
    }
    if (!this.checkUserInputIsDiff(input)) {
      return false;
    }
    return true;
    console.log(checkUserInput)

  }

// 숫자 길이 체크 (3자리)
checkUserInputLength (input) {
    if (input.length === 3) {
        return true;
    }
    return false;
}

// 숫자 여부 체크 (숫자)
checkUserInputNumber(input) {
    if(Number.isInterger(input)) {
        return true
    } return false;
} 

// 숫자 범위 체크 (1-9)
checkUserInputRange(input) {
    if (input >=1 && input <= 9) {
        return true
    } return false
} 

// 숫자 모두 다른 숫자인지 체크
checkUserInputIsDiff(input) {
    let uniqueNumber = new Set(input);
    if (uniqueNumber.size === input.length) {
      return true;
    } return false;
  }

}

export default Validation