import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { successAlert } from "../utils/alerts";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    successAlert("Payment Successful! Order Confirmed.");
    setTimeout(() => navigate("/all-foods"), 3000);
  }, [navigate]);

  return (
    <div className="bg-bgClr h-[80vh] flex flex-col items-center justify-center">
      <div className="text-primaryRed text-4xl font-bold mb-5">
        Payment Successful! Redirecting...
      </div>
    </div>
  );
};

export default PaymentSuccess;
