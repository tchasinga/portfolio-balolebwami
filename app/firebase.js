import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

const firebaseConfig = {
  apiKey: "AIzaSyDgzA820je959WT18QX8j6tAwuu94v9IAQ",
  authDomain: "mydocside.firebaseapp.com",
  projectId: "mydocside",
  storageBucket: "mydocside.firebasestorage.app",
  messagingSenderId: "503761655048",
  appId: "1:503761655048:web:fe869e9e54db908b6a08bd",
  measurementId: "G-8WE84YDLCB",
};

const APPCHECK_DEBUG_TOKEN = "649452E6-3AA8-44C6-A142-EC1ACF558848";
const RECAPTCHA_ENTERPRISE_SITE_KEY = "6LekjeMtAAAAAEGfox0cS_S7kL1eozT1xLd_NqpL";

const isBrowser = typeof window !== "undefined";

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

if (isBrowser) {
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname.startsWith("192.168.");

  if (isLocalhost) {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = APPCHECK_DEBUG_TOKEN;
    console.log("App Check: Running in LOCAL DEBUG mode.");
  }

  if (!globalThis._appCheckInitialized) {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_ENTERPRISE_SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
    globalThis._appCheckInitialized = true;
  }
}

export const analytics = isBrowser
  ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
  : Promise.resolve(null);

const ai = isBrowser ? getAI(app, { backend: new GoogleAIBackend() }) : null;
export const model = ai
  ? getGenerativeModel(ai, { model: "gemini-3-flash-preview" })
  : null;

export default app;
