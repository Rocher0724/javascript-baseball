import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "./Validation/index.js";
import { computerRandom } from "./Domain/computer.js";
import { play } from "./Domain/score.js"
// 사용자 입력값 받아오기
class App {

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력하세요.', (input) => {
      this.progressGame(input)

    });
  }
  getUserNumberInput() {
    MissionUtils.Console.readLine('숫자를 입력하세요.', (input) => {
        this.progressGame(input)
      }
    );
  }
  progressGame(userNumberInput) {
    // 정답 검증하기
    try {
      Validation.gameInputValidation(userNumberInput);
    } catch (e) {
      // 검증탈락시 여기서 프로그램 종료
      // 근데 과제에서 원하는게 프로그램종료가 아닐수도 ?
      throw e
    }
    // 이후에 사용하는 userNumberInput 는 검증되었음


    // 정답 가져오기
    const computerInputNumber = computerRandom()
    console.log(computerInputNumber)

    // play는 그냥 연결시켜봤음
    const message = play(computerInputNumber, userNumberInput)
    console.log(message)

    // 이후에 해야할것 : 첫번째 입력 및 첫번째 결과까지 진행한거고 두번째 입력을 받아야함, 근데 루프로 받아야겠죠??
  }
}



const app = new App();
app.play();

export default App;
