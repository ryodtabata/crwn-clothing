import { PaymentFormContainer, FormContainer, PaymentButton} from "./payment-form.styles";


const paymentForm = () => {
  return (
    <PaymentFormContainer>
      <h2>Payment Form</h2>
      <FormContainer>
        {/* Add your payment form fields here */}
        <PaymentButton type="submit">Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
}

export default paymentForm;
