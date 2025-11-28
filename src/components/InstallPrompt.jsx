import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const isiOSDevice = /iPhone|iPad|iPod/i.test(ua);
    const isSafari = /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS/i.test(ua);
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    setIsIOS(isiOSDevice && isSafari);
    setIsStandalone(standalone);
    
    // Show iOS prompt if it's iOS Safari and not already installed
    if (isiOSDevice && isSafari && !standalone) {
      setShowIOSPrompt(true);
    }

    const onBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };

    const onAppInstalled = () => {
      setVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    setInstalling(true);
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setVisible(false);
      } else {
        setVisible(false);
      }
      setDeferredPrompt(null);
    } catch (_) {
      setVisible(false);
      setDeferredPrompt(null);
    } finally {
      setInstalling(false);
    }
  };

  // iOS Safari: show instructions if not installed
  if (isIOS && !isStandalone && showIOSPrompt) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[90vw]">
        <div className="flex items-center gap-3 rounded-xl bg-black/80 backdrop-blur px-4 py-3 shadow-lg border border-white/10 text-white">
          <div className="text-sm">
            Para instalar en iPhone:
            <span className="ml-1">abre en Safari, pulsa Compartir</span>
            <span className="ml-1">→ Añadir a pantalla de inicio.</span>
          </div>
          <button
            onClick={() => setShowIOSPrompt(false)}
            className="text-sm px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 shrink-0"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 rounded-xl bg-black/80 backdrop-blur px-4 py-3 shadow-lg border border-white/10 text-white">
        <span className="text-sm">¿Deseas instalar la aplicación?</span>
        <button
          onClick={handleInstall}
          disabled={installing}
          className="text-sm px-3 py-1 rounded-lg bg-naranja hover:bg-naranja/90 active:scale-95 transition"
        >
          {installing ? "Instalando…" : "Instalar"}
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-sm px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
