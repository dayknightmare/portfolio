'use client'

import { ThemeProvider } from '@emotion/react'
import Bootloader from '@/components/bootloader/Bootloader'
import { HEADER } from '@/components/ideia/copy'
import {
  Anatomy05,
  Components07,
  Cover,
  Effects06,
  Frame04,
  History09,
  Outro,
  Palette02,
  Reference01,
  Typography03,
  Ux08,
} from '@/components/ideia/sections'
import { getTheme } from '@/components/themes'

import * as S from './style'

const PAPER = getTheme('light')

export default function Ideia() {
  return (
    <>
      <Bootloader lang="en" />
      <ThemeProvider theme={PAPER}>
        <S.Root>
          <S.Header>
            <S.HeaderGroup>
              <S.Brand>{HEADER.brand}</S.Brand>
              <S.HeaderMeta>{HEADER.meta}</S.HeaderMeta>
            </S.HeaderGroup>
          </S.Header>

          <S.Container>
            <Cover />
            <Reference01 />
            <Palette02 />
            <Typography03 />
            <Frame04 />
            <Anatomy05 />
            <Effects06 />
            <Components07 />
            <Ux08 />
            <History09 />
          </S.Container>

          <Outro />
        </S.Root>
      </ThemeProvider>
    </>
  )
}
