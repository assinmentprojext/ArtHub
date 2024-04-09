//드롭다운 동작 시작

// 1. dropDownTitle을 클릭했을 때
// 2. dropDownStat이 false이면(메뉴가 펴지지 않았으면)
// 	2-1. 드롭 다운 메뉴의 display가 flex로 바뀌고
// 	2-2. 삼각형의 border-top과 border-bottom의 색깔을 서로 바꾸고 translate(0, -5px)로 바꾼다.
//  2-3. dropDownStat을 true로 바꾼다
// 3. dropDownStat이 true이면(메뉴가 펴졌으면)
// 	3-1. 드롭 다운 메뉴의 display가 none으로 바뀌고
// 	3-2. 삼각형의 border-top과 border-bottom의 색깔을 서로 바꾸고 translate(0, 5px)로 바꾼다.
//  3-3. dropDownStat을 false로 바꾼다

let dropDownTitle = document.getElementById("dropDownTitle");
let familyLink = document.getElementById("familyLink");
let triangle = document.getElementById("dropDownIcon");
let dropDownStat = false;
// dropDownTitle.onclick = function menuUnfold() {
//     if (dropDownStat == false) {
//         familyLink.style.display = "flex";
//         triangle.style.borderTopColor = "transparent";
//         triangle.style.borderBottomColor = "#5285a2";
//         triangle.style.transform = "translate(0, -5px)";
//         dropDownStat = true;
//     } else {
//         familyLink.style.display = "none";
//         triangle.style.borderTopColor = "#5285a2";
//         triangle.style.borderBottomColor = "transparent";
//         triangle.style.transform = "translate(0, 5px)";
//         dropDownStat = false;
//     }
// };
//menuUnfold() 이렇게 괄호 붙이면 지금 당장 함수를 실행하라는 뜻이므로 onclick과 상관없이 함수가 실행된다
dropDownTitle.onclick = menuUnfold; 
function menuUnfold() {
    if (dropDownStat == false) {
        familyLink.style.display = "flex";
        triangle.style.borderTopColor = "transparent";
        triangle.style.borderBottomColor = "#5285a2";
        triangle.style.transform = "translate(0, -5px)";
        dropDownStat = true;
    } else {
        familyLink.style.display = "none";
        triangle.style.borderTopColor = "#5285a2";
        triangle.style.borderBottomColor = "transparent";
        triangle.style.transform = "translate(0, 5px)";
        dropDownStat = false;
    }
}
//드롭다운 동작 끝
