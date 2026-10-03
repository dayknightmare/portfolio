import { css } from '@emotion/react'
import type { PortfolioTheme } from '@/components/themes'

export const getGlobalStyles = (theme: PortfolioTheme) => css`
  html,
  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.bg.base};
  }

  * {
    box-sizing: border-box;
    animation:
      color 1s ease-in,
      background-color 1 ease-in,
      border-color 0.2s ease-in,
      box-shadow 0.2s ease-in;
  }
  
  a {
    color: ${theme.colors.accent};
    text-decoration: none;
  }
  
  a:hover {
    color: ${theme.colors.amber};
    text-decoration: underline;
  }
  
  ::selection {
    background: ${theme.colors.accent};
    color: ${theme.colors.bg.base};
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.bg.sunken};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
  }
  
  @keyframes nvBlink {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0.12;
    }
  }
  @keyframes nvSweep {
    0% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(120%);
    }
  }
  @keyframes nvFlicker {
    0%,
    100% {
      opacity: 0.97;
    }
    92% {
      opacity: 0.97;
    }
    93% {
      opacity: 0.78;
    }
    95% {
      opacity: 1;
    }
  }
  @keyframes nvSpin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes nvBar {
    0% {
      width: 12%;
    }
    50% {
      width: 86%;
    }
    80% {
      width: 34%;
    }
    100% {
      width: 12%;
    }
  }
  
  .nv-hover-orange:hover {
    color: ${theme.colors.accent} !important;
  }
  .nv-hover-panel:hover {
    background: ${theme.colors.bg.watermark};
  }
  .nv-hover-panel-alt:hover {
    background: ${theme.colors.bg.sunken};
  }
  .nv-hover-amber:hover {
    background: ${theme.colors.amber} !important;
  }
  .nv-hover-green:hover {
    border-color: ${theme.colors.green} !important;
    color: ${theme.colors.green} !important;
  }
  .nv-hover-card:hover {
    border-color: ${theme.colors.accent} !important;
    background: ${theme.colors.bg.door} !important;
  }
  .nv-hover-card-dark:hover {
    background: ${theme.colors.bg.track} !important;
  }
`
