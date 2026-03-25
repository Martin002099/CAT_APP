/**
 * ============================================================
 * CAT APP — PURRFECT MATCH
 * Web version (Vite + React)
 * Converted from React Native / Expo
 * Design System: Vignelli System
 * ============================================================
 *
 * SCREENS
 *   01 — Home             node: 6:1525
 *   02 — Cat Profile      node: 6:1612
 *   03 — Search & Filter  node: 6:1676
 *   04 — Adopt Form       node: 6:1764
 *   05 — Success          node: 6:1837
 *
 * FRAME SIZE: 390 × 844px (iPhone 14)
 * GRID: 16px margins, 8pt base spacing
 * ============================================================
 */

import React, { useState, CSSProperties } from 'react'

// ============================================================
// TYPES
// ============================================================

type Screen = 'home' | 'profile' | 'search' | 'adopt' | 'success'

// ============================================================
// DESIGN TOKENS — from Vignelli System
// ============================================================

export const tokens = {
  // Colors — Primary
  orange100: '#FFE8D6',
  orange300: '#FF8C42',
  orange500: '#E8450A',   // Primary brand
  orange700: '#B33000',
  orange900: '#6B1A00',

  // Colors — Neutral
  white:     '#FFFFFF',
  grey100:   '#F5F5F0',   // Background
  grey300:   '#C8C8C0',
  grey500:   '#787870',
  grey700:   '#2E2E28',
  grey900:   '#141410',   // Near black
  black:     '#000000',

  // Colors — Semantic
  background: '#F5F5F0',
  surface:    '#FFFFFF',
  ink:        '#141410',
  accent:     '#E8450A',
  error:      '#CC1A00',
  success:    '#1A7A3C',
  info:       '#3A3ADB',

  // Typography — Font
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",

  // Typography — Sizes (px)
  textXs:    10,
  textSm:    12,
  textBase:  13,
  textMd:    14,
  textLg:    16,
  textXl:    20,
  text2xl:   22,
  text3xl:   24,
  text4xl:   28,
  text5xl:   36,
  text6xl:   38,

  // Spacing (8pt grid)
  space1:  4,
  space2:  8,
  space3:  12,
  space4:  16,
  space5:  20,
  space6:  24,
  space7:  32,
  space8:  40,
  space9:  48,
  space10: 64,

  // Border radius
  radiusNone: 0,
  radiusSm:   3,
  radiusMd:   6,
  radiusLg:   8,
  radiusXl:   12,
  radius2xl:  16,
  radiusFull: 999,

  // Component heights
  statusBarH: 48,
  navBarH:    56,
  tabBarH:    80,
  buttonH:    48,
  inputH:     48,
  alertH:     52,

  // Shadows (CSS boxShadow strings)
  shadowCard: '0px 4px 16px rgba(20,20,16,0.06)',
  shadowList: '0px 2px 8px rgba(20,20,16,0.04)',
}

// ============================================================
// STYLES
// ============================================================

const styles: Record<string, CSSProperties> = {

  // ── Layout ──────────────────────────────────────────────
  screen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.background,
    width: 390,
    minHeight: 844,
    overflowX: 'hidden',
  },

  // ── Status Bar ──────────────────────────────────────────
  statusBar: {
    height: tokens.statusBarH,
    backgroundColor: tokens.grey900,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    flexShrink: 0,
  },
  statusTime: {
    color: tokens.white,
    fontSize: tokens.textBase,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  statusPill: {
    width: 52,
    height: 12,
    backgroundColor: tokens.white,
    borderRadius: 6,
  },

  // ── Nav Bar ─────────────────────────────────────────────
  navBar: {
    height: tokens.navBarH,
    backgroundColor: tokens.grey900,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    flexShrink: 0,
  },
  navLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navBack: {
    color: tokens.white,
    fontSize: 18,
    fontFamily: tokens.fontFamily,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  },
  navTitle: {
    color: tokens.white,
    fontSize: tokens.textMd,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  navBrand: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  navAccentBar: {
    width: 4,
    height: 28,
    backgroundColor: tokens.accent,
  },
  navBrandTop: {
    color: tokens.white,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    lineHeight: '14px',
    display: 'block',
  },
  navBrandBottom: {
    color: tokens.accent,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    lineHeight: '14px',
    display: 'block',
  },
  navHeart: {
    color: tokens.grey300,
    fontSize: 18,
  },

  // ── Tab Bar ─────────────────────────────────────────────
  tabBar: {
    height: tokens.tabBarH,
    backgroundColor: tokens.white,
    display: 'flex',
    flexDirection: 'row',
    borderTop: `1px solid ${tokens.grey300}`,
    paddingTop: 8,
    flexShrink: 0,
    marginTop: 'auto',
  },
  tabItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  },
  tabIcon: {
    fontSize: 20,
  },
  tabLabel: {
    fontSize: 9,
    color: tokens.grey300,
    fontFamily: tokens.fontFamily,
  },
  tabLabelActive: {
    fontSize: 9,
    color: tokens.accent,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  tabUnderline: {
    width: 20,
    height: 3,
    backgroundColor: tokens.accent,
    borderRadius: 2,
  },

  // ── Hero ────────────────────────────────────────────────
  hero: {
    backgroundColor: tokens.grey900,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 28,
    gap: 6,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  heroAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: tokens.accent,
  },
  heroEyebrow: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 1,
  },
  heroH1: {
    color: tokens.white,
    fontSize: tokens.text6xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
    lineHeight: '42px',
  },
  heroH2: {
    color: tokens.accent,
    fontSize: tokens.text6xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
    lineHeight: '42px',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 11,
    fontFamily: tokens.fontFamily,
    marginTop: 4,
  },
  heroAvailPill: {
    position: 'absolute',
    top: 22,
    right: 24,
    backgroundColor: tokens.accent,
    borderRadius: 11,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
  heroAvailText: {
    color: tokens.white,
    fontSize: 8,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },

  // ── Search ──────────────────────────────────────────────
  searchSection: {
    backgroundColor: tokens.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  searchSectionWhite: {
    backgroundColor: tokens.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  searchField: {
    backgroundColor: tokens.grey100,
    borderRadius: tokens.radiusLg,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 11,
    paddingBottom: 11,
    gap: 10,
  },
  searchFieldFocused: {
    backgroundColor: tokens.white,
    border: `2px solid ${tokens.accent}`,
    borderRadius: tokens.radiusMd,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 11,
    paddingBottom: 11,
    gap: 10,
  },
  searchIcon: {
    fontSize: 14,
    color: tokens.grey300,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: tokens.textBase,
    color: tokens.grey300,
    fontFamily: tokens.fontFamily,
  },
  searchValue: {
    flex: 1,
    fontSize: tokens.textBase,
    color: tokens.grey900,
    fontFamily: tokens.fontFamily,
  },
  searchCursor: {
    width: 1,
    height: 18,
    backgroundColor: tokens.accent,
  },

  // ── Filters ─────────────────────────────────────────────
  filterRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: tokens.white,
    flexWrap: 'wrap',
  },
  filterBlock: {
    backgroundColor: tokens.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 14,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  filterByLabel: {
    color: tokens.accent,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 1,
  },
  filterDivider: {
    height: 1,
    backgroundColor: tokens.grey300,
  },
  filterGroupLabel: {
    color: tokens.grey700,
    fontSize: 11,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },

  // ── Orange Divider ──────────────────────────────────────
  orangeDivider: {
    height: 4,
    backgroundColor: tokens.accent,
    flexShrink: 0,
  },

  // ── Section ─────────────────────────────────────────────
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 0,
  },
  sectionTitle: {
    color: tokens.accent,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 1,
  },
  sectionLink: {
    color: tokens.grey500,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  section: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  sectionLabel: {
    color: tokens.accent,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 1,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: tokens.grey300,
  },
  bodyText: {
    color: tokens.grey700,
    fontSize: tokens.textSm,
    fontFamily: tokens.fontFamily,
    lineHeight: '18px',
  },

  // ── Cat Card ────────────────────────────────────────────
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    gap: 12,
  },
  catCard: {
    flex: 1,
    backgroundColor: tokens.white,
    borderRadius: tokens.radiusLg,
    overflow: 'hidden',
    boxShadow: tokens.shadowCard,
    display: 'flex',
    flexDirection: 'column',
  },
  catCardPhoto: {
    height: 110,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  catCardInfo: {
    padding: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  catCardName: {
    color: tokens.ink,
    fontSize: tokens.textMd,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  catCardBreed: {
    color: tokens.grey500,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  catCardMeta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  catCardAge: {
    color: tokens.accent,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  catCardDot: {
    color: tokens.grey300,
    fontSize: tokens.textXs,
  },
  catCardMood: {
    color: tokens.grey500,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  catCardCTA: {
    backgroundColor: tokens.accent,
    paddingTop: 9,
    paddingBottom: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    marginTop: 'auto',
  },
  catCardCTAText: {
    color: tokens.white,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 1,
  },

  // ── Chip ────────────────────────────────────────────────
  chip: {
    borderRadius: tokens.radiusXl,
    border: `1px solid ${tokens.grey300}`,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: tokens.white,
  },
  chipActive: {
    borderRadius: tokens.radiusXl,
    border: `1px solid ${tokens.accent}`,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: tokens.accent,
  },
  chipText: {
    color: tokens.grey700,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  chipTextActive: {
    color: tokens.white,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },

  // ── Badge ────────────────────────────────────────────────
  badge: {
    borderRadius: tokens.radiusSm,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'flex-start',
    display: 'inline-block',
  },
  badgeText: {
    color: tokens.white,
    fontSize: 8,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 0.5,
  },

  // ── Alert ────────────────────────────────────────────────
  alert: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  alertBar: {
    width: 4,
    alignSelf: 'stretch',
  },
  alertContent: {
    flex: 1,
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  alertTitle: {
    fontSize: 8,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 0.5,
  },
  alertMessage: {
    color: tokens.grey700,
    fontSize: 11,
    fontFamily: tokens.fontFamily,
    lineHeight: '16px',
  },
  alertDismiss: {
    color: tokens.grey500,
    fontSize: 11,
    paddingLeft: 8,
  },

  // ── Button ──────────────────────────────────────────────
  btn: {
    height: tokens.buttonH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.radiusNone,
    cursor: 'pointer',
    border: 'none',
    width: '100%',
  },
  btnPrimary: {
    backgroundColor: tokens.accent,
    border: 'none',
  },
  btnSecondary: {
    backgroundColor: tokens.white,
    border: `2px solid ${tokens.grey900}`,
  },
  btnGhost: {
    backgroundColor: 'transparent',
    border: `2px solid ${tokens.grey900}`,
  },
  btnLabel: {
    fontSize: tokens.textSm,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    letterSpacing: 0.5,
  },
  btnLabelPrimary:   { color: tokens.white },
  btnLabelSecondary: { color: tokens.grey900 },
  btnLabelGhost:     { color: tokens.grey900 },
  btnSection: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },

  // ── Input ────────────────────────────────────────────────
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  inputLabel: {
    fontSize: 9,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  inputField: {
    height: tokens.inputH,
    border: `2px solid ${tokens.grey300}`,
    borderRadius: tokens.radiusNone,
    paddingLeft: 14,
    paddingRight: 14,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: tokens.white,
  },
  inputText: {
    fontSize: tokens.textBase,
    color: tokens.grey900,
    fontFamily: tokens.fontFamily,
  },
  inputPlaceholder: {
    color: tokens.grey300,
  },
  inputError: {
    color: tokens.error,
    fontSize: 9,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },

  // ── Profile ─────────────────────────────────────────────
  profileHero: {
    backgroundColor: tokens.grey900,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 28,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    position: 'relative',
  },
  profileAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: tokens.accent,
  },
  profileAvatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: tokens.accent,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF8C42',
  },
  profileName: {
    color: tokens.white,
    fontSize: tokens.text3xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
    textAlign: 'center',
  },
  profileBreed: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: tokens.textSm,
    fontFamily: tokens.fontFamily,
    textAlign: 'center',
  },
  profileBadges: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  // ── Stat Row ────────────────────────────────────────────
  statRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: tokens.radiusMd,
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statLabel: {
    color: tokens.white,
    fontSize: 9,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  statValue: {
    color: tokens.white,
    fontSize: tokens.text2xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
  },

  // ── Search Results ──────────────────────────────────────
  resultsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  resultsCount: {
    color: tokens.grey500,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  resultList: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  resultCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.white,
    borderRadius: tokens.radiusLg,
    overflow: 'hidden',
    boxShadow: tokens.shadowList,
  },
  resultThumb: {
    width: 76,
    height: 80,
    flexShrink: 0,
  },
  resultInfo: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  resultName: {
    color: tokens.ink,
    fontSize: tokens.textMd,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  resultBreed: {
    color: tokens.grey500,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  resultMeta: {
    paddingRight: 14,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  resultAge: {
    color: tokens.accent,
    fontSize: 11,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  resultArrow: {
    color: tokens.grey300,
    fontSize: 16,
  },

  // ── Adopt Form ──────────────────────────────────────────
  progressWrap: {
    backgroundColor: tokens.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  progressTrack: {
    height: 4,
    backgroundColor: tokens.grey700,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    width: '66%',
    height: 4,
    backgroundColor: tokens.accent,
    borderRadius: 2,
  },
  progressLabel: {
    color: tokens.accent,
    fontSize: tokens.textXs,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  catStrip: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.white,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 14,
    gap: 14,
  },
  catStripAccent: {
    width: 4,
    alignSelf: 'stretch',
    backgroundColor: tokens.accent,
  },
  catStripAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF8C42',
    flexShrink: 0,
  },
  catStripName: {
    color: tokens.ink,
    fontSize: tokens.textMd,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  catStripBreed: {
    color: tokens.grey500,
    fontSize: 11,
    fontFamily: tokens.fontFamily,
  },
  formContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingBottom: 8,
  },
  checkRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: tokens.accent,
    borderRadius: 3,
    flexShrink: 0,
  },
  checkLabel: {
    color: tokens.grey700,
    fontSize: 11,
    fontFamily: tokens.fontFamily,
    flex: 1,
  },

  // ── Success ─────────────────────────────────────────────
  celebSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 16,
  },
  checkCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: tokens.accent,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: tokens.white,
    fontSize: 48,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  celebH1: {
    color: tokens.white,
    fontSize: tokens.text4xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
    textAlign: 'center',
  },
  celebH2: {
    color: tokens.accent,
    fontSize: tokens.text4xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
    textAlign: 'center',
  },
  celebDesc: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: tokens.textSm,
    fontFamily: tokens.fontFamily,
    textAlign: 'center',
    lineHeight: '18px',
    whiteSpace: 'pre-line',
  },
  miniCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.grey700,
    borderRadius: tokens.radiusLg,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 12,
    alignSelf: 'stretch',
  },
  miniCardAccent: {
    width: 4,
    alignSelf: 'stretch',
    backgroundColor: tokens.accent,
  },
  miniCardAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF8C42',
    flexShrink: 0,
  },
  miniCardName: {
    color: tokens.white,
    fontSize: tokens.textSm,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  miniCardRef: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 9,
    fontFamily: tokens.fontFamily,
  },
  shareText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 11,
    fontFamily: tokens.fontFamily,
    textAlign: 'center',
    marginTop: 4,
  },
}

// ============================================================
// SHARED COMPONENTS
// ============================================================

/** Status bar (48px) */
const StatusBarRow = () => (
  <div style={styles.statusBar}>
    <span style={styles.statusTime}>9:41</span>
    <div style={styles.statusPill} />
  </div>
)

/** Top navigation bar — dark variant */
const NavBarDark = ({
  title,
  showBack = false,
  onBack,
}: {
  title?: string
  showBack?: boolean
  onBack?: () => void
}) => (
  <div style={styles.navBar}>
    {showBack ? (
      <div style={styles.navLeft}>
        <button style={styles.navBack as CSSProperties} onClick={onBack}>←</button>
        <span style={styles.navTitle}>{title}</span>
      </div>
    ) : (
      <div style={styles.navBrand}>
        <div style={styles.navAccentBar} />
        <div>
          <span style={styles.navBrandTop}>PURRFECT</span>
          <span style={styles.navBrandBottom}>MATCH</span>
        </div>
      </div>
    )}
    <span style={styles.navHeart}>♥</span>
  </div>
)

/** Bottom tab bar */
const TabBar = ({
  active = 0,
  onNavigate,
}: {
  active?: number
  onNavigate: (screen: Screen) => void
}) => {
  const tabs: Array<{ icon: string; label: string; screen: Screen }> = [
    { icon: '🏠', label: 'Home',    screen: 'home' },
    { icon: '🔍', label: 'Search',  screen: 'search' },
    { icon: '❤️', label: 'Saved',   screen: 'profile' },
    { icon: '👤', label: 'Profile', screen: 'home' },
  ]
  return (
    <div style={styles.tabBar}>
      {tabs.map((tab, i) => {
        const isActive = i === active
        return (
          <button
            key={i}
            style={styles.tabItem as CSSProperties}
            onClick={() => onNavigate(tab.screen)}
          >
            <span style={styles.tabIcon}>{tab.icon}</span>
            <span style={isActive ? styles.tabLabelActive : styles.tabLabel}>
              {tab.label}
            </span>
            {isActive && <div style={styles.tabUnderline} />}
          </button>
        )
      })}
    </div>
  )
}

/** Filter chip pill */
const Chip = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div style={active ? styles.chipActive : styles.chip}>
    <span style={active ? styles.chipTextActive : styles.chipText}>{label}</span>
  </div>
)

/** Badge pill */
const Badge = ({ label, bg }: { label: string; bg: string }) => (
  <div style={{ ...styles.badge, backgroundColor: bg }}>
    <span style={styles.badgeText}>{label}</span>
  </div>
)

/** Alert row */
const AlertRow = ({
  type,
  message,
}: {
  type: 'Notice' | 'Info' | 'Success' | 'Error'
  message: string
}) => {
  const colors: Record<string, { bg: string; accent: string }> = {
    Notice:  { bg: '#FFF3EE', accent: tokens.accent },
    Info:    { bg: '#F0F0FF', accent: tokens.info },
    Success: { bg: '#EEF7F2', accent: tokens.success },
    Error:   { bg: '#FFF0EE', accent: tokens.error },
  }
  const { bg, accent } = colors[type]
  return (
    <div style={{ ...styles.alert, backgroundColor: bg }}>
      <div style={{ ...styles.alertBar, backgroundColor: accent }} />
      <div style={styles.alertContent}>
        <span style={{ ...styles.alertTitle, color: accent }}>{type.toUpperCase()}</span>
        <span style={styles.alertMessage}>{message}</span>
      </div>
      <span style={styles.alertDismiss}>✕</span>
    </div>
  )
}

/** Button */
const Button = ({
  label,
  variant = 'primary',
  onClick,
}: {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
  onClick?: () => void
}) => {
  const variantStyle = {
    primary:   styles.btnPrimary,
    secondary: styles.btnSecondary,
    ghost:     styles.btnGhost,
  }[variant]
  const labelStyle = {
    primary:   styles.btnLabelPrimary,
    secondary: styles.btnLabelSecondary,
    ghost:     styles.btnLabelGhost,
  }[variant]
  return (
    <button
      style={{ ...styles.btn, ...variantStyle } as CSSProperties}
      onClick={onClick}
    >
      <span style={{ ...styles.btnLabel, ...labelStyle }}>{label}</span>
    </button>
  )
}

/** Input field */
const InputField = ({
  placeholder,
  label,
  value,
  state = 'default',
}: {
  placeholder: string
  label?: string
  value?: string
  state?: 'default' | 'focused' | 'filled' | 'error' | 'disabled'
}) => {
  const borderColor = {
    default:  tokens.grey300,
    focused:  tokens.accent,
    filled:   tokens.grey700,
    error:    tokens.error,
    disabled: tokens.grey300,
  }[state]
  const labelColor = (state === 'focused' || state === 'filled')
    ? tokens.accent
    : tokens.grey500
  const isPlaceholder = state === 'default' || state === 'disabled'
  return (
    <div style={styles.inputWrapper}>
      {label && (
        <span style={{ ...styles.inputLabel, color: labelColor }}>{label}</span>
      )}
      <div style={{ ...styles.inputField, border: `2px solid ${borderColor}` }}>
        <span style={isPlaceholder ? { ...styles.inputText, ...styles.inputPlaceholder } : styles.inputText}>
          {value || placeholder}
        </span>
      </div>
      {state === 'error' && (
        <span style={styles.inputError}>Required field</span>
      )}
    </div>
  )
}

// ============================================================
// SCREEN 01 — HOME
// ============================================================

const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div style={styles.screen}>
    <StatusBarRow />
    <NavBarDark />

    {/* Hero Banner */}
    <div style={styles.hero}>
      <div style={styles.heroAccent} />
      <span style={styles.heroEyebrow}>FIND YOUR</span>
      <span style={styles.heroH1}>PERFECT</span>
      <span style={styles.heroH2}>COMPANION</span>
      <span style={styles.heroSub}>32 cats waiting for a loving home</span>
      <div style={styles.heroAvailPill}>
        <span style={styles.heroAvailText}>32 Available</span>
      </div>
    </div>

    {/* Search */}
    <div style={styles.searchSection}>
      <div style={styles.searchField}>
        <span style={styles.searchIcon}>🔍</span>
        <span style={styles.searchPlaceholder}>Search by name or breed...</span>
      </div>
    </div>

    {/* Filter chips */}
    <div style={styles.filterRow}>
      <Chip label="All" active />
      <Chip label="Kittens" />
      <Chip label="Adult" />
      <Chip label="Senior" />
    </div>

    <div style={styles.orangeDivider} />

    {/* Section header */}
    <div style={styles.sectionHeader}>
      <span style={styles.sectionTitle}>AVAILABLE NOW</span>
      <span style={styles.sectionLink}>See all →</span>
    </div>

    {/* Cat cards */}
    <div style={styles.cardRow}>
      <CatCard
        name="Whiskers"
        breed="Persian Mix"
        age="2 yrs"
        mood="Playful"
        photoColor="#FF8C42"
        badgeLabel="FEATURED"
        badgeColor={tokens.accent}
        onMeetMe={() => onNavigate('profile')}
      />
      <CatCard
        name="Luna"
        breed="Siamese"
        age="1 yr"
        mood="Calm"
        photoColor={tokens.grey700}
        badgeLabel="NEW"
        badgeColor={tokens.grey900}
        onMeetMe={() => onNavigate('profile')}
      />
    </div>

    <TabBar active={0} onNavigate={onNavigate} />
  </div>
)

/** Cat card — vertical, used in Home grid */
const CatCard = ({
  name,
  breed,
  age,
  mood,
  photoColor,
  badgeLabel,
  badgeColor,
  onMeetMe,
}: {
  name: string
  breed: string
  age: string
  mood: string
  photoColor: string
  badgeLabel: string
  badgeColor: string
  onMeetMe?: () => void
}) => (
  <div style={styles.catCard}>
    <div style={{ ...styles.catCardPhoto, backgroundColor: photoColor }}>
      <Badge label={badgeLabel} bg={badgeColor} />
    </div>
    <div style={styles.catCardInfo}>
      <span style={styles.catCardName}>{name}</span>
      <span style={styles.catCardBreed}>{breed}</span>
      <div style={styles.catCardMeta}>
        <span style={styles.catCardAge}>{age}</span>
        <span style={styles.catCardDot}> · </span>
        <span style={styles.catCardMood}>{mood}</span>
      </div>
    </div>
    <button style={styles.catCardCTA as CSSProperties} onClick={onMeetMe}>
      <span style={styles.catCardCTAText}>MEET ME</span>
    </button>
  </div>
)

// ============================================================
// SCREEN 02 — CAT PROFILE
// ============================================================

const CatProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div style={styles.screen}>
    <StatusBarRow />
    <NavBarDark title="CAT PROFILE" showBack onBack={() => onNavigate('home')} />

    {/* Profile Hero */}
    <div style={styles.profileHero}>
      <div style={styles.profileAccent} />
      <div style={styles.profileAvatar}>
        <div style={styles.profileAvatarInner} />
      </div>
      <span style={styles.profileName}>Whiskers</span>
      <span style={styles.profileBreed}>Persian Mix  ·  2 yrs  ·  Female</span>
      <div style={styles.profileBadges}>
        <Badge label="AVAILABLE"  bg={tokens.success} />
        <Badge label="VACCINATED" bg={tokens.accent} />
        <Badge label="NEUTERED"   bg={tokens.grey700} />
      </div>
    </div>

    {/* Alert */}
    <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 12 }}>
      <AlertRow type="Notice" message="3 people are currently viewing Whiskers" />
    </div>

    {/* Stat cards */}
    <div style={styles.statRow}>
      <StatCard label="Age"    value="2 yrs"  bg={tokens.accent} />
      <StatCard label="Weight" value="4.2 kg" bg={tokens.grey900} />
      <StatCard label="Energy" value="High"   bg={tokens.grey700} />
    </div>

    {/* Personality */}
    <div style={styles.section}>
      <span style={styles.sectionLabel}>PERSONALITY</span>
      <div style={styles.sectionDivider} />
      <p style={styles.bodyText}>
        Whiskers is a gentle, playful Persian who loves sunny spots and gentle chin
        scratches. Gets along well with children and other cats.
      </p>
    </div>

    <div style={{ flex: 1 }} />

    {/* Action buttons */}
    <div style={styles.btnSection}>
      <Button label="START ADOPTION" variant="primary" onClick={() => onNavigate('adopt')} />
      <Button label="SAVE FOR LATER"  variant="ghost" />
    </div>

    <TabBar active={2} onNavigate={onNavigate} />
  </div>
)

const StatCard = ({ label, value, bg }: { label: string; value: string; bg: string }) => (
  <div style={{ ...styles.statCard, backgroundColor: bg }}>
    <span style={styles.statLabel}>{label}</span>
    <span style={styles.statValue}>{value}</span>
  </div>
)

// ============================================================
// SCREEN 03 — SEARCH & FILTER
// ============================================================

const SearchScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div style={styles.screen}>
    <StatusBarRow />
    <NavBarDark title="SEARCH" showBack onBack={() => onNavigate('home')} />

    {/* Search input */}
    <div style={styles.searchSectionWhite}>
      <div style={styles.searchFieldFocused}>
        <span style={{ ...styles.searchIcon, color: tokens.accent }}>🔍</span>
        <span style={styles.searchValue}>persian</span>
        <div style={styles.searchCursor} />
      </div>
    </div>

    {/* Filter block */}
    <div style={styles.filterBlock}>
      <span style={styles.filterByLabel}>FILTER BY</span>
      <div style={styles.filterDivider} />
      <span style={styles.filterGroupLabel}>Age</span>
      <div style={styles.filterRow}>
        <Chip label="Kitten" active />
        <Chip label="Young" />
        <Chip label="Adult" />
        <Chip label="Senior" />
      </div>
      <span style={styles.filterGroupLabel}>Breed</span>
      <div style={styles.filterRow}>
        <Chip label="Persian" active />
        <Chip label="Siamese" />
        <Chip label="Maine Coon" />
      </div>
    </div>

    <div style={styles.orangeDivider} />

    {/* Results header */}
    <div style={styles.resultsHeader}>
      <span style={styles.sectionTitle}>RESULTS</span>
      <span style={styles.resultsCount}>4 found</span>
    </div>

    {/* Result list */}
    <div style={styles.resultList}>
      <ResultCard name="Whiskers" breed="Persian Mix" age="2y" photoColor="#FF8C42"
        badgeLabel="FEATURED" badgeColor={tokens.accent} onNavigate={onNavigate} />
      <ResultCard name="Snowball" breed="Persian"     age="4y" photoColor={tokens.grey300}
        badgeLabel="NEW"      badgeColor={tokens.grey900} onNavigate={onNavigate} />
      <ResultCard name="Cotton"   breed="Persian Mix" age="1y" photoColor="#FFE8D6"
        badgeLabel="AVAILABLE" badgeColor={tokens.success} onNavigate={onNavigate} />
    </div>

    <TabBar active={1} onNavigate={onNavigate} />
  </div>
)

const ResultCard = ({
  name,
  breed,
  age,
  photoColor,
  badgeLabel,
  badgeColor,
  onNavigate,
}: {
  name: string
  breed: string
  age: string
  photoColor: string
  badgeLabel: string
  badgeColor: string
  onNavigate: (s: Screen) => void
}) => (
  <div
    style={{ ...styles.resultCard, cursor: 'pointer' }}
    onClick={() => onNavigate('profile')}
  >
    <div style={{ ...styles.resultThumb, backgroundColor: photoColor }} />
    <div style={styles.resultInfo}>
      <span style={styles.resultName}>{name}</span>
      <span style={styles.resultBreed}>{breed}</span>
      <Badge label={badgeLabel} bg={badgeColor} />
    </div>
    <div style={styles.resultMeta}>
      <span style={styles.resultAge}>{age}</span>
      <span style={styles.resultArrow}>→</span>
    </div>
  </div>
)

// ============================================================
// SCREEN 04 — ADOPT FORM
// ============================================================

const AdoptFormScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div style={styles.screen}>
    <StatusBarRow />
    <NavBarDark title="ADOPTION FORM" showBack onBack={() => onNavigate('profile')} />

    {/* Progress bar */}
    <div style={styles.progressWrap}>
      <div style={styles.progressTrack}>
        <div style={styles.progressFill} />
      </div>
      <span style={styles.progressLabel}>Step 2 of 3 — Your Details</span>
    </div>

    {/* Cat summary strip */}
    <div style={styles.catStrip}>
      <div style={styles.catStripAccent} />
      <div style={styles.catStripAvatar} />
      <div style={{ flex: 1 }}>
        <div style={styles.catStripName}>Whiskers</div>
        <div style={styles.catStripBreed}>Persian Mix · 2 yrs · Female</div>
      </div>
      <Badge label="AVAILABLE" bg={tokens.success} />
    </div>

    {/* Alert */}
    <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 8 }}>
      <AlertRow type="Info" message="We'll review your application within 24 hours." />
    </div>

    <div style={{ ...styles.formContent, overflowY: 'auto', flex: 1 }}>
      <span style={styles.sectionLabel}>PERSONAL DETAILS</span>
      <div style={styles.sectionDivider} />

      <InputField placeholder="Sarah Johnson"        label="Full Name"      state="filled"  />
      <InputField placeholder="sarah@email.com"      label="Email Address"  state="filled"  />
      <InputField placeholder="+1 (555) 123-4567"    label="Phone Number"   state="focused" />

      <span style={{ ...styles.sectionLabel, marginTop: 16 }}>HOME DETAILS</span>
      <div style={styles.sectionDivider} />

      <InputField placeholder="123 Main St, New York..." label="Current Address" state="default" />

      {/* Checkbox */}
      <div style={styles.checkRow}>
        <div style={styles.checkbox} />
        <span style={styles.checkLabel}>I agree to a home visit from our team</span>
      </div>
    </div>

    {/* Buttons */}
    <div style={styles.btnSection}>
      <Button label="CONTINUE →"           variant="primary" onClick={() => onNavigate('success')} />
      <Button label="SAVE & CONTINUE LATER" variant="secondary" />
    </div>

    <TabBar active={3} onNavigate={onNavigate} />
  </div>
)

// ============================================================
// SCREEN 05 — SUCCESS
// ============================================================

const SuccessScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div style={{ ...styles.screen, backgroundColor: tokens.grey900 }}>
    <StatusBarRow />
    <div style={styles.orangeDivider} />

    <div style={styles.celebSection}>
      {/* Check circle */}
      <div style={styles.checkCircle}>
        <span style={styles.checkMark}>✓</span>
      </div>

      <span style={styles.celebH1}>APPLICATION</span>
      <span style={styles.celebH2}>SUBMITTED!</span>
      <p style={styles.celebDesc}>
        {'Whiskers is waiting to meet you.\nWe\'ll be in touch within 24 hours.'}
      </p>

      {/* Cat mini card */}
      <div style={styles.miniCard}>
        <div style={styles.miniCardAccent} />
        <div style={styles.miniCardAvatar} />
        <div>
          <div style={styles.miniCardName}>Whiskers</div>
          <div style={styles.miniCardRef}>Application #2026-0419</div>
        </div>
      </div>

      {/* Alert */}
      <AlertRow type="Success" message="Your application has been sent to our shelter team." />

      {/* Buttons */}
      <div style={{ ...styles.btnSection, paddingLeft: 0, paddingRight: 0, width: '100%', marginTop: 8 }}>
        <Button label="TRACK MY APPLICATION" variant="primary" />
        <Button label="MEET ANOTHER CAT"     variant="ghost"   onClick={() => onNavigate('home')} />
      </div>

      <span style={styles.shareText}>Share Whiskers with a friend ♥</span>
    </div>
  </div>
)

// ============================================================
// APP — navigation container
// ============================================================

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')

  const onNavigate = (screen: Screen) => setCurrentScreen(screen)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      {currentScreen === 'home'    && <HomeScreen    onNavigate={onNavigate} />}
      {currentScreen === 'profile' && <CatProfileScreen onNavigate={onNavigate} />}
      {currentScreen === 'search'  && <SearchScreen  onNavigate={onNavigate} />}
      {currentScreen === 'adopt'   && <AdoptFormScreen onNavigate={onNavigate} />}
      {currentScreen === 'success' && <SuccessScreen onNavigate={onNavigate} />}
    </div>
  )
}
