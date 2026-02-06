import React from 'react';
import { X, Users, Building2, Clock, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PopupContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupContactForm: React.FC<PopupContactFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed right-8 bottom-24 w-[320px] max-w-[calc(100vw-4rem)] bg-black text-white rounded-lg shadow-2xl border border-gray-800">
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-xl font-bold text-white">
                Let's Connect
              </h2>
              <p className="text-xs text-gray-400">How can we help you today?</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 pt-2 border-t border-gray-800">
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 bg-gray-900 rounded-lg">
                <Phone size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Call us at</p>
                <a 
                  href="tel:+918237550095" 
                  className="text-sm group-hover:text-white transition-colors"
                >
                  +91 8237550095
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 group">
              <div className="p-1.5 bg-gray-900 rounded-lg">
                <Mail size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Email us at</p>
                <a 
                  href="mailto:HR@getittjobs.com" 
                  className="text-sm group-hover:text-white transition-colors"
                >
                  HR@getittjobs.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gray-900 rounded-lg">
                <Clock size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Business Hours</p>
                <p className="text-xs">Mon - Sat, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContactForm;