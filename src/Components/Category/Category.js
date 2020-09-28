import React, { Component } from 'react';
import "./Category.scss"

class Category extends Component {
    render() {

        const {categories} = this.props

        return (
            <div>
                    {
                        categories.map((category, categoryIndex) => {
                            return (
                                <div key={categoryIndex} className="boxDesign floatLeft" onClick={() => this.props.categorySelected(category.name,category.subcategories)}>
                                    <img src={category.image ? require(`../../images/category/${category.image}`) : null}  alt=":)" />
                                    <div className="labelDesign">
                                        {category.name} {category.subcategories && category.subcategories.length ? <span className="pic arrow-right"></span> : ""}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        );
    }
}

export default Category;