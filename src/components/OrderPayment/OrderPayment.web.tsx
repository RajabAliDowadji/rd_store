import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { GET_USER_ORDER } from "../../Hooks/Saga/Constant";
import { useDispatch, useSelector } from "react-redux";
import { userOrderDetails } from "../../Modal/GetUserOrder.modal";
import { color_logo } from "./assets";
import { Colors } from "../../Constants/Colors";
import {
  CHECKOUT_URL,
  COMPANY_NAME,
  PAYMENT_CALLBACK_URL,
} from "../../Constants/PaymentURL";
import "./OrderPayment.web.css";

interface CartBagProps {
  activeStep: number;
  activeStepChangeHandle: any;
}

const OrderPayment = ({ activeStep, activeStepChangeHandle }: CartBagProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [order, setOrder] = useState<userOrderDetails | null>(null);

  useEffect(() => {
    if (order !== null) {
      openPaymentDisplayHandle(order);
    }
  }, [order]);

  useEffect(() => {
    dispatch({
      type: GET_USER_ORDER,
    });
  }, [dispatch]);

  useEffect(() => {
    if (
      state &&
      state.get_user_order &&
      state.get_user_order.userOrder &&
      state.get_user_order.userOrder !== null
    ) {
      setOrder(state.get_user_order.userOrder);
    }
  }, [dispatch, state]);

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const openPaymentDisplayHandle = async (order: userOrderDetails) => {
    const res = await loadScript(CHECKOUT_URL);

    if (res) {
      const options = {
        key: order.access_key,
        amount: order.total_price,
        currency: order.payment_details.currency,
        name: COMPANY_NAME,
        image: color_logo,
        order_id: order.payment_details.payment_id,
        callback_url: PAYMENT_CALLBACK_URL,
        prefill: {
          name: order.user.name,
          email: order.user.email,
          contact: order.user.phone_number,
        },
        theme: {
          color: Colors.primary500,
        },
      };
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    }
  };

  console.log(window);
  return (
    <Box>
      <Box>sd2121</Box>
    </Box>
  );
};

export default OrderPayment;
