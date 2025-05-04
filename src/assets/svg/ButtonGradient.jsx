const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {/* Gradiente principal suavizado */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8C42" /> {/* Laranja claro suave */}
          <stop offset="100%" stopColor="#FF6B35" /> {/* Laranja médio suavizado */}
        </linearGradient>

        {/* Gradiente de destaque - Transição suave */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FF6347" /> {/* Coral claro */}
          <stop offset="100%" stopColor="#FFA07A" /> {/* Salmão claro */}
        </linearGradient>

        {/* Gradiente secundário - Amarelo suave */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFB347" /> {/* Amarelo-dourado claro */}
          <stop offset="100%" stopColor="#FF7F50" /> {/* Coral pastel */}
        </linearGradient>

        {/* Gradiente de contraste suavizado */}
        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7256" /> {/* Vermelho-alaranjado claro */}
          <stop offset="100%" stopColor="#E2583D" /> {/* Vermelho suavizado */}
        </linearGradient>

        {/* Gradiente hover com opacidade reduzida */}
        <linearGradient id="btn-hover" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF4B25" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.9" />
        </linearGradient>

        {/* Extra: Gradiente de luz para efeito sutil */}
        <radialGradient id="btn-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFD3A3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
