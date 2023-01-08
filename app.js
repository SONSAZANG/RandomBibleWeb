function indexLoad() {
    document.body.style.backgroundImage = `url('assets/BG01.png')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.marginRight = "auto";
    document.body.style.marginLeft = "auto";
}

// 말씀 생성 버튼
function getRandomVerse() {
    document.getElementById('resultVerse').innerText = VerseData.bibles[getRandomInt(VerseData.bibles.length)].verse;
    document.getElementById('resultVerseId').innerText = VerseData.bibles[getRandomInt(VerseData.bibles.length)].verseid;
}

function downloadImage() {
    html2canvas(document.getElementById("capture_area")).then(function (canvas) {
        var el = document.createElement("a")
        el.href = canvas.toDataURL("image/jpeg")
        el.download = 'glorytogod.jpg' //다운로드 할 파일명 설정
        el.click()
    })
}

// 랜덤 버튼 생성 함수
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 말씀 뽑기 클릭시 작동
function randomBible() {
    document.getElementById("capture_area").style.backgroundImage = `url('assets/BG0${getRandomInt(5)}.png')`;
    document.getElementById("capture_area").style.backgroundRepeat = "no-repeat";
    document.getElementById("capture_area").style.backgroundSize = "cover";
}