import React, { Component } from 'react';
import categoryJson from "../../utils/category.json";
import Category from '../Category/Category';
import "./MainPage.scss"

class MainPage extends Component {

    state = {
        categories: [],
        subCateGory: false,
        subCategoryName: null
    }

    componentDidUpdate(prevProps) {
        const { sublocationId, locationId } = this.props;
        if (prevProps.sublocationId !== this.props.sublocationId) {
            if (this.props.sublocationId !== null) {

                let { data: { locations } } = categoryJson

                const selectedCategory = locations.find(location => location.dealers_id === locationId)
                    .branches.find(sublocation => sublocation.branch_id === sublocationId).categories
                this.setState({
                    categories: selectedCategory,
                    subCateGory: false,
                    subCategoryName: null,
                    subCategories: []
                })

            } else {
                this.setState({
                    categories: []
                })
            }
        }

    }

    categorySelected = (name, subcategories) => {
        if (subcategories && subcategories.length) {
            this.setState({
                subCategories: subcategories,
                subCategoryName: name,
                subCateGory: true
            })
        }
    }

    backToCategory = () => {
        this.setState({
            subCategoryName: null,
            subCategories: [],
            subCateGory: false
        })
    }

    render() {

        const { categories, subCategories, subCateGory, subCategoryName } = this.state;
        if (categories.length) {
            return (
                <>
                    <div className="mainLineHeader">
                        <span className="cursorPointer" onClick={() => this.backToCategory()}>Equipment Catalog</span>
                        {subCategoryName && <span>{`  >  ${subCategoryName}`}</span>}
                    </div>
                    <Category
                        categories={subCateGory === true ? subCategories : categories}
                        categorySelected={(name, subcategories) => this.categorySelected(name, subcategories)}
                    />
                </>
            );
        } else {
            return (
                <div className="welcomeMessage">
                    <div>Welcome To</div>
                    <div>Rental Management System</div>
                    <div>Please select location</div>

                </div>
            );
        }
    }
}

export default MainPage;