import { Fragment } from 'react'

// 텍스트 안의 "\n" 지점마다 모바일(breakClassName이 768px 미만에서만 보이도록 설정된 경우)에서만
// 줄바꿈되는 <br/>을 끼워 넣는다. 데스크톱에서는 그 br이 display:none 처리되어 원래 한 줄처럼 이어짐
// (br 앞에 공백 한 칸을 항상 함께 렌더해서, 줄바꿈이 꺼졌을 때도 단어 사이 공백이 사라지지 않게 함).
// "\n"이 없는 일반 텍스트를 넘기면 기존과 동일하게 그대로 렌더된다 — 기존 호출부와 100% 호환.
export default function MobileBreakText({ text, breakClassName }) {
  const parts = text.split('\n')
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <>
          {' '}
          <br className={breakClassName} />
        </>
      )}
    </Fragment>
  ))
}
