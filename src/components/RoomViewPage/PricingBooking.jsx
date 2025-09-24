import React from 'react';

const PricingBooking = () => {
  return (
    <>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Pricing & Booking
      </h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#111418] text-base font-bold leading-tight">$250 / Night</p>
              <p className="text-[#60758a] text-sm font-normal leading-normal">
                Cancellation Policy: Free cancellation up to 24 hours before check-in. Inclusions: Breakfast, access to fitness center and pool.
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
              <span className="truncate">Book Now</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJqnv2wSRwzffMhQ0Z-1kOy-43kz-Dio7NuRsQ36ex-TPC3-0oKWnDdvIPHDhleJKHLZ09t2KIDxyZdd7OnxAouG9MhrzxhR84XlDJE0BIsT6YH4_39cCApUnpHqNiyXNcsqRBDWEYb3d-kSES1m9_ZTjQ4pw42iOPy-EoDHyTqmN4nX2v0RnSGlJVCL1omse9VNHd2gehD_71jkvE655gqeR5JuOTHBfNs_tpV14Uq9UoFIlSpf_7owTEj6VAoriBBbJkOO73cd_b")`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default PricingBooking;
