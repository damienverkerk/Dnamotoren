import React from 'react';

export default class OccasionForm extends React.Component{
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onManufactureDateChange = this.onManufactureDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: props.occasion ? props.occasion.title : '',
            brand: props.occasion ? props.occasion.brand : '',
            description : props.occasion ? props.occasion.description : '',
            manufacture_date: props.occasion ? props.occasion.manufacture_date : 0,


            error: ''
        };
    }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({title: title}));
    }

    onBrandChange(e) {
        const brand = e.target.value;
        this.setState(() => ({
            brand: brand
        }));
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }

    onManufactureDateChange(e) {
        const manufacture_date = e.target.value;
        this.setState(() => ({ manufacture_date: manufacture_date}));
    }

    onSubmit(e) {
        e.preventDefault();

        if(!this.state.title || !this.state.brand || !this.state.manufacture_date){
            this.setState(() => ({ error: 'Please set title & brand & manufacture date!'}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmitOccasion({
                title: this.state.title,
                brand: this.state.brand,
                description: this.state.description,
                manufacture_date: this.state.manufacture_date
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='w-full max-w-lg'>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
                                Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="title" autoFocus value={this.state.title} onChange={this.onTitleChange} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-brand">
                                Brand Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="brand" value={this.state.brand} onChange={this.onBrandChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                                Description
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="description" value={this.state.description} onChange={this.onDescriptionChange} />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-manufacturedate">
                                Manufacture date
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="manufacture date" value={this.state.manufacture_date} onChange={this.onManufactureDateChange}/>
                        </div>
                    </div>
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Occasion</button>
                </form>
            </div>
        );
    }
}