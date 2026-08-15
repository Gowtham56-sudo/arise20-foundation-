import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Heart, QrCode, CreditCard, ShieldCheck, Copy, Check, Sparkles, Download, Receipt, ArrowRight } from 'lucide-react';

interface DonationSectionProps {
  initialAmount?: number;
  initialProgramId?: string;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  initialAmount = 27000,
  initialProgramId,
}) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [needTaxReceipt, setNeedTaxReceipt] = useState(true);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);

  const PRESET_AMOUNTS = [27000, 81000];

  const getImpactMessage = (val: number) => {
    if (val === 27000) return 'Monthly Sponsor: Provides free training, preserves Tamil heritage, empowers women & youth for one month.';
    if (val === 81000) return 'Quarterly Sponsor: Provides free training, preserves Tamil heritage, empowers women & youth for three months.';
    return 'Custom sponsorship to support education, culture, women empowerment and community development.';
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('arise20foundation@okicici');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#154C9E', '#E3B341', '#22C55E', '#FFFFFF'],
    });

    setTimeout(() => {
      setIsSubmitting(false);
      const chosenVal = customAmount ? parseFloat(customAmount) : amount;
      const receiptNo = 'AR20-80G-' + Math.floor(100000 + Math.random() * 900000);
      setReceiptData({
        receiptNo,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        amount: chosenVal,
        frequency,
        donorName: donorName || 'Generous Philanthropist',
        donorEmail: donorEmail || 'donor@example.com',
        pan: donorPan || 'ABCDE1234F',
        taxExemption: '50% Tax Exemption under Sec 80G(5)(vi) of Income Tax Act',
      });
    }, 1200);
  };

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-[#0A2E63] via-[#154C9E] to-[#0A1E3F] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3B341]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#154C9E]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#E3B341] font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-[#E3B341]/30">
            Make A Direct Difference
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            Invest in Human Dignity & Hope
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg">
            100% of your contribution directly funds grassroots projects in India. Eligible for 80G tax exemption with instant automated certificates.
          </p>
        </motion.div>

        {/* Donation Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-6 sm:p-12 border border-[#E3B341]/40"
        >
          <form onSubmit={handleDonateSubmit}>
            {/* Frequency Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-gray-100 rounded-2xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-[#154C9E] text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Give One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    frequency === 'monthly'
                      ? 'bg-[#154C9E] text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E3B341]" />
                  Give Monthly (2x Impact)
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                Select Contribution Amount (₹ INR)
              </label>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                {PRESET_AMOUNTS.map((val) => (
                  <motion.button
                    key={val}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-2 rounded-2xl font-black text-sm sm:text-base border transition-all cursor-pointer ${
                      amount === val && !customAmount
                        ? 'bg-[#154C9E] text-white border-[#154C9E] shadow-lg scale-105'
                        : 'bg-gray-50 text-gray-800 border-gray-200 hover:border-[#154C9E]'
                    }`}
                  >
                    ₹{val.toLocaleString('en-IN')}
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                <input
                  type="number"
                  placeholder="Or enter custom amount in ₹ INR..."
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setAmount(parseFloat(e.target.value) || 0);
                  }}
                  className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                />
              </div>
            </div>

            {/* Impact Calculation Preview */}
            <motion.div
              layout
              className="bg-gradient-to-r from-blue-50 to-amber-50 p-4 sm:p-6 rounded-2xl border border-blue-100 mb-8 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#154C9E] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                <Heart className="w-5 h-5 fill-[#E3B341] text-[#E3B341]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0A2E63] mb-1">Your Impact Milestone</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {getImpactMessage(customAmount ? parseFloat(customAmount) : amount)}
                </p>
              </div>
            </motion.div>

            {/* Payment Method Selector */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                Choose Preferred Payment Option
              </label>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-[#154C9E] text-white border-[#154C9E] shadow-md'
                      : 'bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-[#E3B341]" />
                  UPI / QR Code
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#154C9E] text-white border-[#154C9E] shadow-md'
                      : 'bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#E3B341]" />
                  Card / Net Banking
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'bg-[#154C9E] text-white border-[#154C9E] shadow-md'
                      : 'bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-[#E3B341]" />
                  Bank Wire (NEFT)
                </button>
              </div>

              {/* UPI QR Display Box */}
              {paymentMethod === 'upi' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-2xl border-2 border-[#154C9E] shadow-md mb-4">
                    {/* SVG Mock QR Code */}
                    <svg viewBox="0 0 100 100" className="w-32 h-32">
                      <rect width="100" height="100" fill="#FFFFFF" />
                      <path
                        d="M10 10h30v30H10zM15 15v20h20V15zM20 20h10v10H20zM60 10h30v30H60zM65 15v20h20V15zM70 20h10v10H70zM10 60h30v30H10zM15 65v20h20V65zM20 70h10v10H20zM50 10h5v10h-5zM45 25h10v5h-10zM50 40h15v5h-15zM55 50h10v15h-10zM70 60h20v10H70zM80 75h10v15H80z"
                        fill="#154C9E"
                      />
                      <rect x="42" y="42" width="16" height="16" fill="#E3B341" rx="4" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-gray-800 bg-white px-4 py-2 rounded-xl border border-gray-300 mb-2">
                    <span>UPI ID: thearise20foundation@sbi</span>
                    <button
                      type="button"
                      onClick={handleCopyUpi}
                      className="p-1 text-[#154C9E] hover:text-[#0A2E63] cursor-pointer"
                      title="Copy UPI Handle"
                    >
                      {copiedUpi ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-500">Scan using Google Pay, PhonePe, Paytm, or BHIM UPI apps</p>
                </motion.div>
              )}

              {/* Bank Wire Details Display Box */}
              {paymentMethod === 'netbanking' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
                >
                  <h4 className="text-sm font-bold text-[#0A2E63] mb-4 text-center">Bank Transfer Details</h4>
                  <div className="space-y-3 text-xs sm:text-sm text-gray-700 bg-white p-4 rounded-xl border border-gray-300">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold">A/c Name:</span>
                      <span>The Arise 20 Foundation</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold">A/c Number:</span>
                      <span className="font-mono">43616478208</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold">IFSC Code:</span>
                      <span className="font-mono">SBIN0010501</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Branch:</span>
                      <span>Suramangalam Branch</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Donor Information Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email (For Instant Receipt)</label>
                <input
                  type="email"
                  required
                  placeholder="ananya@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                />
              </div>
            </div>

            {/* Tax Exemption Section */}
            <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-200">
              <label className="flex items-center gap-3 cursor-pointer text-xs font-bold text-gray-800">
                <input
                  type="checkbox"
                  checked={needTaxReceipt}
                  onChange={(e) => setNeedTaxReceipt(e.target.checked)}
                  className="w-4 h-4 text-[#154C9E] rounded focus:ring-[#154C9E]"
                />
                <span>Generate 80G Tax Exemption Certificate (50% Tax Deduction under Sec 80G)</span>
              </label>

              {needTaxReceipt && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <input
                    type="text"
                    placeholder="Enter PAN Number for 80G certificate (e.g. ABCDE1234F)"
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl text-xs uppercase focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                  />
                </div>
              )}
            </div>

            {/* Submit Action Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#154C9E] to-[#0A2E63] hover:from-[#0A2E63] hover:to-[#154C9E] text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Processing Contribution...</span>
              ) : (
                <>
                  <Heart className="w-5 h-5 fill-[#E3B341] text-[#E3B341]" />
                  <span>Complete ₹{(customAmount ? parseFloat(customAmount) : amount).toLocaleString('en-IN')} Contribution</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Instant Digital Receipt Modal Box */}
        {receiptData && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white text-gray-900 rounded-3xl max-w-lg w-full p-8 shadow-2xl border-4 border-[#E3B341] relative"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Receipt className="w-8 h-8" />
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Payment Confirmed & Verified
                </span>
                <h3 className="text-2xl font-extrabold text-[#0A2E63] mt-2">Official 80G Tax Exemption Receipt</h3>
                <p className="text-xs text-gray-500">The Arise20 Foundation • Registration No: AR20-NGO-80G-2016</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Receipt No:</span>
                  <span className="font-bold text-gray-800">{receiptData.receiptNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-bold text-gray-800">{receiptData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Donor Name:</span>
                  <span className="font-bold text-gray-800">{receiptData.donorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span className="font-bold text-gray-800">{receiptData.donorEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">PAN / Tax ID:</span>
                  <span className="font-bold text-gray-800">{receiptData.pan}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-extrabold text-[#154C9E]">
                  <span>Total Amount Donated:</span>
                  <span>₹{receiptData.amount.toLocaleString('en-IN')} INR</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    alert('Digital 80G receipt downloaded to your device!');
                  }}
                  className="flex-1 py-3 bg-[#154C9E] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button
                  onClick={() => setReceiptData(null)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
