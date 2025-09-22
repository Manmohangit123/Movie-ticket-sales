import React, { useState } from "react";
import { Calculator, DollarSign, Building, Landmark, Ticket } from "lucide-react";

const RevenueDistributionDemo = () => {
  const [ticketPrice, setTicketPrice] = useState(120); // user-defined price
  const [ticketsSold, setTicketsSold] = useState(150);

  const calculateDistribution = (basePrice) => {
    let taxRate = basePrice > 100 ? 0.18 : 0.12; // Premium >100 → 18%, else 12%
    let taxRateLabel = basePrice > 100 ? "18%" : "12%";

    const ticketTax = Math.round(basePrice * taxRate * 100) / 100;
    const convenienceFee = Math.round(basePrice * 0.1 * 100) / 100;
    const convenienceFeeTax = Math.round(convenienceFee * 0.18 * 100) / 100;
    const maintenanceCharge = 3.0;

    const customerPays = basePrice + convenienceFee + maintenanceCharge;

    const theaterShare = basePrice - ticketTax + maintenanceCharge;
    const governmentShare = ticketTax;
    const portalShare = convenienceFee - convenienceFeeTax;

    return {
      basePrice,
      convenienceFee,
      convenienceFeeTax,
      ticketTax,
      maintenanceCharge,
      customerPays: Math.round(customerPays * 100) / 100,
      theaterShare: Math.round(theaterShare * 100) / 100,
      governmentShare: Math.round(governmentShare * 100) / 100,
      portalShare: Math.round(portalShare * 100) / 100,
      taxRate: taxRateLabel,
      caseDescription: basePrice > 100 ? "Premium Ticket (>₹100)" : "Regular Ticket (≤₹100)",
      totalCustomerPayments: Math.round(customerPays * ticketsSold * 100) / 100,
      totalTheaterRevenue: Math.round(theaterShare * ticketsSold * 100) / 100,
      totalGovernmentRevenue: Math.round(governmentShare * ticketsSold * 100) / 100,
      totalPortalRevenue: Math.round(portalShare * ticketsSold * 100) / 100,
      totalGSTRevenue: Math.round(convenienceFeeTax * ticketsSold * 100) / 100,
    };
  };

  const distribution = calculateDistribution(ticketPrice);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calculator className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl font-bold">Blockchain Revenue Distribution</h1>
          </div>
          <p className="text-xl text-gray-300">Transparent, Automated, and Fair Distribution</p>
        </div>

        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <DollarSign className="w-6 h-6" />
            <span>Enter Ticket Details</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
              <label className="block text-sm font-medium mb-2">🎫 Ticket Base Price</label>
              <input
                type="number"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(parseFloat(e.target.value) || 0)}
                min="0"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-2xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter price..."
              />
              <div className="text-center mt-2 text-sm text-gray-300">
                Tax: {ticketPrice > 100 ? "18%" : "12%"} (Theater pays)
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg border border-blue-500/30">
              <label className="block text-sm font-medium mb-2">📊 Tickets Sold Today</label>
              <input
                type="number"
                value={ticketsSold}
                onChange={(e) => setTicketsSold(parseInt(e.target.value) || 0)}
                min="0"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-2xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quantity..."
              />
              <div className="text-center mt-2 text-sm text-gray-300">
                Total seats available
              </div>
            </div>
          </div>
        </div>

        {/* Daily Totals */}
        <div className="bg-gradient-to-b from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">💰 Daily Revenue & Taxes</h3>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-purple-400">{ticketsSold}</div>
            <div className="text-sm text-gray-300">Tickets Sold</div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-green-900/20 rounded-lg text-center">
              <div className="text-sm text-green-300">🎭 Theater Revenue</div>
              <div className="text-xl font-bold text-green-400">
                ₹{distribution.totalTheaterRevenue.toLocaleString()}
              </div>
            </div>
            <div className="p-3 bg-red-900/20 rounded-lg text-center">
              <div className="text-sm text-red-300">🏛 Government Tax from Tickets ({distribution.taxRate})</div>
              <div className="text-xl font-bold text-red-400">
                ₹{distribution.totalGovernmentRevenue.toLocaleString()}
              </div>
            </div>
            <div className="p-3 bg-orange-900/20 rounded-lg text-center">
              <div className="text-sm text-orange-300">🏛 GST on Convenience Fee (18%)</div>
              <div className="text-xl font-bold text-orange-400">
                ₹{distribution.totalGSTRevenue.toLocaleString()}
              </div>
            </div>
            <div className="p-3 bg-blue-900/20 rounded-lg text-center">
              <div className="text-sm text-blue-300">🎟 Portal Revenue</div>
              <div className="text-xl font-bold text-blue-400">
                ₹{distribution.totalPortalRevenue.toLocaleString()}
              </div>
            </div>
            <div className="border-t border-white/20 pt-3">
              <div className="p-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg text-center">
                <div className="text-sm text-purple-300">Total Collection</div>
                <div className="text-2xl font-bold text-purple-400">
                  ₹{distribution.totalCustomerPayments.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RevenueDistributionDemo;
