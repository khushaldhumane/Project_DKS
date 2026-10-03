import React, { useState, useRef, useEffect } from 'react';
import {
  Upload,
  FileText,
  X,
  MessageCircle,
  Send,
  CheckCircle,
  Camera,
  RotateCcw,
} from 'lucide-react';
import storeConfig from '../config/storeConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

const OrderForm = () => {
  const revealRef = useScrollReveal();

  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'type'
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [groceryList, setGroceryList] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Customer Details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [fulfillment, setFulfillment] = useState('Home Delivery');
  const [timeSlot, setTimeSlot] = useState('Morning (8 AM - 12 PM)');
  const [instructions, setInstructions] = useState('');

  // Form State
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // Clean up object URL when filePreview changes or unmounts
  useEffect(() => {
    return () => {
      if (filePreview && filePreview.startsWith('blob:')) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  const handleFileProcess = (selectedFile) => {
    if (!selectedFile) return;

    if (filePreview && filePreview.startsWith('blob:')) {
      URL.revokeObjectURL(filePreview);
    }

    setFile(selectedFile);
    if (selectedFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(selectedFile);
      setFilePreview(url);
    } else {
      setFilePreview(null);
    }

    if (errors.items) {
      setErrors((prev) => ({ ...prev, items: '' }));
    }
  };

  const handleFileSelect = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      handleFileProcess(selected);
    }
  };

  const handleRemoveFile = () => {
    if (filePreview && filePreview.startsWith('blob:')) {
      URL.revokeObjectURL(filePreview);
    }
    setFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileProcess(droppedFile);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const trimmedPhone = phone.trim();
    if (!trimmedPhone) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(trimmedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!address.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    if (activeTab === 'upload' && !file) {
      newErrors.items = 'Please upload a photo/file of your list, or switch to "Type Your List"';
    } else if (activeTab === 'type' && !groceryList.trim()) {
      newErrors.items = 'Please type your grocery list items';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const itemsContent =
      activeTab === 'type' && groceryList.trim()
        ? groceryList.trim()
        : file
        ? `[Attached: ${file.name}] Photo attached - please check`
        : 'Photo attached - please check';

    return `🛒 *New Grocery Order*
━━━━━━━━━━━━━━━
*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Address:* ${address.trim()}
*Fulfillment:* ${fulfillment}
*Time Slot:* ${timeSlot}

📋 *Grocery List:*
${itemsContent}

📝 *Special Instructions:*
${instructions.trim() || 'None'}
━━━━━━━━━━━━━━━`;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    handleRemoveFile();
    setName('');
    setPhone('');
    setAddress('');
    setFulfillment('Home Delivery');
    setTimeSlot('Morning (8 AM - 12 PM)');
    setInstructions('');
    setGroceryList('');
    setErrors({});
    setIsSubmitted(false);
    setActiveTab('upload');
  };

  return (
    <section id="order" ref={revealRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal text-center">
          <span className="uppercase tracking-widest text-primary-600 font-semibold text-sm">
            PLACE YOUR ORDER
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mt-2">
            Send Us Your Grocery List
          </h2>
          <p className="text-lg text-slate-500 mt-4 text-center max-w-2xl mx-auto">
            Upload a photo of your handwritten list or type your items — we'll take care of the rest.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="reveal max-w-4xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          {isSubmitted ? (
            <div className="p-8 sm:p-14 text-center bg-primary-50/50">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                Order Received!
              </h3>
              <p className="text-slate-600 max-w-lg mx-auto mb-8 text-base sm:text-lg leading-relaxed">
                We've received your grocery list. Our team will review it and contact you shortly on WhatsApp/Phone to confirm your order and share the bill.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Send Another Order</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleDirectSubmit} noValidate>
              {/* Input Mode Tabs */}
              <div className="flex border-b border-slate-100 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'upload'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Upload className="w-5 h-5 flex-shrink-0" />
                  <span>📷 Upload Photo / File</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('type')}
                  className={`flex-1 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'type'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span>✏️ Type Your List</span>
                </button>
              </div>

              {/* Tab Content Area */}
              <div className="p-6 sm:p-8">
                {activeTab === 'upload' ? (
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <input
                      ref={cameraInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleFileSelect}
                      className="hidden"
                    />

                    {!file ? (
                      <div>
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer ${
                            isDragging
                              ? 'border-primary-500 bg-primary-50/70'
                              : 'border-slate-300 hover:border-primary-400 hover:bg-primary-50/50'
                          } ${errors.items ? 'border-red-400 bg-red-50/20' : ''}`}
                        >
                          <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-400 flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-8 h-8 text-primary-400" />
                          </div>
                          <p className="font-medium text-slate-700 text-base sm:text-lg">
                            Click to upload or drag your grocery list photo here
                          </p>
                          <p className="text-xs sm:text-sm text-slate-400 mt-1">
                            Supports JPG, PNG, PDF — Max 10 MB
                          </p>
                          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-100 px-3.5 py-1.5 rounded-full">
                              Browse Files
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                cameraInputRef.current?.click();
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-200/80 hover:bg-slate-300 px-3.5 py-1.5 rounded-full transition-colors"
                            >
                              <Camera className="w-3.5 h-3.5 text-slate-600" />
                              Take Photo
                            </button>
                          </div>
                        </div>
                        {errors.items && (
                          <p className="text-red-500 text-xs sm:text-sm mt-2 font-medium">
                            {errors.items}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto overflow-hidden">
                          {file.type.startsWith('image/') && filePreview ? (
                            <img
                              src={filePreview}
                              alt="Grocery list preview"
                              className="w-20 h-20 object-cover rounded-xl border border-slate-200 shadow-sm flex-shrink-0"
                            />
                          ) : (
                            <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <FileText className="w-10 h-10" />
                            </div>
                          )}
                          <div className="overflow-hidden min-w-0">
                            <p className="font-semibold text-slate-800 truncate text-sm sm:text-base">
                              {file.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                            <span className="inline-block mt-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                              File Ready
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="w-full sm:w-auto px-4 py-2 border border-slate-300 hover:border-red-400 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium flex items-center justify-center gap-1.5 transition-all"
                        >
                          <X className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <textarea
                      value={groceryList}
                      onChange={(e) => {
                        setGroceryList(e.target.value);
                        if (errors.items) setErrors((prev) => ({ ...prev, items: '' }));
                      }}
                      rows={8}
                      placeholder={`Type your grocery items here...\n\nExample:\n2kg Basmati Rice\n5kg Atta (Ashirwad)\n1L Refined Oil\n500g Sugar\n1 packet Amul Butter\n2 Maggi packs...`}
                      className={`w-full min-h-[200px] border rounded-xl p-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-y text-slate-700 placeholder-slate-400 font-normal leading-relaxed ${
                        errors.items ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.items && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1.5 font-medium">
                        {errors.items}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Customer Details Section */}
              <div className="p-6 sm:p-8 border-t border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Your Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Mobile / WhatsApp Number */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setPhone(val);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Delivery Address & Landmark */}
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Delivery Address & Landmark <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors((prev) => ({ ...prev, address: '' }));
                      }}
                      placeholder="Full address with landmark"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all ${
                        errors.address ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                    )}
                  </div>

                  {/* Fulfillment Selection */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Fulfillment
                    </label>
                    <div className="flex gap-6 items-center h-[46px] px-2">
                      <label className="flex items-center gap-2.5 cursor-pointer text-slate-700 text-sm font-medium">
                        <input
                          type="radio"
                          name="fulfillment"
                          value="Home Delivery"
                          checked={fulfillment === 'Home Delivery'}
                          onChange={(e) => setFulfillment(e.target.value)}
                          className="text-primary-600 focus:ring-primary-500 h-4 w-4"
                        />
                        <span>Home Delivery</span>
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer text-slate-700 text-sm font-medium">
                        <input
                          type="radio"
                          name="fulfillment"
                          value="Store Pickup"
                          checked={fulfillment === 'Store Pickup'}
                          onChange={(e) => setFulfillment(e.target.value)}
                          className="text-primary-600 focus:ring-primary-500 h-4 w-4"
                        />
                        <span>Store Pickup</span>
                      </label>
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Preferred Time
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white text-slate-700"
                    >
                      <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 9 PM)">Evening (4 PM - 9 PM)</option>
                      <option value="Urgent / ASAP">Urgent / ASAP</option>
                    </select>
                  </div>

                  {/* Special Instructions */}
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="Any special requests? e.g., ripe bananas, call before delivery..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-700"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 p-6 sm:p-8 bg-slate-50 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all flex-1 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all flex-1 cursor-pointer"
                >
                  <Send className="w-5 h-5 flex-shrink-0" />
                  <span>Submit Order</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
