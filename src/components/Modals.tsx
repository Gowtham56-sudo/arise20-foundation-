import React, { useState } from 'react';
import { Program, GalleryItem, EventItem } from '../types';
import { X, Heart, MapPin, Users, Calendar, Check, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ModalsProps {
  selectedProgram: Program | null;
  onCloseProgram: () => void;
  selectedGalleryItem: GalleryItem | null;
  onCloseGallery: () => void;
  selectedEvent: EventItem | null;
  onCloseEvent: () => void;
  onOpenDonate: (amount?: number, programId?: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedProgram,
  onCloseProgram,
  selectedGalleryItem,
  onCloseGallery,
  selectedEvent,
  onCloseEvent,
  onOpenDonate,
}) => {
  const [registeredEvent, setRegisteredEvent] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredEvent(true);
  };

  return (
    <>
      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-200">
            <button
              onClick={onCloseProgram}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#E3B341] text-[#0A2E63] font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-2">
                  {selectedProgram.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold">{selectedProgram.title}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-gray-700">
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-600 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#154C9E]" />
                  <span>{selectedProgram.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#154C9E]" />
                  <span>{selectedProgram.beneficiaries}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-sm leading-relaxed">{selectedProgram.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Milestones & Deliverables</h4>
                <ul className="space-y-2">
                  {selectedProgram.keyHighlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="block text-gray-500">Raised so far</span>
                  <span className="font-extrabold text-[#154C9E] text-base">₹{selectedProgram.raisedAmount.toLocaleString('en-IN')} INR</span>
                </div>

                <button
                  onClick={() => {
                    onCloseProgram();
                    onOpenDonate(1000, selectedProgram.id);
                  }}
                  className="px-6 py-3 bg-[#154C9E] hover:bg-[#0A2E63] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-[#E3B341] text-[#E3B341]" />
                  Sponsor This Cause
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedGalleryItem && (
        <div
          onClick={onCloseGallery}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-white/20"
          >
            <button
              onClick={onCloseGallery}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedGalleryItem.image}
              alt={selectedGalleryItem.title}
              className="w-full max-h-[75vh] object-contain bg-black"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-[#0A1E3F] text-white">
              <h3 className="text-xl font-bold mb-1">{selectedGalleryItem.title}</h3>
              <p className="text-xs text-blue-200 mb-2">{selectedGalleryItem.caption}</p>
              <div className="flex items-center gap-4 text-xs text-[#E3B341] font-semibold">
                <span>📍 {selectedGalleryItem.location}</span>
                <span>📅 {selectedGalleryItem.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-gray-900 rounded-3xl max-w-md w-full p-8 shadow-2xl relative border border-gray-200">
            <button
              onClick={() => {
                onCloseEvent();
                setRegisteredEvent(false);
              }}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!registeredEvent ? (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="bg-[#154C9E]/10 text-[#154C9E] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    Free Event Ticket
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0A2E63] mt-2">{selectedEvent.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">📅 {selectedEvent.date} • {selectedEvent.time}</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#154C9E] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#0A2E63] cursor-pointer"
                >
                  Confirm Registration
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Registration Confirmed!</h3>
                <p className="text-xs text-gray-600 mb-4">
                  Pass details for <strong>{selectedEvent.title}</strong> sent to <strong>{attendeeEmail}</strong>.
                </p>
                <button
                  onClick={() => {
                    onCloseEvent();
                    setRegisteredEvent(false);
                  }}
                  className="px-6 py-2.5 bg-[#154C9E] text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
