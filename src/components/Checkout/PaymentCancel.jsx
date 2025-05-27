import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorAlert } from "../utils/alerts";

const PaymentCancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    errorAlert("Payment Cancelled! Order has been cancelled.");
    setTimeout(() => navigate("/cart"), 3000);
  }, [navigate]);

  return (
    <div className="bg-bgClr h-[80vh] flex flex-col items-center justify-center">
      <div className="text-primaryRed text-4xl font-bold mb-5">
        Payment Cancelled! Redirecting...
      </div>
    </div>
  );
};

export default PaymentCancel;
