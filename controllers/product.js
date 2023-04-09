const productArr = [];

const controller = {
    productList: async (req, res) => {
        return res.send({ product: productArr });
    },

    createProduct: async (req, res) => {
        const productDetail = req.body;
        console.log('request body ===> ', req.body);
        productArr.push(productDetail);
        return res.send({ msg: 'Created Product Successfully' });
    },
};

module.exports = controller;