export function HowItWorks() {
  const steps = [
    ['1', 'Escolha o treino', 'Selecione velocidade, resistência, técnica, saltos, arremessos ou lançamentos.'],
    ['2', 'Identifique o nível', 'Considere o público e a experiência: infantil, juvenil, adulto ou avançado.'],
    ['3', 'Abra a sessão', 'Consulte o objetivo, duração, espaço, participantes, materiais e execução.'],
    ['4', 'Aplique e evolua', 'Use os comandos, correções, critérios de evolução e orientações de segurança.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty text-foreground">
            Organizar um Treino Completo Pode Ser Simples
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#5E6267' }}>
            Em quatro etapas, você escolhe o objetivo, identifica o nível e aplica uma sessão completa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="how-it-works-card relative flex flex-col items-center text-center h-full"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid #DED9D1',
                boxShadow: '0 12px 30px rgba(23, 25, 28, 0.08)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#F0642D' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'linear-gradient(135deg, #F0642D 0%, #B8422E 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(184, 66, 46, 0.20)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3" style={{ color: '#17191C' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5E6267' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #F0642D;
          box-shadow: 0 18px 38px rgba(23, 25, 28, 0.12);
        }
      `}</style>
    </section>
  );
}
