'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureHeader.module.css'

// 헤더 높이(SignatureHeader.module.css .inner 값과 동일하게 유지) — 모바일 64px, PC(1024px 이상) 96px
const MOBILE_HEADER_HEIGHT = 64
const DESKTOP_HEADER_HEIGHT = 96

// eupseong-prugio 전용 헤더 — PC(1024px 이상)에서는 히어로(#hero) 구간에서만 투명하고,
// 그 아래로 스크롤하면 짙은 네이비 배경으로 자연스럽게(transition) 전환됨. 모바일은 항상 네이비 배경.
// mobileTransparent가 true면(wonjongyeok-world-meridian-fore 전용) 모바일에서도 동일하게 히어로 구간 투명 → 스크롤 시 배경 전환됨.
// gnb 라벨은 실제 페이지 섹션 id(sectionIds)와 순서대로 매칭해 스크롤 이동시킴.
export default function SignatureHeader({
  header,
  sectionIds = [],
  ctaTargetId,
  telNumberByUtm,
  transparentOverHero = true,
  mobileTransparent = false,
}) {
  // header.logoSize가 있으면 { base, lg, xl }(px) 값으로 로고 표시 크기를 현장별로 덮어씀 (없으면 기본 CSS 값 그대로)
  const logoSize = header.logoSize
  const logoStyle = logoSize
    ? { '--logo-w': `${logoSize.base}px`, '--logo-w-lg': `${logoSize.lg}px`, '--logo-w-xl': `${logoSize.xl}px` }
    : undefined
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [transparent, setTransparent] = useState(false)
  // telNumberByUtm에 등록된 utm_source로 들어온 경우에만 노출 전화번호를 덮어씀
  const utmSource = useUtmSource()
  const phone = telNumberByUtm?.[utmSource] ?? header.phone

  useEffect(() => {
    const heroEl = document.getElementById('hero')
    const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

    const update = () => {
      setScrolled(window.scrollY > 10)
      const desktop = isDesktop()
      const headerHeight = desktop ? DESKTOP_HEADER_HEIGHT : MOBILE_HEADER_HEIGHT
      // 히어로 하단이 헤더 아래로 아직 남아있으면(=히어로 구간이면) 투명, 다 지나가면 원래 배경색 복귀
      const stillInHero = transparentOverHero && !!heroEl && heroEl.getBoundingClientRect().bottom > headerHeight
      setTransparent((desktop || mobileTransparent) && stillInHero)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        styles.header,
        transparent && styles.headerTransparent,
        scrolled && !transparent && styles.headerScrolled
      )}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo} style={logoStyle} onClick={(e) => e.preventDefault()}>
          <Image src={header.logo.src} alt={header.logo.alt} width={header.logo.width} height={header.logo.height} priority />
        </a>

        <nav className={styles.gnb} aria-label="주요 메뉴">
          {header.gnb.map((label, i) => (
            <button key={label} type="button" className={styles.gnbItem} onClick={() => scrollTo(sectionIds[i] ?? ctaTargetId)}>
              {label}
            </button>
          ))}
        </nav>

        <div className={styles.quick}>
          <button type="button" className={styles.quickCta} onClick={() => scrollTo(ctaTargetId)}>
            {header.quickCtaLabel}
          </button>
          <a href={`tel:${phone}`} className={styles.quickPhone}>
            {phone}
          </a>
        </div>

        <button
          type="button"
          className={cn(styles.menuToggle, menuOpen && styles.menuToggleOpen)}
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {header.gnb.map((label, i) => (
            <button key={label} type="button" className={styles.mobileMenuItem} onClick={() => scrollTo(sectionIds[i] ?? ctaTargetId)}>
              {label}
            </button>
          ))}
          <button type="button" className={styles.mobileMenuCta} onClick={() => scrollTo(ctaTargetId)}>
            {header.quickCtaLabel}
          </button>
        </div>
      )}
    </header>
  )
}
