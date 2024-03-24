import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
   const gymPriceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: "$29.99/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Access to locker rooms",
          "Free WiFi"
        ]
      },
      {
        id: 2,
        name: "Premium Membership",
        price: "$49.99/month",
        features: [
          "Access to all gym equipment",
          "Access to group fitness classes",
          "Personal training sessions (1 per month)",
          "Access to sauna and steam room",
          "Complimentary towel service",
          "Discounts on merchandise"
        ]
      },
      {
        id: 3,
        name: "Family Membership",
        price: "$99.99/month",
        features: [
          "Access for up to 4 family members",
          "Access to all gym facilities",
          "Childcare services",
          "Discounts on family fitness programs",
          "Special family events and workshops"
        ]
      }
    ];
    
   return (
      <div>
         <h2 className="text-7xl text-[#9EC8B9] text-center font-serif font-extrabold">Best price of gym</h2>
            <div className="grid md:grid-cols-3 mt-5 ">
               {
                  gymPriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
               }
            </div>
      </div>
   );
};

export default PriceOptions;