import PropTypes from 'prop-types';

const Link = ({route}) => {
   
   return (
      <li className="mr-10 font-bold hover:bg-red-200 px-6 rounded-lg">
               <a href={route.path}>{route.name}</a>
            </li>
   );
};

Link.PropTypes ={
   route : PropTypes.object,
}

export default Link;