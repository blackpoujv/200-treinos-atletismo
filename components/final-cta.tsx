'use client';

export function FinalCta() {
  const checkoutUrl = 'https://pay.cakto.com.br/3brba22_1071124';

  const handleCheckout = () => {
    window.location.href = checkoutUrl;
  };

  return (
      <section className="w-full py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="mobile-content flex flex-col items-center gap-4">
          <div className="text-center space-y-3 mb-4 w-full">
            <h2 className="w-full font-grotesk text-2xl sm:text-3xl md:text-4xl leading-tight text-pretty" style={{ color: '#17191C', boxSizing: 'border-box' }}>
              DÊ O PRÓXIMO PASSO E ACESSE AGORA OS 200 TREINOS
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl" style={{ color: '#5E6267' }}>
              
            </p>
          </div>

        <button
          onClick={handleCheckout}
          className="w-full font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg active:scale-95 cta-animate"
          style={{
            maxWidth: '100%',
            boxSizing: 'border-box',
            background: '#16C766',
            color: '#FFFFFF',
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
      </div>
    </section>
  );
}
