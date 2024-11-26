const HomePrologue = () => {
    return (
        <div className="text-center common-border">
            <div className='flex flex-col items-center gap-5 p-5'>
                <p>
                    본 검사지는
                    <br />
                    마이어스-브릭스 유형 지표(MBTI)를 평가하는 도구로
                </p>
                <p>정식 검사에 들어가는 시간과 비용이 부담스러운 당신을 위해 만들어졌습니다.</p>
                <div className="text-left">
                    <ul className="p-4 bg-slate-300">
                        <li>이중 질문 회피</li>
                        <li>문항의 객관성 확보</li>
                        <li>적절한 표본 확보와 오차 검증을</li>
                    </ul>
                </div>
                <p className="font-bold">다 놓쳤습니다!</p>
                <p className="text-gray-400">(하지만 재미는 있을지도 몰라요)</p>
            </div>
        </div>
    );
}

export default HomePrologue;