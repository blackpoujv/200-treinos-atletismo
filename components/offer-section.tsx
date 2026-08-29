'use client';

export function OfferSection({ onCtaClick }: { onCtaClick: () => void }) {
  const checkoutUrl = 'https://pay.cakto.com.br/3brba22_1071124';

  const handleCheckout = () => {
    window.location.href = checkoutUrl;
  };

  const features = [
    { bold: '+200', text: 'Treinos de Atletismo', type: 'main' },
    { bold: '+25', text: 'Treinos de Preparação, Mobilidade e Técnica', type: 'main' },
    { bold: '+25', text: 'Treinos de Velocidade e Aceleração', type: 'main' },
    { bold: '+20', text: 'Treinos de Resistência, Meio-Fundo e Fundo', type: 'main' },
    { bold: '+30', text: 'Treinos de Barreiras e Revezamentos', type: 'main' },
    { bold: '+45', text: 'Treinos de Saltos', type: 'main' },
    { bold: '+40', text: 'Treinos de Arremessos e Lançamentos', type: 'main' },
    { bold: '+15', text: 'Circuitos e Treinos Combinados', type: 'main' },
    { text: 'Bônus #1 — +30 Dinâmicas e Desafios de Atletismo', type: 'bonus' },
    { text: 'Bônus #2 — +30 Planos de Treino Prontos para Aplicar', type: 'bonus' },
    { text: 'Bônus #3 — Kit de Avaliação e Evolução do Atleta', type: 'bonus' },
  ];

  return (
    <section id="checkout" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="mobile-content">
        <div
          className="offer-card relative max-w-4xl mx-auto"
          style={{
            backgroundColor: '#F7F5F0',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1.5px solid #CFC8BD',
            boxShadow: '0 18px 45px rgba(23, 25, 28, 0.12)',
            transition: 'all 250ms ease',
          }}
        >
          {/* Faixa superior de urgência */}
          <div
            className="w-full py-3 px-4 text-center text-sm font-bold tracking-wide"
            style={{ backgroundColor: '#F0642D', color: '#FFFFFF' }}
          >
            &#9201; ÚLTIMA CHANCE — CONDIÇÃO ESPECIAL TERMINA HOJE
          </div>

          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Título */}
            <h3 className="font-grotesk text-2xl sm:text-3xl leading-tight text-center mb-1" style={{ color: '#17191C' }}>
              200 Treinos de Atletismo
            </h3>
            <p className="text-center text-sm sm:text-base font-medium mb-8" style={{ color: '#F0642D' }}>
      
            </p>

            {/* Mockup */}
            <div className="mb-10 sm:mb-12 flex justify-center">
              <img
                src="/images/offer-mockup-garantia.webp"
                alt="Mockup da biblioteca 200 Treinos de Atletismo com bônus e selo de garantia de 7 dias"
                className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
                style={{ filter: 'drop-shadow(0 12px 30px rgba(23, 25, 28, 0.14))' }}
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Benefícios */}
              <div className="w-full flex flex-col md:pr-10 md:border-r" style={{ borderColor: '#DED9D1' }}>
                <ul className="space-y-3 sm:space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-2.5 sm:gap-2.5 ${idx === 8 ? 'mt-3 sm:mt-4' : ''}`}>
                      {feature.type === 'main' ? (
                        <>
                          <span
                            className="flex-shrink-0 rounded-full flex items-center justify-center font-bold mt-0.5"
                            style={{ backgroundColor: '#16C766', color: '#FFFFFF', width: '18px', height: '18px', fontSize: '11px' }}
                          >
                            &#10003;
                          </span>
                          <span className="text-sm sm:text-base" style={{ color: '#30343A' }}>
                            <span className="font-bold">{feature.bold}</span> {feature.text}
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: '#FFF0E8', color: '#F0642D', width: '22px', height: '22px', fontSize: '12px' }}
                          >
                            &#127873;
                          </span>
                          <span className="text-sm sm:text-base" style={{ color: '#30343A' }}>
                            {feature.text.split(' — ')[0]} — <span className="font-bold">{feature.text.split(' — ')[1]}</span>
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preço e CTA */}
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full space-y-6 sm:space-y-8">
                  <div className="space-y-3 text-center">
                    <p className="line-through text-base sm:text-lg" style={{ color: '#777B80' }}>
                      Valor total: R$ 120,80
                    </p>
                    <p className="text-sm font-bold" style={{ color: '#B8422E' }}>HOJE POR APENAS</p>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-grotesk text-5xl sm:text-6xl"
                      style={{ color: '#16C766', fontWeight: 700 }}
                    >
                      R$ 19,90
                    </p>
                    <p className="text-xs sm:text-sm font-semibold mt-2" style={{ color: '#4E5358' }}>
                      Pagamento único • Sem mensalidade
                    </p>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg text-white active:scale-95 cta-animate"
                    style={{
                      background: '#16C766',
                      border: '1px solid #16C766',
                      boxShadow: '0 8px 22px rgba(22, 199, 102, 0.28)',
                      transition: 'all 200ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0EAD55';
                      e.currentTarget.style.borderColor = '#0EAD55';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(14, 173, 85, 0.36)';
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#16C766';
                      e.currentTarget.style.borderColor = '#16C766';
                      e.currentTarget.style.boxShadow = '0 8px 22px rgba(22, 199, 102, 0.28)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    QUERO ACESSAR OS 200 TREINOS
                  </button>

                  <p className="text-xs sm:text-sm text-center" style={{ color: '#4E5358' }}>
                    &#128274; Compra segura &bull; &#128179; Pagamento protegido &bull; &#9889; Acesso imediato &bull; &#9989; 7 dias de garantia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .offer-card {
          position: relative;
        }
        .offer-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          pointer-events: none;
        }
        .offer-card:hover {
          border-color: #F0642D !important;
          box-shadow: 0 22px 52px rgba(23, 25, 28, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
