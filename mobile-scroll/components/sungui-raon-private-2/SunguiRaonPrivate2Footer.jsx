// 원본 사이트 푸터(제작사 배너 이미지)는 다른 회사(대행사) 크레딧이라 쓰지 않고,
// 다른 모든 현장의 SiteFooter와 같은 내용(대표 문의처, 대행사 정보, 법적 고지, 저작권)을
// 이 페이지 다크 테마에 맞춰 구성한다.
export default function SunguiRaonPrivate2Footer({ company, telNumber, projectName }) {
  return (
    <footer className="landing-footer">
      <div className="footer-accent-line" />
      <div className="footer-inner">
        <p className="footer-lead-label">모델하우스 상담</p>
        <p className="footer-lead-tel">{telNumber}</p>

        <div className="footer-divider" />

        <p className="footer-brand">홈페이지 운영·관리 대행사</p>
        <p className="footer-info">
          담당회사 {company.name} · 사업자 등록번호 {company.bizNumber}
          <br />
          이메일 {company.email}
          {company.phone && <> · 전화번호 {company.phone}</>}
        </p>

        <p className="footer-info" style={{ marginTop: 16, fontSize: 11 }}>
          * 본 웹사이트에 사용된 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제 시공 시 차이가 있을 수 있습니다.
          <br />
          * 본 웹사이트상의 개발 및 교통 계획 등에 대한 사항은 관계기관의 사정에 따라 변경될 수 있으며, 이는 당사와 무관함을 알려드립니다.
          <br />
          * 본 웹사이트상의 내용은 시행사, 시공사 및 관계기관에 의해 변경될 수 있습니다.
        </p>

        <p className="footer-copy">© {new Date().getFullYear()} {projectName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
