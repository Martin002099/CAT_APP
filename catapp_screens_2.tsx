/**
 * ============================================================
 * CAT APP — PURRFECT MATCH
 * Design Handoff · All Screens
 * Design System: Vignelli System (Claude to Figma library)
 * Figma File: https://www.figma.com/design/qbgK9fZyaOwpAplriR80Ez/CAT-APP
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

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

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
  fontFamily: 'Helvetica Neue',

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

  // Shadows
  shadowCard: {
    shadowColor: '#141410',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },
  shadowList: {
    shadowColor: '#141410',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
};

// ============================================================
// SHARED COMPONENTS
// ============================================================

/** Status bar (48px) */
const StatusBarRow = () => (
  <View style={styles.statusBar}>
    <Text style={styles.statusTime}>9:41</Text>
    <View style={styles.statusPill} />
  </View>
);

/** Top navigation bar — dark variant */
const NavBarDark = ({
  title,
  showBack = false,
}: {
  title?: string;
  showBack?: boolean;
}) => (
  <View style={styles.navBar}>
    {showBack ? (
      <View style={styles.navLeft}>
        <Text style={styles.navBack}>←</Text>
        <Text style={styles.navTitle}>{title}</Text>
      </View>
    ) : (
      <View style={styles.navBrand}>
        <View style={styles.navAccentBar} />
        <View>
          <Text style={styles.navBrandTop}>PURRFECT</Text>
          <Text style={styles.navBrandBottom}>MATCH</Text>
        </View>
      </View>
    )}
    <Text style={styles.navHeart}>♥</Text>
  </View>
);

/** Bottom tab bar */
const TabBar = ({ active = 0 }: { active?: number }) => {
  const tabs = ['🏠 Home', '🔍 Search', '❤️ Saved', '👤 Profile'];
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, i) => {
        const [icon, label] = tab.split(' ');
        const isActive = i === active;
        return (
          <View key={i} style={styles.tabItem}>
            <Text style={[styles.tabIcon, isActive && styles.tabIconActive]}>
              {icon}
            </Text>
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {label}
            </Text>
            {isActive && <View style={styles.tabUnderline} />}
          </View>
        );
      })}
    </View>
  );
};

/** Filter chip pill */
const Chip = ({ label, active = false }: { label: string; active?: boolean }) => (
  <View style={[styles.chip, active && styles.chipActive]}>
    <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
  </View>
);

/** Badge pill — maps to Badge component in Vignelli System */
const Badge = ({
  label,
  bg,
}: {
  label: string;
  bg: string;
}) => (
  <View style={[styles.badge, { backgroundColor: bg }]}>
    <Text style={styles.badgeText}>{label}</Text>
  </View>
);

/** Alert row — maps to Alert component in Vignelli System */
const AlertRow = ({
  type,
  message,
}: {
  type: 'Notice' | 'Info' | 'Success' | 'Error';
  message: string;
}) => {
  const colors: Record<string, { bg: string; accent: string }> = {
    Notice:  { bg: '#FFF3EE', accent: tokens.accent },
    Info:    { bg: '#F0F0FF', accent: tokens.info },
    Success: { bg: '#EEF7F2', accent: tokens.success },
    Error:   { bg: '#FFF0EE', accent: tokens.error },
  };
  const { bg, accent } = colors[type];
  return (
    <View style={[styles.alert, { backgroundColor: bg }]}>
      <View style={[styles.alertBar, { backgroundColor: accent }]} />
      <View style={styles.alertContent}>
        <Text style={[styles.alertTitle, { color: accent }]}>{type.toUpperCase()}</Text>
        <Text style={styles.alertMessage}>{message}</Text>
      </View>
      <Text style={styles.alertDismiss}>✕</Text>
    </View>
  );
};

/** Button — maps to Button component in Vignelli System */
const Button = ({
  label,
  variant = 'primary',
  onPress,
}: {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onPress?: () => void;
}) => {
  const variantStyle = {
    primary:   styles.btnPrimary,
    secondary: styles.btnSecondary,
    ghost:     styles.btnGhost,
  }[variant];
  const labelStyle = {
    primary:   styles.btnLabelPrimary,
    secondary: styles.btnLabelSecondary,
    ghost:     styles.btnLabelGhost,
  }[variant];
  return (
    <TouchableOpacity style={[styles.btn, variantStyle]} onPress={onPress}>
      <Text style={[styles.btnLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

/** Input field — maps to Input component in Vignelli System */
const InputField = ({
  placeholder,
  label,
  value,
  state = 'default',
}: {
  placeholder: string;
  label?: string;
  value?: string;
  state?: 'default' | 'focused' | 'filled' | 'error' | 'disabled';
}) => {
  const borderColor = {
    default:  tokens.grey300,
    focused:  tokens.accent,
    filled:   tokens.grey700,
    error:    tokens.error,
    disabled: tokens.grey300,
  }[state];
  const labelColor = (state === 'focused' || state === 'filled')
    ? tokens.accent
    : tokens.grey500;
  return (
    <View style={styles.inputWrapper}>
      {label && <Text style={[styles.inputLabel, { color: labelColor }]}>{label}</Text>}
      <View style={[styles.inputField, { borderColor }]}>
        <Text style={[
          styles.inputText,
          (state === 'default' || state === 'disabled') && styles.inputPlaceholder,
        ]}>
          {value || placeholder}
        </Text>
      </View>
      {state === 'error' && (
        <Text style={styles.inputError}>Required field</Text>
      )}
    </View>
  );
};

// ============================================================
// SCREEN 01 — HOME
// Figma node: 6:1525
// ============================================================

export const HomeScreen = () => (
  <SafeAreaView style={styles.screen}>
    <StatusBarRow />
    <NavBarDark />

    {/* Hero Banner */}
    <View style={styles.hero}>
      <View style={styles.heroAccent} />
      <Text style={styles.heroEyebrow}>FIND YOUR</Text>
      <Text style={styles.heroH1}>PERFECT</Text>
      <Text style={styles.heroH2}>COMPANION</Text>
      <Text style={styles.heroSub}>32 cats waiting for a loving home</Text>
      <View style={styles.heroAvailPill}>
        <Text style={styles.heroAvailText}>32 Available</Text>
      </View>
    </View>

    {/* Search */}
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchPlaceholder}>Search by name or breed...</Text>
      </View>
    </View>

    {/* Filter chips */}
    <View style={styles.filterRow}>
      <Chip label="All" active />
      <Chip label="Kittens" />
      <Chip label="Adult" />
      <Chip label="Senior" />
    </View>

    <View style={styles.orangeDivider} />

    {/* Section header */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>AVAILABLE NOW</Text>
      <Text style={styles.sectionLink}>See all →</Text>
    </View>

    {/* Cat cards */}
    <View style={styles.cardRow}>
      <CatCard
        name="Whiskers"
        breed="Persian Mix"
        age="2 yrs"
        mood="Playful"
        photoColor="#FF8C42"
        badgeLabel="FEATURED"
        badgeColor={tokens.accent}
      />
      <CatCard
        name="Luna"
        breed="Siamese"
        age="1 yr"
        mood="Calm"
        photoColor={tokens.grey700}
        badgeLabel="NEW"
        badgeColor={tokens.grey900}
      />
    </View>

    <TabBar active={0} />
  </SafeAreaView>
);

/** Cat card — vertical, used in Home grid */
const CatCard = ({
  name,
  breed,
  age,
  mood,
  photoColor,
  badgeLabel,
  badgeColor,
}: {
  name: string;
  breed: string;
  age: string;
  mood: string;
  photoColor: string;
  badgeLabel: string;
  badgeColor: string;
}) => (
  <View style={styles.catCard}>
    <View style={[styles.catCardPhoto, { backgroundColor: photoColor }]}>
      <Badge label={badgeLabel} bg={badgeColor} />
    </View>
    <View style={styles.catCardInfo}>
      <Text style={styles.catCardName}>{name}</Text>
      <Text style={styles.catCardBreed}>{breed}</Text>
      <View style={styles.catCardMeta}>
        <Text style={styles.catCardAge}>{age}</Text>
        <Text style={styles.catCardDot}> · </Text>
        <Text style={styles.catCardMood}>{mood}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.catCardCTA}>
      <Text style={styles.catCardCTAText}>MEET ME</Text>
    </TouchableOpacity>
  </View>
);

// ============================================================
// SCREEN 02 — CAT PROFILE
// Figma node: 6:1612
// ============================================================

export const CatProfileScreen = () => (
  <SafeAreaView style={styles.screen}>
    <StatusBarRow />
    <NavBarDark title="CAT PROFILE" showBack />

    {/* Profile Hero */}
    <View style={styles.profileHero}>
      <View style={styles.profileAccent} />
      <View style={styles.profileAvatar}>
        <View style={styles.profileAvatarInner} />
      </View>
      <Text style={styles.profileName}>Whiskers</Text>
      <Text style={styles.profileBreed}>Persian Mix  ·  2 yrs  ·  Female</Text>
      <View style={styles.profileBadges}>
        <Badge label="AVAILABLE"  bg={tokens.success} />
        <Badge label="VACCINATED" bg={tokens.accent} />
        <Badge label="NEUTERED"   bg={tokens.grey700} />
      </View>
    </View>

    {/* Alert */}
    <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
      <AlertRow type="Notice" message="3 people are currently viewing Whiskers" />
    </View>

    {/* Stat cards */}
    <View style={styles.statRow}>
      <StatCard label="Age"    value="2 yrs"  bg={tokens.accent} />
      <StatCard label="Weight" value="4.2 kg" bg={tokens.grey900} />
      <StatCard label="Energy" value="High"   bg={tokens.grey700} />
    </View>

    {/* Personality */}
    <View style={styles.section}>
      <Text style={styles.sectionLabel}>PERSONALITY</Text>
      <View style={styles.sectionDivider} />
      <Text style={styles.bodyText}>
        Whiskers is a gentle, playful Persian who loves sunny spots and gentle chin
        scratches. Gets along well with children and other cats.
      </Text>
    </View>

    <View style={{ flex: 1 }} />

    {/* Action buttons */}
    <View style={styles.btnSection}>
      <Button label="START ADOPTION" variant="primary" />
      <Button label="SAVE FOR LATER"  variant="ghost" />
    </View>

    <TabBar active={2} />
  </SafeAreaView>
);

const StatCard = ({
  label,
  value,
  bg,
}: {
  label: string;
  value: string;
  bg: string;
}) => (
  <View style={[styles.statCard, { backgroundColor: bg }]}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

// ============================================================
// SCREEN 03 — SEARCH & FILTER
// Figma node: 6:1676
// ============================================================

export const SearchScreen = () => (
  <SafeAreaView style={styles.screen}>
    <StatusBarRow />
    <NavBarDark title="SEARCH" showBack />

    {/* Search input — Input/Search/Focused from Vignelli System */}
    <View style={styles.searchSectionWhite}>
      <View style={[styles.searchField, styles.searchFieldFocused]}>
        <Text style={[styles.searchIcon, { color: tokens.accent }]}>🔍</Text>
        <Text style={styles.searchValue}>persian</Text>
        <View style={styles.searchCursor} />
      </View>
    </View>

    {/* Filter block */}
    <View style={styles.filterBlock}>
      <Text style={styles.filterByLabel}>FILTER BY</Text>
      <View style={styles.filterDivider} />
      <Text style={styles.filterGroupLabel}>Age</Text>
      <View style={styles.filterRow}>
        <Chip label="Kitten" active />
        <Chip label="Young" />
        <Chip label="Adult" />
        <Chip label="Senior" />
      </View>
      <Text style={styles.filterGroupLabel}>Breed</Text>
      <View style={styles.filterRow}>
        <Chip label="Persian" active />
        <Chip label="Siamese" />
        <Chip label="Maine Coon" />
      </View>
    </View>

    <View style={styles.orangeDivider} />

    {/* Results header */}
    <View style={styles.resultsHeader}>
      <Text style={styles.sectionTitle}>RESULTS</Text>
      <Text style={styles.resultsCount}>4 found</Text>
    </View>

    {/* Result list */}
    <View style={styles.resultList}>
      <ResultCard name="Whiskers" breed="Persian Mix" age="2y" photoColor="#FF8C42"
        badgeLabel="FEATURED" badgeColor={tokens.accent} />
      <ResultCard name="Snowball" breed="Persian"     age="4y" photoColor={tokens.grey300}
        badgeLabel="NEW"      badgeColor={tokens.grey900} />
      <ResultCard name="Cotton"   breed="Persian Mix" age="1y" photoColor="#FFE8D6"
        badgeLabel="AVAILABLE" badgeColor={tokens.success} />
    </View>

    <TabBar active={1} />
  </SafeAreaView>
);

const ResultCard = ({
  name,
  breed,
  age,
  photoColor,
  badgeLabel,
  badgeColor,
}: {
  name: string;
  breed: string;
  age: string;
  photoColor: string;
  badgeLabel: string;
  badgeColor: string;
}) => (
  <View style={styles.resultCard}>
    <View style={[styles.resultThumb, { backgroundColor: photoColor }]} />
    <View style={styles.resultInfo}>
      <Text style={styles.resultName}>{name}</Text>
      <Text style={styles.resultBreed}>{breed}</Text>
      <Badge label={badgeLabel} bg={badgeColor} />
    </View>
    <View style={styles.resultMeta}>
      <Text style={styles.resultAge}>{age}</Text>
      <Text style={styles.resultArrow}>→</Text>
    </View>
  </View>
);

// ============================================================
// SCREEN 04 — ADOPT FORM
// Figma node: 6:1764
// ============================================================

export const AdoptFormScreen = () => (
  <SafeAreaView style={styles.screen}>
    <StatusBarRow />
    <NavBarDark title="ADOPTION FORM" showBack />

    {/* Progress bar */}
    <View style={styles.progressWrap}>
      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.progressLabel}>Step 2 of 3 — Your Details</Text>
    </View>

    {/* Cat summary strip */}
    <View style={styles.catStrip}>
      <View style={styles.catStripAccent} />
      <View style={styles.catStripAvatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.catStripName}>Whiskers</Text>
        <Text style={styles.catStripBreed}>Persian Mix · 2 yrs · Female</Text>
      </View>
      <Badge label="AVAILABLE" bg={tokens.success} />
    </View>

    {/* Alert — Alert/Info from Vignelli System */}
    <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
      <AlertRow type="Info" message="We'll review your application within 24 hours." />
    </View>

    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.formContent}>
      <Text style={styles.sectionLabel}>PERSONAL DETAILS</Text>
      <View style={styles.sectionDivider} />

      <InputField placeholder="Sarah Johnson"        label="Full Name"      state="filled"  />
      <InputField placeholder="sarah@email.com"      label="Email Address"  state="filled"  />
      <InputField placeholder="+1 (555) 123-4567"    label="Phone Number"   state="focused" />

      <Text style={[styles.sectionLabel, { marginTop: 16 }]}>HOME DETAILS</Text>
      <View style={styles.sectionDivider} />

      <InputField placeholder="123 Main St, New York..." label="Current Address" state="default" />

      {/* Checkbox */}
      <View style={styles.checkRow}>
        <View style={styles.checkbox} />
        <Text style={styles.checkLabel}>I agree to a home visit from our team</Text>
      </View>
    </ScrollView>

    {/* Buttons — Button/Primary + Button/Secondary from Vignelli System */}
    <View style={styles.btnSection}>
      <Button label="CONTINUE →"           variant="primary" />
      <Button label="SAVE & CONTINUE LATER" variant="secondary" />
    </View>

    <TabBar active={3} />
  </SafeAreaView>
);

// ============================================================
// SCREEN 05 — SUCCESS
// Figma node: 6:1837
// ============================================================

export const SuccessScreen = () => (
  <SafeAreaView style={[styles.screen, { backgroundColor: tokens.grey900 }]}>
    <StatusBarRow />
    <View style={styles.orangeDivider} />

    <View style={styles.celebSection}>
      {/* Check circle */}
      <View style={styles.checkCircle}>
        <Text style={styles.checkMark}>✓</Text>
      </View>

      <Text style={styles.celebH1}>APPLICATION</Text>
      <Text style={styles.celebH2}>SUBMITTED!</Text>
      <Text style={styles.celebDesc}>
        Whiskers is waiting to meet you.{'\n'}We'll be in touch within 24 hours.
      </Text>

      {/* Cat mini card */}
      <View style={styles.miniCard}>
        <View style={styles.miniCardAccent} />
        <View style={styles.miniCardAvatar} />
        <View>
          <Text style={styles.miniCardName}>Whiskers</Text>
          <Text style={styles.miniCardRef}>Application #2026-0419</Text>
        </View>
      </View>

      {/* Alert — Alert/Success from Vignelli System */}
      <AlertRow type="Success" message="Your application has been sent to our shelter team." />

      {/* Buttons — Button/Primary + Button/Ghost from Vignelli System */}
      <View style={[styles.btnSection, { paddingHorizontal: 0, width: '100%', marginTop: 8 }]}>
        <Button label="TRACK MY APPLICATION" variant="primary" />
        <Button label="MEET ANOTHER CAT"     variant="ghost" />
      </View>

      <Text style={styles.shareText}>Share Whiskers with a friend ♥</Text>
    </View>
  </SafeAreaView>
);

// ============================================================
// STYLES
// ============================================================

const styles = StyleSheet.create({

  // ── Layout ──────────────────────────────────────────────
  screen: {
    flex: 1,
    backgroundColor: tokens.background,
    width: 390,
  },

  // ── Status Bar ──────────────────────────────────────────
  statusBar: {
    height: tokens.statusBarH,
    backgroundColor: tokens.grey900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navBack: {
    color: tokens.white,
    fontSize: 18,
    fontFamily: tokens.fontFamily,
  },
  navTitle: {
    color: tokens.white,
    fontSize: tokens.textMd,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  navBrand: {
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
    lineHeight: 14,
  },
  navBrandBottom: {
    color: tokens.accent,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
    lineHeight: 14,
  },
  navHeart: {
    color: tokens.grey300,
    fontSize: 18,
  },

  // ── Tab Bar ─────────────────────────────────────────────
  tabBar: {
    height: tokens.tabBarH,
    backgroundColor: tokens.white,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: tokens.grey300,
    paddingTop: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  tabIcon: {
    fontSize: 20,
  },
  tabIconActive: {},
  tabLabel: {
    fontSize: 9,
    color: tokens.grey300,
    fontFamily: tokens.fontFamily,
  },
  tabLabelActive: {
    color: tokens.accent,
    fontWeight: '700',
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 28,
    gap: 6,
    position: 'relative',
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
    lineHeight: 42,
  },
  heroH2: {
    color: tokens.accent,
    fontSize: tokens.text6xl,
    fontWeight: '900',
    fontFamily: tokens.fontFamily,
    lineHeight: 42,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchSectionWhite: {
    backgroundColor: tokens.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchField: {
    backgroundColor: tokens.grey100,
    borderRadius: tokens.radiusLg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 11,
    gap: 10,
  },
  searchFieldFocused: {
    backgroundColor: tokens.white,
    borderWidth: 2,
    borderColor: tokens.accent,
    borderRadius: tokens.radiusMd,
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
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: tokens.white,
    flexWrap: 'wrap',
  },
  filterBlock: {
    backgroundColor: tokens.white,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
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
  },

  // ── Section ─────────────────────────────────────────────
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
    paddingTop: 16,
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
    lineHeight: 18,
  },

  // ── Cat Card ────────────────────────────────────────────
  cardRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 12,
    gap: 12,
  },
  catCard: {
    flex: 1,
    backgroundColor: tokens.white,
    borderRadius: tokens.radiusLg,
    overflow: 'hidden',
    ...tokens.shadowCard,
  },
  catCardPhoto: {
    height: 110,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  catCardInfo: {
    padding: 12,
    paddingBottom: 8,
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
    paddingVertical: 9,
    alignItems: 'center',
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
    borderWidth: 1,
    borderColor: tokens.grey300,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: tokens.white,
  },
  chipActive: {
    backgroundColor: tokens.accent,
    borderColor: tokens.accent,
  },
  chipText: {
    color: tokens.grey700,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  chipTextActive: {
    color: tokens.white,
    fontWeight: '700',
  },

  // ── Badge ────────────────────────────────────────────────
  badge: {
    borderRadius: tokens.radiusSm,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    paddingVertical: 12,
  },
  alertBar: {
    width: 4,
    alignSelf: 'stretch',
  },
  alertContent: {
    flex: 1,
    paddingLeft: 16,
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
    lineHeight: 16,
  },
  alertDismiss: {
    color: tokens.grey500,
    fontSize: 11,
    paddingLeft: 8,
  },

  // ── Button ──────────────────────────────────────────────
  btn: {
    height: tokens.buttonH,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.radiusNone,
  },
  btnPrimary: {
    backgroundColor: tokens.accent,
  },
  btnSecondary: {
    backgroundColor: tokens.white,
    borderWidth: 2,
    borderColor: tokens.grey900,
  },
  btnGhost: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: tokens.grey900,
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
    paddingHorizontal: 16,
    paddingTop: 12,
    gap: 12,
  },

  // ── Input ────────────────────────────────────────────────
  inputWrapper: {
    gap: 4,
  },
  inputLabel: {
    fontSize: 9,
    fontWeight: '700',
    fontFamily: tokens.fontFamily,
  },
  inputField: {
    height: tokens.inputH,
    borderWidth: 2,
    borderRadius: tokens.radiusNone,
    paddingHorizontal: 14,
    justifyContent: 'center',
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 28,
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
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  // ── Stat Row ────────────────────────────────────────────
  statRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: tokens.radiusMd,
    padding: 12,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  resultsCount: {
    color: tokens.grey500,
    fontSize: tokens.textXs,
    fontFamily: tokens.fontFamily,
  },
  resultList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.white,
    borderRadius: tokens.radiusLg,
    overflow: 'hidden',
    ...tokens.shadowList,
  },
  resultThumb: {
    width: 76,
    height: 80,
  },
  resultInfo: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 8,
    paddingVertical: 12,
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
    paddingVertical: 12,
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.white,
    paddingRight: 16,
    paddingVertical: 14,
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
    paddingHorizontal: 16,
    paddingTop: 12,
    gap: 12,
    paddingBottom: 8,
  },
  checkRow: {
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 16,
  },
  checkCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: tokens.accent,
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
    lineHeight: 18,
  },
  miniCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.grey700,
    borderRadius: tokens.radiusLg,
    paddingRight: 16,
    paddingVertical: 12,
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
});
