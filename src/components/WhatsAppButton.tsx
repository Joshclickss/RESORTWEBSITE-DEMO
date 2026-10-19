import React, { useState } from 'react';
import { AlertCircle, ExternalLink, X, Copy, Check } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/site';

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
  variant?: 'floating' | 'inline' | 'room';
  roomName?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = '',
  variant = 'floating',
  roomName,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const defaultMessage = roomName
    ? `Hello Green Haven Resort! I am interested in inquiring about the "${roomName}" for a stay. Could you please share demo availability details?`
    : `Hello Green Haven Resort! I would like to enquire about staying at your resort in Wayanad, Kerala.`;

  const messageToSend = customMessage || defaultMessage;
  const { url, isConfigured } = getWhatsAppLink(messageToSend);

  const handleCopy = () => {
    navigator.clipboard.writeText(messageToSend);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === 'floating') {
    return (
      <>
        <div className="fixed bottom-6 right-6 z-40 flex items-center group">
          <div className="hidden sm:block mr-3 bg-haven-950 text-sand-100 text-xs py-1.5 px-3.5 rounded-full shadow-lg border border-haven-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp (Demo)
          </div>

          {isConfigured ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${className}`}
            >
              <WhatsAppIcon className="w-7 h-7" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setShowModal(true)}
              aria-label="WhatsApp enquiry setup"
              className={`flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${className}`}
            >
              <WhatsAppIcon className="w-7 h-7" />
            </button>
          )}
        </div>

        {/* Modal shown if not configured or if user opens info */}
        {showModal && (
          <WhatsAppConfigModal
            message={messageToSend}
            onClose={() => setShowModal(false)}
            copied={copied}
            onCopy={handleCopy}
          />
        )}
      </>
    );
  }

  // Inline / Room variant
  return (
    <>
      {isConfigured ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-700/10 hover:bg-emerald-700/20 text-emerald-800 border border-emerald-300 transition-colors ${className}`}
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
          <span>WhatsApp Enquiry</span>
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-700/10 hover:bg-emerald-700/20 text-emerald-800 border border-emerald-300 transition-colors cursor-pointer ${className}`}
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
          <span>WhatsApp Enquiry</span>
        </button>
      )}

      {showModal && (
        <WhatsAppConfigModal
          message={messageToSend}
          onClose={() => setShowModal(false)}
          copied={copied}
          onCopy={handleCopy}
        />
      )}
    </>
  );
};

// WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.173 8.173 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.217 8.217 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
    </svg>
  );
}

// Modal explaining configuration or displaying prefilled text
function WhatsAppConfigModal({
  message,
  onClose,
  copied,
  onCopy,
}: {
  message: string;
  onClose: () => void;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-sand-200 animate-fadeIn">
        <div className="flex items-center justify-between pb-3 border-b border-sand-200">
          <div className="flex items-center gap-2 text-haven-900">
            <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
            <h3 className="font-serif font-bold text-lg">WhatsApp Enquiry Setup</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-sand-500 hover:text-sand-800 hover:bg-sand-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3 text-sm text-sand-700">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>WhatsApp Number Configuration:</strong> In <code>src/config/site.ts</code>, you can customize <code>siteConfig.contact.whatsappNumber</code> with a valid business phone number (country code + phone digits). Currently set to demo placeholder: <strong>+{siteConfig.contact.whatsappNumber}</strong>.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-sand-600 uppercase tracking-wider mb-1">
              Prefilled Enquiry Message:
            </label>
            <div className="p-3 bg-sand-50 border border-sand-200 rounded-lg text-xs font-mono text-sand-800 break-words">
              {message}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-sand-200">
          <button
            type="button"
            onClick={onCopy}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-sand-700 hover:bg-sand-100 border border-sand-300 flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Message</span>
              </>
            )}
          </button>

          {siteConfig.contact.whatsappNumber ? (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 shadow-sm"
            >
              <span>Proceed to WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-haven-800 hover:bg-haven-700"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
