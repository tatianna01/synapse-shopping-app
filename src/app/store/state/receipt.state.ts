export interface ShippingInfo {
    fullName: string;
    daytimePhone: string;
    road: string;
    optionalGeoInfo: string;
    city: string;
    country: string;
    postcode: string
}

export interface BillingInfo {
    fullName: string;
    email: string;
    road: string;
    optionalGeoInfo: string;
    city: string;
    country: string;
    postcode: string
}

export interface PaymentInfo {
    cardholderName: string;
    cardNumber: string;
    expireDate: string;
    securityCode: string;
}

export interface ReceiptStateModel {
    shippingInfo: ShippingInfo,
    billingInfo: BillingInfo,
    paymentInfo: PaymentInfo,
    shippingInfoFilled: boolean,
    billingInfoFilled: boolean,
    success: boolean
}

export const receiptState: ReceiptStateModel = {
    shippingInfo: {
        fullName:'',
        daytimePhone:'',
        road: '',
        optionalGeoInfo: '',
        city: '',
        country: '',
        postcode: ''
    },
    billingInfo: {
        fullName:'',
        email:'',
        road: '',
        optionalGeoInfo: '',
        city: '',
        country: '',
        postcode: ''
    },
    paymentInfo: {
        cardholderName: '',
        cardNumber: '',
        expireDate: '',
        securityCode: ''
    },
    shippingInfoFilled: false,
    billingInfoFilled: false,
    success: false
}