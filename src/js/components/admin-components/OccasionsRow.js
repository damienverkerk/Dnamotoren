import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeOccasion } from '../../actions/occasions';

const Occasion = ({id, title, description, brand, manufacture_date, dispatch}) => (
    <React.Fragment>
    <td className="px-6 py-4 whitespace-no-wrap">
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""></img>
            </div>
            <div className="ml-4">
                <div className="text-sm leading-5 font-medium text-gray-900">
                    <Link to={{
                        pathname: `/occasion/${id}`,
                        occasionProps: { occasion: title}
                        }}>
                    {title}
                    </Link>
                </div>
                <div className="text-sm leading-5 text-gray-500">
                    {brand}
                </div>
            </div>
        </div>
    </td>
    <td className="px-6 py-4 whitespace-no-wrap">
        <div className="text-sm leading-5 text-gray-900">
            {brand}
        </div>
    </td>
    <td className="px-6 py-4 whitespace-no-wrap">
        <div className="text-sm leading-5 text-gray-900">
            {manufacture_date}
        </div>
    </td>
    <td className="px-6 py-4 whitespace-no-wrap">
        <div className="text-sm leading-5 text-gray-900">
            {description}
        </div>
    </td>
    <td className="px-6 py-4 whitespace-no-wrap">
        <div className="text-sm leading-5 text-gray-900">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
            </div>             
    </td>
    <td className="px-6 py-4 whitespace-no-wrap">
        <div className="text-sm leading-5 text-gray-900">
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {dispatch(removeOccasion({id}));}}>Delete</button>
            </div>             
    </td>
    </React.Fragment>
);

export default connect()(Occasion);