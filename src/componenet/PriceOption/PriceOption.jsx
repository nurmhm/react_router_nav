import PropTypes from 'prop-types'
import Feature from '../Features/Feature';

const PriceOption = ({option}) => {
   const{name, id,price, features} = option;
   console.log(name);
   return (
      <div className='bg-[#A0153E] p-4 flex flex-col text-[#9EC8B9] rounded-lg mx-2'>
         <h1>
            <span className='text-6xl font-extrabold text-center'>{price}</span>
            
         </h1>
         <h4 className='text-3xl text-center my-7'> {name}</h4>
         <div className='flex-grow'>
            {
              features.map((fea, idx) => <Feature key={idx} feature ={fea}></Feature>)
            }
            
         </div>
         <button className='bg-green-700 p-4 w-full rounded-lg text-white hover:bg-green-950'>Buy Now</button>
      </div>
   );
};

PriceOption.PropTypes = {
   option:PropTypes.object
}

export default PriceOption;