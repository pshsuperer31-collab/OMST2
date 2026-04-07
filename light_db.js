const questions = [
    { id: 1, type: "inner", trigram: "감", weight: 1.2, text: "가끔은 누구에게도 말하지 못한 나만의 고독이나 비밀스러운 내면 세계를 즐긴다." },
    { id: 2, type: "outer", trigram: "태", weight: 1.2, text: "처음 보는 사람과도 금방 말을 트며, 여행지에서도 현지인과 거리낌 없이 대화한다." },
    { id: 3, type: "outer", trigram: "건", weight: 1.2, text: "어떤 모임에 가든 내 의견이 반영되어 상황이 돌아가야 마음이 편하다." },
    { id: 4, label: "neg", type: "outer", trigram: "진", weight: -0.2, text: "새로운 시작보다는 이미 주어진 일을 안정적으로 유지하는 것이 더 좋다." },
    { id: 5, type: "outer", trigram: "리", weight: 1.2, text: "여행 계획을 짤 때 맛집 평점부터 동선까지 앱이나 엑셀로 완벽하게 분석한다." },
    { id: 6, type: "inner", trigram: "손", weight: 1.2, text: "중요한 결정을 내리기 전, 발생할 수 있는 변수까지 머릿속으로 시뮬레이션한다." },
    { id: 7, type: "outer", trigram: "곤", weight: 1.2, text: "누군가 도움을 청하면 내 일이 바쁘더라도 차마 거절하지 못하고 도와주게 된다." },
    { id: 8, label: "neg", type: "outer", trigram: "건", weight: -0.2, text: "나는 남의 지시를 따르는 조력자 역할이 훨씬 마음 편하고 좋다." },
    { id: 9, type: "inner", trigram: "리", weight: 1.2, text: "나의 가치나 능력을 제대로 몰라보고 과소평가당할 때 깊은 서운함이나 분노를 느낀다." },
    { id: 10, type: "outer", trigram: "간", weight: 1.2, text: "주변 상황이 급변해도 내가 정한 원칙과 자존심만큼은 끝까지 지키려 한다." },
    { id: 11, type: "outer", trigram: "진", weight: 1.2, text: "운전 중 길이 막히면 지체 없이 새로운 우회 경로를 찾아 모험적인 시도를 즐긴다." },
    { id: 12, label: "neg", type: "outer", trigram: "태", weight: -0.2, text: "사람들과 어울리는 것보다 혼자 침묵을 지킬 때 더 에너지가 충전된다." },
    { id: 13, type: "inner", trigram: "건", weight: 1.2, text: "타인이 보지 않는 곳에서도 스스로 정한 엄격한 기준을 지키며 자신을 채찍질한다." },
    { id: 14, type: "outer", trigram: "손", weight: 1.2, text: "주변 사람들과 마찰 없이 부드럽게 스며들며, 상황에 따라 유연하게 대처한다." },
    { id: 15, type: "inner", trigram: "간", weight: 1.2, text: "소셜 미디어의 소음으로부터 내 고요한 영역을 지키는 것이 무엇보다 중요하다." },
    { id: 16, label: "neg", type: "outer", trigram: "손", weight: -0.2, text: "상황이 변해도 처음 정한 태도나 원칙을 절대 바꾸지 않고 고집한다." },
    { id: 17, type: "outer", trigram: "리", weight: 1.2, text: "비효율적이거나 앞뒤가 맞지 않는 상황을 보면 참지 못하고 그 자리에서 지적한다." },
    { id: 18, type: "outer", trigram: "태", weight: 1.2, text: "단톡방에서 이모티콘과 리액션으로 대화의 분위기를 유쾌하게 살리는 편이다." },
    { id: 19, type: "inner", trigram: "곤", weight: 1.2, text: "주어진 환경을 억지로 바꾸려 하기보다, 있는 그대로를 품어주는 삶을 지향한다." },
    { id: 20, label: "neg", type: "outer", trigram: "리", weight: -0.2, text: "정답이 없는 모호한 상황도 '그럴 수 있지'라며 너그럽게 넘어가는 편이다." },
    { id: 21, type: "outer", trigram: "건", weight: 1.2, text: "운전 중 앞차가 흐름을 방해하면, 내가 직접 나서서 상황을 리드하려 한다." },
    { id: 22, type: "inner", trigram: "진", weight: 1.2, text: "반복되는 지루한 일상보다는 나를 자극하는 새로운 사건을 끊임없이 찾는다." },
    { id: 23, type: "outer", trigram: "감", weight: 1.2, text: "남들이 쉽게 보지 못하는 타인의 숨겨진 의도나 위험을 본능적으로 감지한다." },
    { id: 24, label: "neg", type: "outer", trigram: "곤", weight: -0.2, text: "다른 사람의 편의보다는 나의 이익과 목표를 챙기는 것이 항상 우선이다." },
    { id: 25, type: "inner", trigram: "태", weight: 1.2, text: "속마음을 온전히 털어놓고 공감받을 수 있는 대화 상대를 만날 때 가장 큰 생기를 얻는다." },
    { id: 26, type: "outer", trigram: "간", weight: 1.2, text: "유행하는 핫플레이스보다, 내가 늘 가던 익숙하고 검증된 장소를 고집한다." },
    { id: 27, label: "neg", type: "outer", trigram: "감", weight: -0.2, text: "복잡한 생각은 딱 질색이며, 고민 없이 단순하게 사는 게 최고라고 믿는다." },
    { id: 28, type: "outer", trigram: "손", weight: 1.2, text: "전화 통화보다는 뉘앙스를 세밀하게 조절할 수 있는 카톡/메시지 소통이 훨씬 편하다." },
    { id: 29, label: "neg", type: "outer", trigram: "간", weight: -0.2, text: "분위기에 잘 휩쓸리며, 주변 사람들의 권유에 따라 결정을 쉽게 바꾸곤 한다." },
    { id: 30, type: "outer", trigram: "진", weight: 1.2, text: "체계가 잡히길 기다리기보다 일단 저지르고 수습하며 현장의 역동성을 주도한다." },
    { id: 31, type: "outer", trigram: "감", weight: 1.2, text: "리스크가 있는 일에 뛰어들기 전, 발생 가능한 최악의 시나리오를 철저히 계산한다." },
    { id: 32, type: "outer", trigram: "곤", weight: 1.2, text: "내가 빛나는 것보다 조력자로서 팀이나 가족이 화목하게 돌아갈 때 보람을 느낀다." }
];

function calculateAndDisplayResult(answers) {
    // 괘별 점수 저장소
    const scores = {
        건: { outer: 0, inner: 0 }, 태: { outer: 0, inner: 0 },
        리: { outer: 0, inner: 0 }, 진: { outer: 0, inner: 0 },
        손: { outer: 0, inner: 0 }, 감: { outer: 0, inner: 0 },
        간: { outer: 0, inner: 0 }, 곤: { outer: 0, inner: 0 }
    };

    // 1. 답변 데이터 순회하며 점수 합산
    answers.forEach((val, idx) => {
        const q = questions[idx]; // light_db.js의 질문 참조
        const finalScore = val * q.weight;
        
        // 해당 괘의 outer/inner 카테고리에 점수 누적
        scores[q.trigram][q.type] += finalScore;
    });

    // 2. 가장 높은 점수를 받은 상괘(Outer)와 하괘(Inner) 찾기
    let maxOuterScore = -999;
    let maxInnerScore = -999;
    let upperName = "건";
    let lowerName = "곤";

    for (const [name, scoreObj] of Object.entries(scores)) {
        if (scoreObj.outer > maxOuterScore) {
            maxOuterScore = scoreObj.outer;
            upperName = name;
        }
        if (scoreObj.inner > maxInnerScore) {
            maxInnerScore = scoreObj.inner;
            lowerName = name;
        }
    }

    // 3. 이진수 조합 및 DB 데이터 호출
    const fullKey = trigramInfo[upperName] + trigramInfo[lowerName];
    const data = ichingDB[fullKey];

    if (data) {
        // 결과 UI 업데이트
        document.getElementById('resultName').innerHTML = `${data.symbol} ${data.name}`;
        document.getElementById('resultSummary').innerText = data.summary;
        document.getElementById('resultOneLine').innerText = data.oneLine;
        document.getElementById('socialContent').innerText = data.socialAction;
        document.getElementById('innerContent').innerText = data.innerMotive;
        document.getElementById('adviceText').innerText = data.advice;
        
        return { 
            hexaName: data.name.split(' ')[0], 
            upper: upperName, 
            lower: lowerName 
        };
    }
}