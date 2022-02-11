const phones = [
    {   id: 1,
        name:'IPhone 13',
        amount: 1,
        shipping: 10,
        price: 1200,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI0qsB0TnkEvEfnWcxR07Fj185qCwfvniTg&usqp=CAU"
    },
    {   id: 2,
        name:'Xiaomi Redmi Note 10',
        amount: 1,
        shipping: 10,
        price: 251,
        url: "data:image/jpeg;base64,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"
    },
    { id: 3,
        name:'Samsung Galaxy S22',
        amount: 1,
        shipping: 10,
        price: 1300,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6W6JcffH-IVRs54mJaiUdA5zuMcu0sKO9A&usqp=CAU"
    },
    {   id: 4,
        name:'Huawei P50 PRO',
        amount: 1,
        shipping: 10,
        price: 900,
        url: "data:image/jpeg;base64,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"
    },
    {   id: 5,
        name:'Dell inspiron 1470',
        amount: 1,
        shipping: 10,
        price: 599,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNkTVQIoOpI7WxV6AtNpNCIO_51dFhtAIqA&usqp=CAU"
    },
]
export default phones