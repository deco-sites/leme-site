export default function Box(): JSX.Element {
  // Navigation menu items data
  const navItems = [
    "Sobre",
    "Atuação",
    "Projetos",
    "Notícias",
    "Mídia",
    "Transparência",
    "Fale conosco",
  ];

  return (
    <div className="w-full h-auto">
      <div className="flex items-start gap-2 p-2 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
        {/* Desktop Footer */}
        <div className="flex-1 grow flex flex-col items-center justify-center bg-vanilla border-none">
          <div className="h-[328px] relative self-stretch w-full">
            <img
              className="h-full w-full object-cover"
              alt="Footer background"
              src=""
            />
          </div>

          <div className="px-[52px] py-6 flex items-center justify-between relative self-stretch w-full">
            <div className="bg-[#f9f7f1e6] rounded-xl">
              <div className="flex items-center gap-6 px-0 py-2">
                {navItems.map((item, index) => (
                  <div key={`desktop-nav-${index}`}>
                    <div className="inline-flex items-center justify-center gap-1 relative">
                      <span className="font-small font-[number:var(--small-font-weight)] text-blue-dark text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="items-center gap-[52px] inline-flex relative">
              <div className="inline-flex items-center gap-3 relative">
                <div className="relative w-5 h-5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 text-blue-dark" />
                </div>
                <span className="font-small font-[number:var(--small-font-weight)] text-blue-dark text-[length:var(--small-font-size)] text-right tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
                  contato@lemelab.org
                </span>
              </div>

              <span className="font-small font-[number:var(--small-font-weight)] text-blue-dark text-[length:var(--small-font-size)] text-right tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
                © 2025 Leme – Todos os direitos reservados
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="w-[390px] flex flex-col items-center justify-center bg-vanilla border-none">
          <div className="h-[207px] relative self-stretch w-full">
            <img
              className="h-full w-full object-cover"
              alt="Footer background mobile"
              src=""
            />
          </div>

          <div className="px-5 py-6 flex items-center justify-between relative self-stretch w-full">
          <div className="bg-[#f9f7f1e6] rounded-xl">
            <div className="flex flex-col items-start justify-center gap-3">
                {navItems.map((item, index) => (
                  <div key={`mobile-nav-${index}`}>
                    <div className="inline-flex items-center justify-center gap-1 relative">
                      <span className="font-small font-[number:var(--small-font-weight)] text-blue-dark text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

            <div className="flex-col items-end justify-end gap-12 self-stretch inline-flex relative">
              <div className="inline-flex items-center gap-3 relative">
                <span className="font-smaller font-[number:var(--smaller-font-weight)] text-blue-dark text-[length:var(--smaller-font-size)] text-right tracking-[var(--smaller-letter-spacing)] leading-[var(--smaller-line-height)] whitespace-nowrap [font-style:var(--smaller-font-style)]">
                  contato@lemelab.org
                </span>
                <div className="relative w-5 h-5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 text-blue-dark" />
                </div>
              </div>

              <div className="font-smaller font-[number:var(--smaller-font-weight)] text-blue-dark text-[length:var(--smaller-font-size)] text-right tracking-[var(--smaller-letter-spacing)] leading-[var(--smaller-line-height)] [font-style:var(--smaller-font-style)]">
                © 2025 Leme
                <br />
                Todos os direitos reservados
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
