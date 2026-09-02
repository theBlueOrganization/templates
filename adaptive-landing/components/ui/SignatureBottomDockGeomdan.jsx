import styles from './SignatureBottomDockGeomdan.module.css'

// 참고 사이트(apt-all.app)의 .bottom-dock/.bottom-actions를 그대로 재현 — 스크롤 여부와 무관하게
// 항상 화면 하단에 고정되는 두 버튼(방문예약 먼저·왼쪽 / 전화 나중·오른쪽)이라, 기존 공용
// SignatureMobileBottomBar(스크롤 후 노출, call이 왼쪽)와는 순서·색상·폰트 크기가 전혀 달라
// 재사용하지 않고 이 현장 전용으로 새로 만듦. 상태가 없어 서버 컴포넌트로 충분함.
export default function SignatureBottomDockGeomdan({ telNumber, visitTargetId, visitLabel, callLabel }) {
  return (
    <div className={styles.dock}>
      <div className={styles.actions} aria-label="빠른 고객 메뉴">
        <a className={styles.visitAction} href={`#${visitTargetId}`}>
          <span>{visitLabel}</span>
        </a>
        <a className={styles.callAction} href={`tel:${telNumber}`} aria-label={`${callNumberLabel(telNumber)}로 전화하기`}>
          <span>{callLabel}</span>
        </a>
      </div>
    </div>
  )
}

function callNumberLabel(telNumber) {
  return telNumber.replace(/-/g, '')
}
