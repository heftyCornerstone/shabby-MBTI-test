# Shabby MBTI Test

## 목차
- [기술스택](#기술스택)
- [페이지 구성](#페이지-구성)
- [페이지별 레이아웃과 기능](#페이지별-레이아웃과-기능)
- [요구사항](#요구사항)

<br><br>

## 기술스택

* React
* Zustand
* Axios
* Tanstack Query
* Sweetalert2
* Json Server

<br><br>
## 페이지 구성

### 홈

<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/831e37ff-72a6-428f-a3fb-6aa0e45fe2f7/image.png' width='60%'></p>
유저가 가장 처음 보게 되는 화면입니다.
로그인하지 않은 유저는 상단의 네비게이션 바에서 프로필 메뉴를 볼 수 없으며
테스트하러 가기 버튼을 누른다면 
로그인 페이지로 이동한다는 alert메시지를 본 후 해당 페이지로 이동합니다.

<br>

### 로그인과 회원가입
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/f0cff02a-9075-41b8-878e-33fe7d1a08b9/image.png' width='60%'></p>
*로그인과 회원가입 창은 모든 값을 입력하여야만 제출할 수 있습니다.

<br>

### 프로필
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/5e2c9e72-9064-4679-a6f0-cacc29d9032b/image.png' width='50%'></p>
프로필 창에서 닉네임을 바꿀 수 있습니다.

<br>

### 테스트창
#### 기존에 테스트한 결과가 존재하지 않을 때
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/396c43d7-1828-4848-8528-4c70b8a2e852/image.png' width='60%'></p>
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/070ddf59-274d-408e-a3fe-37b3c66975a0/image.png' width='40%'></p>
테스트창에서 제출하기 버튼을 클릭하면 
alert창으로 3초 뒤 결과 페이지로 이동한다는 것을 알린 뒤, 해당 페이지로 이동합니다.

#### 기존에 테스트한 결과가 존재할 때
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/d279cdc3-028a-4d6f-a070-d9ab42009739/image.png' width='60%'></p>
기존에 얻었던 결과를 볼 수 있으며, 결과 페이지로 이동하는 버튼이 있습니다.

<br>

### 테스트 결과
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/2efdd438-e16f-4b62-b908-1ce57a35ec0d/image.png' width='60%'></p>
테스트 결과가 존재하지 않는다면 좌측, 존재한다면 우측 이미지와 같은 화면을 볼 수 있습니다.
나의 결과는 테스트 결과 페이지 최상단에서 확인할 수 있습니다.
(모든 테스트 결과에서도 물론 나의 테스트 결과를 확인할 수 있습니다.)

나의 테스트 결과는 공개와 비공개를 토글할 수 있으며, 삭제 또한 가능합니다.

### 404 Not Found
<p align='center'><img src='https://velog.velcdn.com/images/heftycornerstone/post/5b94f434-1d4d-4e86-8c65-03cde082c680/image.png' width='60%'></p>
404 Not Found 페이지로 존재하지 않는 페이지 요청이 들어올 시 예외처리를 할 수 있습니다.
