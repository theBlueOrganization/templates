'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../../lib/utils'
import styles from './TopNav.module.css'

// 상단 고정 메뉴바 — 모바일은 가로 스크롤되는 칩 메뉴, md 이상은 가운데 정렬된 고정 메뉴
export default function TopNav({ items, telNumber }) {
  // 현재 화면에 보이는 섹션의 id (메뉴에서 굵게 강조 표시할 항목)
  const [active, setActive] = useState('')
  // 스크롤을 10px 이상 내렸는지 여부 (히어로 위 투명 상태 ↔ 스크롤 후 흰 배경 상태 전환용)
  const [scrolled, setScrolled] = useState(false)

  // useScroll/useTransform: 스크롤 값(scrollY)에 비례해서 배경색·그림자를 부드럽게 변화시킴
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 40],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)']
  )
  const shadow = useTransform(
    scrollY,
    [0, 40],
    ['0 0 0 rgba(0,0,0,0)', '0 1px 2px rgba(0,0,0,0.06)']
  )

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      // 각 메뉴가 가리키는 섹션의 화면상 위치를 확인해서, 상단(80px)에 가장 가까이 온 섹션을 active로 지정
      const sections = items.map((item) => document.getElementById(item.target)).filter(Boolean)

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 80) {
          setActive(items[i].target)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav className={styles.nav} style={{ background, boxShadow: shadow }}>
      <div className={styles.inner}>
        {items.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            className={cn(
              styles.navItem,
              active === item.target
                ? styles.navItemActive
                : scrolled
                  ? styles.navItemScrolled // 스크롤 후: 배경이 흰색이라 어두운 글자
                  : styles.navItemHero // 최상단(히어로 위): 배경이 투명이라 밝은 글자
            )}
          >
            {item.label}
          </button>
        ))}
        <a
          href={`tel:${telNumber}`}
          className={cn(styles.phoneLink, scrolled ? styles.navItemScrolled : styles.navItemHero)}
        >
          📞 {telNumber}
        </a>
      </div>
    </motion.nav>
  )
}
