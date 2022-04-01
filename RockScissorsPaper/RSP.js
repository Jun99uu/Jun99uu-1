const rock = document.querySelector("#rock");
const sicssors = document.querySelector("#sicssors");
const paper = document.querySelector("#paper");
const comment = document.querySelector("#comment");
const subtitle = document.querySelector("#subtitle");
const frog = document.querySelector("#frog");
const kill = document.querySelector("#kill");
const mine = document.querySelector("#mine");

const r_val = 0;
const s_val = 1;
const p_val = 2;
let w_val = 0;
const com_val = [
  "ㅋㅋㅋ못이기쥬?개킹받쥬?죽이고싶쥬?근데못죽이쥬?",
  "ㅋㅋㅋ이럴줄앎(휴다행이다)",
  "흑흑죄송합니다..안깝치겠습니다..",
];
const result = [
  "개구리한테..푸흡졌네요..푸핫!😂",
  "개구리랑 비겼네요(쫌치네?)🥱",
  "오 개구리한테 이겼네요😲",
];
const f_val = ["🐸 : 👊", "🐸 : ✌", "🐸 : 🖐"];

const frogRSP = (input) => {
  let value = Math.floor(Math.random() * 3);
  switch (input) {
    case 0: //사람이 주먹낸경우
      switch (value) {
        case 0: //개구리 주먹
          w_val = 1;
          break;
        case 1: //개구리 가위
          w_val = 2;
          break;
        case 2: //개구리 보
          w_val = 0;
          break;
      }
      break;

    case 1: //사람이 가위낸경우
      switch (value) {
        case 0:
          w_val = 0;
          break;
        case 1:
          w_val = 1;
          break;
        case 2:
          w_val = 2;
          break;
      }
      break;

    case 2: //사람이 보자기낸경우
      switch (value) {
        case 0:
          w_val = 2;
          break;
        case 1:
          w_val = 0;
          break;
        case 2:
          w_val = 1;
          break;
      }
      break;
  }
  frog.textContent = f_val[value];
  comment.textContent = com_val[w_val];
  subtitle.textContent = result[w_val];
};

rock.addEventListener("click", (e) => {
  e.preventDefault();
  frogRSP(0);
  mine.textContent = "👊";
  console.log(w_val);
});

sicssors.addEventListener("click", (e) => {
  e.preventDefault();
  frogRSP(1);
  mine.textContent = "✌";
  console.log(w_val);
});

paper.addEventListener("click", (e) => {
  e.preventDefault();
  frogRSP(2);
  mine.textContent = "🖐";
  console.log(w_val);
});

kill.addEventListener("click", (e) => {
  e.preventDefault();
  const killFrog = confirm("개구리를 죽여버릴까요?☠");
  if (killFrog) {
    location.reload();
  } else {
    comment.textContent = "사..살려주세요";
  }
});
