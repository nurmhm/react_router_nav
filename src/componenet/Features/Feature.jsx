import PropTypes from 'prop-types'
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
   console.log(feature)

   return (
      <div>
         
         <p className='py-3 flex gap-3 items-center '> <IoIosCheckmarkCircle className='hover:hidden bg-green-200 '></IoIosCheckmarkCircle> { feature}</p>
         
      </div>
   );
};


Feature.PropTypes = {
   option:PropTypes.object
}


export default Feature;