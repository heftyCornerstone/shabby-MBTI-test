# Shabby MBTI Test

## 목차
- [기술스택](#기술스택)
- [페이지 구성](#페이지-구성)
- [요구사항 만족 체크리스트](#요구사항-만족-체크리스트)

<br><br>

## 기술스택

* React
* Tailwind CSS
* Zustand
* Axios
* Tanstack Query
* Sweetalert2
* Json Server

<br><br>

## 페이지 구성

### 홈

<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/831e37ff-72a6-428f-a3fb-6aa0e45fe2f7/image.png' width='60%'></p>
유저가 가장 처음 보게 되는 화면입니다.<br>
로그인하지 않은 유저는 상단의 네비게이션 바에서 프로필 메뉴를 볼 수 없으며<br>
테스트하러 가기 버튼을 누른다면 <br>
로그인 페이지로 이동한다는 alert메시지를 본 후 해당 페이지로 이동합니다.<br>

<br><br>

### 로그인과 회원가입
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/f0cff02a-9075-41b8-878e-33fe7d1a08b9/image.png' width='60%'></p>
*로그인과 회원가입 창은 모든 값을 입력하여야만 제출할 수 있습니다.

<br><br>

### 프로필
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/5e2c9e72-9064-4679-a6f0-cacc29d9032b/image.png' width='50%'></p>
프로필 창에서 닉네임을 바꿀 수 있습니다.

<br><br>

### 테스트창
#### 기존에 테스트한 결과가 존재하지 않을 때
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/396c43d7-1828-4848-8528-4c70b8a2e852/image.png' width='60%'></p>
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/070ddf59-274d-408e-a3fe-37b3c66975a0/image.png' width='40%'></p>
테스트창에서 제출하기 버튼을 클릭하면 <br>
alert창으로 3초 뒤 결과 페이지로 이동한다는 것을 알린 뒤, 해당 페이지로 이동합니다.

<br>

#### 기존에 테스트한 결과가 존재할 때
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/d279cdc3-028a-4d6f-a070-d9ab42009739/image.png' width='60%'></p>
기존에 얻었던 결과를 볼 수 있으며, 결과 페이지로 이동하는 버튼이 있습니다.

<br><br>

### 테스트 결과
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/2efdd438-e16f-4b62-b908-1ce57a35ec0d/image.png' width='60%'></p>
테스트 결과가 존재하지 않는다면 좌측화면으로 예외처리를 하였습니다. <br>
존재한다면 우측 이미지와 같은 화면을 볼 수 있습니다.<br>
나의 결과는 테스트 결과 페이지 최상단에서 확인할 수 있습니다.<br>
(모든 테스트 결과에서도 물론 나의 테스트 결과를 확인할 수 있습니다.)<br>
<br>
나의 테스트 결과는 공개와 비공개를 토글할 수 있으며, 삭제 또한 가능합니다.

<br><br>

### 404 Not Found
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/5b94f434-1d4d-4e86-8c65-03cde082c680/image.png' width='60%'></p>
404 Not Found 페이지로 존재하지 않는 페이지 요청이 들어올 시 예외처리를 할 수 있습니다.

<br><br>

# 요구사항 만족 체크리스트

## 체크리스트 부연설명
특수 상황에 대한 예외 처리 2이상<br>
-> 1. 결과 페이지 유저가 기존에 테스트한 결과가 존재하지 않을 때 결과가 존재하지 않는다는 것을 화면에서 알려준다. <br>
-> 2. 유저가 존재하지 않는 페이지를 요청했을 때 404 Not Found 페이지로 리디렉션한다.

<br>

## 필수기능

- [x] 회원가입 / 로그인 / 프로필 관리 기능 구현
- [x] MBTI 테스트 제공
- [x] 테스트 결과 계산 및 저장
- [x] 테스트 결과 관리 기능
- [x] axios를 이용한 API 호출
- [x] TIL에 트러블슈팅 과정을 기록해보세요. (과제 제출란에 TIL 링크를 제출해주세요.)
- [x] ReadMe를 작성해 과제를 소개해보세요.

## 도전기능
- [x] 로그인 유지 기능
- [x] Tanstack Query 사용
- [x] Axios Instance 사용
- [x] 디렉토리 및 파일을 분리해보세요.
- [x] 변수명 등 코드를 직관적이고 이해하기 쉽게 작성해보세요.
- [x] 주석을 활용해 코드를 설명해보세요.
- [x] 특수 상황에 대한 예외 처리를 2가지 이상 구현해보세요. 
- [x] 커밋 컨벤션을 지킨 커밋을 10회 이상 시행해보세요.
