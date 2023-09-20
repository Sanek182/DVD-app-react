import React from "react";
import { useNavigate } from 'react-router-dom';
import { InputValidation } from "../../components/validation/InputValidation";
import { toast } from 'react-toastify';
import { updateUserData } from '../../api/authAPI';
import { createOrder } from '../../api/shoppingAPI';
import "./CheckoutPage.css";

function CheckoutPage({userId, cartId, totalSum}) {
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log("userId:", userId, "cartId:", cartId, "totalSum:", totalSum);
        try {
            const response = await updateUserData(data);
            if (response.success) {
                const { specificDetails } = data;
                const orderResponse = await createOrder(userId, cartId, specificDetails, addExpenses, totalSum + addExpenses);
                if (orderResponse.success) {
                    toast.success("Order created successfully.");
                    navigate("/order");
                }
            } else {
                toast.warning(response.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    const fields = [
        { name: 'first_name', type: 'text', placeholder: 'First Name', rules: { required: 'First Name is required' }},
        { name: 'last_name', type: 'text', placeholder: 'Last Name', rules: { required: 'Last Name is required' }},
        { name: 'country_resid', type: 'select', placeholder: 'Country of Residence', rules: { required: 'Country of Residence is required' }},
        { name: 'birth_date', type: 'date', placeholder: 'Birth Date', rules: { required: 'Birth Date is required' }},
        { name: 'phone_num', type: 'tel', placeholder: 'Phone Number', rules: { required: 'Phone Number is required', pattern: { value: /^\+?[0-9]*$/, message: 'Invalid phone number'}}},
        { name: 'specificDetails', type: 'text', placeholder: 'Any specific details for shipping', rules: { maxLength: { value: 500, message: 'Maximum 500 characters allowed' }}}
    ];

    return (
        <main>
            <div className="checkout-container">
                <h2>Proceed to Checkout</h2>
                <InputValidation fields={fields} onSubmit={onSubmit} />
            </div>
        </main>
    );
}

export default CheckoutPage;
