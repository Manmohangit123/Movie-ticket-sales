import React, { useState } from 'react';
import { Calculator, DollarSign, Building, Landmark, Ticket } from 'lucide-react';

const RevenueDistributionDemo = () => {
  const [selectedCase, setSelectedCase] = useState('case1');
  const [ticketsSold, setTicketsSold] = useState(150);

  const calculateDistribution = (caseType) => {
    if (caseType === 'case1') {
      // Premium Ticket (>₹100)
      const basePrice = 120;
      const ticketTax = Math.round(basePrice * 0.18 * 100) / 100; // Theater pays 18%
      const convenienceFee = Math.round(basePrice * 0.10 * 100) / 100; // 10%
      const convenienceFeeTax = Math.round(convenienceFee * 0.18 * 100) / 100; // Portal pays 18%
      const maintenanceCharge = 3.00;

      const customerPays = basePrice + convenienceFee + maintenanceCharge;

      // Revenue distribution
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
        taxRate: '18%',
        caseDescription: 'Premium Ticket (>₹100)',
        totalCustomerPayments: Math.round(customerPays * ticketsSold * 100) / 100,
        totalTheaterRevenue: Math.round(theaterShare * ticketsSold * 100) / 100,
        totalGovernmentRevenue: Math.round(governmentShare * ticketsSold * 100) / 100,
        totalPortalRevenue: Math.round(portalShare * ticketsSold * 100) / 100,
        totalGSTRevenue: Math.round(convenienceFeeTax * ticketsSold * 100) / 100
      };
    } else {
      // Regular Ticket (≤₹100)
      const basePrice = 80;
      const ticketTax = Math.round(basePrice * 0.12 * 100) / 100; // Theater pays 12%
      const convenienceFee = Math.round(basePrice * 0.10 * 100) / 100; // 10%
      const convenienceFeeTax = Math.round(convenienceFee * 0.18 * 100) / 100; // Portal pays 18%
      const maintenanceCharge = 3.00;

      const customerPays = basePrice + convenienceFee + maintenanceCharge;

      // Revenue distribution
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
        taxRate: '12%',
        caseDescription: 'Regular Ticket (≤₹100)',
        totalCustomerPayments: Math.round(customerPays * ticketsSold * 100) / 100,
        totalTheaterRevenue: Math.round(theaterShare * ticketsSold * 100) / 100,
        totalGovernmentRevenue: Math.round(governmentShare * ticketsSold * 100) / 100,
        totalPortalRevenue: Math.round(portalShare * ticketsSold * 100) / 100,
        totalGSTRevenue: Math.round(convenienceFeeTax * ticketsSold * 100) / 100
      };
    }
  };

  const distribution = calculateDistribution(selectedCase);

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

        {/* Test Case Selector */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <DollarSign className="w-6 h-6" />
            <span>Test Case Scenarios</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedCase('case1')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedCase === 'case1'
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="text-xl font-bold mb-2">🎭 Premium Ticket</div>
             <div className="text-3xl font-bold text-blue-400 mb-2">₹{calculateDistribution('case1').basePrice}</div>
<div className="text-sm text-gray-300">{calculateDistribution('case1').caseDescription}</div>
                <div className="text-sm text-gray-300">Government Tax: 18% (Theater pays)</div>
              </button>
              
              <button
                onClick={() => setSelectedCase('case2')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedCase === 'case2'
                    ? 'border-green-500 bg-green-500/20'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="text-xl font-bold mb-2">🎟 Regular Ticket</div>
                <div className="text-3xl font-bold text-green-400 mb-2">₹80</div>
                <div className="text-sm text-gray-300">Base Price ≤ ₹100</div>
                <div className="text-sm text-gray-300">Government Tax: 12% (Theater pays)</div>
              </button>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
              <div className="text-xl font-bold mb-4 text-center">🎫 Daily Sales</div>
              <label className="block text-sm font-medium mb-2">Tickets Sold Today</label>
              <input
                type="number"
                value={ticketsSold}
                onChange={(e) => setTicketsSold(parseInt(e.target.value) || 0)}
                min="0"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-2xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter quantity..."
              />
              <div className="text-center mt-2 text-sm text-gray-300">
                Total seats available
              </div>
            </div>
          </div>
        </div>

        {/* Current Case Display */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 mb-8 border border-blue-500/30">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">{distribution.caseDescription}</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-300 mb-2">Per Ticket</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">₹{distribution.customerPays.toFixed(2)}</div>
                <div className="text-sm text-gray-300">Base: ₹{distribution.basePrice} + CF: ₹{distribution.convenienceFee} + Maintenance: ₹{distribution.maintenanceCharge}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-2">Daily Total ({ticketsSold} tickets)</div>
                <div className="text-4xl font-bold text-green-400 mb-2">₹{distribution.totalCustomerPayments.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Total revenue collected today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Payment Breakdown */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4">📊 Per Ticket Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-900/20 rounded-lg">
                <span>Base Ticket Price:</span>
                <span className="font-bold text-green-400">₹{distribution.basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-900/20 rounded-lg">
                <span>Convenience Fee (10%):</span>
                <span className="font-bold text-blue-400">₹{distribution.convenienceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-900/20 rounded-lg">
                <span>GST on CF (18%):</span>
                <span className="font-bold text-orange-400">₹{distribution.convenienceFeeTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-900/20 rounded-lg">
                <span>Government Tax ({distribution.taxRate}):</span>
                <span className="font-bold text-red-400">₹{distribution.ticketTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-900/20 rounded-lg">
                <span>Maintenance Charge:</span>
                <span className="font-bold text-purple-400">₹{distribution.maintenanceCharge.toFixed(2)}</span>
              </div>
              <div className="border-t border-white/20 pt-3">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg">
                  <span className="text-lg font-bold">Customer Pays:</span>
                  <span className="text-2xl font-bold text-blue-400">₹{distribution.customerPays.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Distribution Per Ticket */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4">🔗 Per Ticket Distribution</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-600/20 to-green-800/20 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center space-x-3 mb-2">
                  <Building className="w-6 h-6 text-green-400" />
                  <span className="text-lg font-bold">🎭 Theater</span>
                </div>
                <div className="text-2xl font-bold text-green-400 mb-1">₹{distribution.theaterShare.toFixed(2)}</div>
                <div className="text-sm text-green-200">
                  ₹{distribution.basePrice} - ₹{distribution.ticketTax} + ₹{distribution.maintenanceCharge}
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center space-x-3 mb-2">
                  <Landmark className="w-6 h-6 text-red-400" />
                  <span className="text-lg font-bold">🏛 Government</span>
                </div>
                <div className="text-2xl font-bold text-red-400 mb-1">₹{distribution.governmentShare.toFixed(2)}</div>
                <div className="text-sm text-red-200">
                  Ticket Tax ({distribution.taxRate})
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center space-x-3 mb-2">
                  <Ticket className="w-6 h-6 text-blue-400" />
                  <span className="text-lg font-bold">🎟 Portal</span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">₹{distribution.portalShare.toFixed(2)}</div>
                <div className="text-sm text-blue-200">
                  CF (₹{distribution.convenienceFee}) - GST (₹{distribution.convenienceFeeTax})
                </div>
              </div>
            </div>
          </div>

          {/* Daily Totals */}
          <div className="bg-gradient-to-b from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💰 Daily Revenue Totals</h3>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-purple-400">{ticketsSold}</div>
              <div className="text-sm text-gray-300">Tickets Sold</div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-green-900/20 rounded-lg text-center">
                <div className="text-sm text-green-300">Theater Revenue</div>
                <div className="text-xl font-bold text-green-400">₹{distribution.totalTheaterRevenue.toLocaleString()}</div>
              </div>
              <div className="p-3 bg-red-900/20 rounded-lg text-center">
                <div className="text-sm text-red-300">Government Revenue</div>
                <div className="text-xl font-bold text-red-400">₹{(distribution.totalGovernmentRevenue + distribution.totalGSTRevenue).toLocaleString()}</div>
              </div>
              <div className="p-3 bg-blue-900/20 rounded-lg text-center">
                <div className="text-sm text-blue-300">Portal Revenue</div>
                <div className="text-xl font-bold text-blue-400">₹{distribution.totalPortalRevenue.toLocaleString()}</div>
              </div>
              <div className="border-t border-white/20 pt-3">
                <div className="p-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg text-center">
                  <div className="text-sm text-purple-300">Total Collection</div>
                  <div className="text-2xl font-bold text-purple-400">₹{distribution.totalCustomerPayments.toLocaleString()}</div>
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



