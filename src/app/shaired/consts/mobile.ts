import { IMobile } from "../modals/mobile";



export const MobileData : Array<IMobile> = [
    {
        id: 1,
        name: 'iPhone 13',
        brand: 'Apple',
        price: 999,
        image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=90',
        isAvailable: true,
        rating: 4.9,
        noOfItems: 5,
        features: [
            'A15 Bionic chip',
            'Super Retina XDR display',
            'Dual-camera system',
            '5G connectivity',
            'MagSafe charging'
        ]
    },
    {
        id: 2,
        name: 'Galaxy S23',
        brand: 'Samsung',
        price: 899,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/in/s2602/gallery/in-galaxy-s26-ultra-s948-sm-s948bzkcins-thumb-550793604?imbypass=true',
        isAvailable: true,
        rating: 2.7,
        noOfItems: 40,
        features: [
            'Snapdragon 8 Gen 2',
            'Dynamic AMOLED display',
            'Triple camera setup',
            '8K video recording',
            'Fast wireless charging'
        ]
    },
    {
        id: 3,
        name: 'OnePlus 11',
        brand: 'OnePlus',
        price: 699,
        image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
        isAvailable: true,
        rating: 3.6,
        noOfItems: 8,
        features: [
            'Snapdragon 8 Gen 2',
            'Fluid AMOLED display',
            'Hasselblad camera',
            '100W fast charging',
            '5G support'
        ]
    },
    {
        id: 4,
        name: 'Pixel 7',
        brand: 'Google',
        price: 799,
        image: 'https://m.media-amazon.com/images/I/71T6fNlZTjL._SL1500_.jpg',
        isAvailable: false,
        rating: 4.5,
        noOfItems: 20,
        features: [
            'Google Tensor G2',
            'OLED display',
            'Advanced AI camera',
            'Stock Android',
            'Wireless charging'
        ]
    },
    {
        id: 5,
        name: 'iPhone 14 Pro',
        brand: 'Apple',
        price: 1199,
        image: 'https://m.media-amazon.com/images/I/61XO4bORHUL._SL1500_.jpg',
        isAvailable: true,
        rating: 3.8,
        noOfItems: 12,
        features: [
            'A16 Bionic chip',
            'Dynamic Island',
            'Pro camera system',
            'Always-On display',
            'MagSafe support'
        ]
    },
    {
        id: 6,
        name: 'Samsung Galaxy Z Flip5',
        brand: 'Samsung',
        price: 999,
        image: 'https://cdn.kalvo.com/uploads/img/gallery/53927-samsung-galaxy-z-flip5-9.jpg',
        isAvailable: true,
        rating: 4.6,
        noOfItems: 6,
        features: [
            'Foldable display',
            'Snapdragon 8 Gen 2',
            'Flex mode',
            'Compact design',
            'Fast charging'
        ]
    },
    {
        id: 7,
        name: 'OnePlus Nord CE 3',
        brand: 'OnePlus',
        price: 499,
        image: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg',
        isAvailable: false,
        rating: 4.4,
        noOfItems: 25,
        features: [
            'MediaTek Dimensity',
            'AMOLED display',
            'Triple camera',
            '80W fast charging',
            '5G support'
        ]
    },
    {
        id: 8,
        name: 'Google Pixel 8',
        brand: 'Google',
        price: 899,
        image: 'data:image/webp;base64,UklGRuITAABXRUJQVlA4INYTAAAwZgCdASpWAboAPp1Mn0ulpCKqJBNrIUATiWduDsiS0wpMtRiRy/Qca69nXPz/3cp/w+nrcg+CePPgbwCH1doX3889T7Dzr+zXsAd+B4oNADyk/9Lyf/XPBPIkhPLRW91m6cg5k/1avRZPC3HOanLv9pW1DxkHbEkkw/o+Sr9MnqUAS0d/i6vwNRVN4Nz8Ufya8qeMtTuvaPaVIaB3EYWDKcW0crDsipLC7BJKboGben1mmEau7e8caDLqRiL7+PuA/NW0u5UwXey2qyNpMIqTbV3vzGbNk4NcHR8QPJjf4F//6nrHIuLutrIzfT8BY6WV6SYdCF3CS3dPhqQYrsCfChFfecI5LVQpprmrY8fRouZ6f6Sl+7+g386m//TzMcf8vJzeiO0AQUHXbK5kbNTmefbuSx1bk+0dZ/6tP8rNsOW6PjpnhL0yLOulXBUNDP4ioZ+w7UPA4j50ESW+zeWkPg3liW4gYzP8hOaVrr/jynCczOSb82jpRjljDOMVcmVd+Asi5Ud0S5BGDkiw309P45mFQTAGD7V8hskj+cKZv3ibJYfNzQ+tSqyzV+EhlQ4S3G/tP3XH//+uYf8nuoEkbtNQrS0CNmfJWr41F+c2Ma/nzQHi1yUqjZUB/FUYbcZuz1q1tEGjKOR/ZXICV3AV592C4OY4DfJ2AdE5197rbGi9eigZ90OuWfJLb8URF7tW+kdOZzH8ZBXnXaShlEmesNbYGWaYHvWoQvgsrZpdVT4fVOdg2usB8BwQ2+1iBKD3jSPiJpbaapzxrdvjSA1ulqGx7ny1WP9qkmpHYvqZyRYq3T2hOZLmW+M2qZP7shpeeXjDcRrqnNDVROgwUuCR1Cx26h3lAjvDuViLGcHf/a+guL7czutQ2INJf+cbP628wZy+sS6dGGhjYKF7yLk5HzfTT7DDamAD83mMkgBNuJPszPgd1snGf8r8D////DdQCx5IYZHsXZtRpaQeLeJiRvG/fArfdQ3fQ/fn00lAoHnqzcFPzJ3/lmFeYS91SZMa0c6gKxRK6G0YwOV4BOnx8sDI/66LNKP6aBD21++MePuC7RbMiUHm9K3oxvak9lzPKt8tVF2IYYLgAP781sPj0oJLZhmZenhRDQfmvjff2y3X1V0CeOfw8VcHHap5DhXaXXEUTrgPlTU2JeYdjash595zM1amzuyNfsDag6jP6flCuOHzrEFFi9gsdVhbvpl7AV2tQZ1tlgGqte0ijB+7CE7MULuiCy/2eqGnNqAKWubJoQ+79T6BlLQnN7bvJrH1uv7tXhjgGRE94eSM1SP1qB+lz+OUxt13mSnKkiMtJOBVTFK4SqFFuIusQYXLnyyc6xsrtXM0638RhahvTCUAcM/FXTZYYRJohoqERJ0wCChs9AsCzwESofO/h/nNIFhYZUu9n2AAovV0vmJKTN5V/a39bqssQ/FHyS2le5R1DcUoikHL+Yqzxifn+FgbTcYRIaydMiDelr/X8XxfJDepZFhVJViptEXjwoUVAYf6b6NP9Tuh1gK+ahO/f0AgIMVPd/iWzpHe6KvcTRk9cU0rmu2fKgIL5RBCf9UzKavUUlDq/zYtVK2x/NqoWTyf0IdiMPAeBc/IVSVtBpO3ccZX7VwlxWfoe/gtsrp0rOi6dGDchs1gbli1xvLCXb0wC+n0KsyR8vf5G9mfh5YUD/UE2UisjHRJn5DxtY4EBnpZEMM1CR0brLhqcnKLn/oDUB/jr6/IUd6c6e56U4zbx9vN54jcohmoPouKkXYMEB1DQ7HjBaNL4v6npYQFIv5JXR8FEuOUFDeMfLDtLeJ893E+N64SInF0n5ntggrhu8qy4nVJ8vPKZSTVRqZTREMTVbTMSDlMJF7x+3e68dPv3HBpZX7fIbVO+bB5/AulifS707efVMbRA05inLjcs4A2SFEKHLYbhGXqIq6/SiAyWESwcK7xC4OfUwTrPINagsH8ofT/dy/rma0BKVKXdkqeksJy7DUeuAUWeQ5MvO6P1sgj7ZnbCoO8l65j/wfuKHOnFrmZO334x9a083H0qmXGD69UTBi4BZELl7AmcXpMoIsDlWlgx8bwuT/mHtTIwW9luhg36cNkpr8eT5slqDrfbmiUvXxGUaCE+jFE4UXkAw9PrilBtYIbbEYjlCf7DVaBrHTqQ6/8JC+Q9WVOq3dekTvzc8skOhgwUepSThqwwC3rLPPtt20DcOik/T+ZN6MUPrAZ4BmoVSN8megvHNlsgEj0zVTOgiyxYT7iy/dd1mhKib9uyUIFxu2fSq7G58UuNTOiWei51MBbVoQghF0Z15C486Ts6EAch/EE7pzuC5DluoXBY6ENNkTTnIhraXuhM1MObJoNNoZ82zEXcaleGdWXplsvciNMTtJ2luhNBvGCGpBfFg5eZS/wDHAscnq21I7CnpIla5xzfDPwkaEqBZqt+WgJK6WEEe2OqRoY7vTpWg9N8LQClim+E2y31qF5EipL9DHpv8aNcBEdpSQCtwK9b1wcf6OZ3MnpgmMwFmFBrw7QFY1d1EcJ8w77TPtGlFLW6qHVCUlcAHV3Xf5a7zGYY5V+9nFmRCG7i35FEp0ooLGnfD3V3514Y7QVRe8p5pyxj5gh/Ir0GB1h1IhOaDsZDAMsP3xgpt/I1c4ARSQ4fLA0WA621fe8QnHfuaKKchZVmhKyUoGAIHj5jabRi1cd34mej8s8c+cqXZDp8O93kHsPm6sWZV2pzG61wllCtFlO+AK0OQw10ETVBG0c520MIx0H/bNLwRDRPYa1qUBL1PN5k0sjV+3EJIqB1c7KmSJ5cI8NNI9IJIpJWGaGRjJB3Ia8niQNVmkDnxkhs9zuQA9OtbaLSFGAL5i/PW9C5x3Y/hkLglnmTYmuYEIC6K7ll1ZP6jBjDr+JE3F1RXSMfIlTQUmOpNrzxTyQ5KCLnri5AkcHa66ubU+UhSuRoVOruxxGTb4aVvJe2qJEaLytzVIcDslFi1w3yqa14W8Clx3KSp45Gs/+R1fEYOmn8itu0Fodx31pEOSW0ioWryVEqoOmxyke4lyKNqD2rB75+YiKZZv5Db/NDYzKiNFNHCms2GcrGYUWU0RsBbWBs62qOLFOV8ZfE/miqhBwL29nH3HVbcBrKe3xSXI5wV0fTEK92Sp2UbcKr9UftdIyGVaz6+BP8ya6AjtnSRO9gWN4bRVCKRnmHWRR8tkiw7byjHD1eGo69Cnc/7yqOwpoG/naqYcd+e8YdnxFzxmrG0eSnghofCY2wg+rtNxwpFcGmLIoeS5eg3Avbfpkq4Xqfy8W+frqI/Jam6pc7GfMhyjxmJG2+OcFf19Ai6qWz13Kl5JL/upAxsbt9WedtV7Hy9VUuGr+/V44O3mCgTLt+RgvSpmaiEjXLuj8al2HqbwIW20Q44tNFIRwTiJS5O6l755mmZK36EUolcc8nLD8wp5tEgR4bPbeVWT0S4SbnlpWtqcHkrA24iwaQ1lnj8NiOE63PKUIiF14ygrMcBK+8dB9Ca0GqBdZE8y66t0y9gezuC0/ZfkCXOFnTNz+BkLXkz/Owk5yrsBF/AAvyAZuAIb13954lMT0t+rIbx+Ks4hlQcNpwbBlIoDcqC7UUx/8I/hKgXS9/ZiC+9AXq78TMJk31Yx3H01rh9VS7o9NkxxDuhZ9W9AW1a92zNtFFwT8u8fLOVNRwEwsGjowKNeJNz9DM7b/3fj4x2OFD6QK0CCiz8UE0/HtQGUokXNg7vsneN63VB7pb1hiRSXmESxvHPsGSGoq+O4LXCmDV8iLQuzza9qj5+XjW7wbccSWQM1NK5MfWI1zNfTSNmFKSdolnyO95qTKfic1mxypBypN7MOcsz4SAhZ/XXlpeSsNEnwyYozH55PPqinrFl4ZX8YxPnPQ0Gxo7kGgFTq7hMyIDOzpN3MbwP5BbwnicPyLYeIAI5FUk1Psx7Pwsia6W/UY3oYOPUGzaA3qvgIl6hYDhqRcZm0mioWxOQv8fl0fAySmHc4gs9fGHvbG7gxF3Td15CKlPBMTosxmSOi/PwkILprE1SArbhC7d+E/GMvjlPmhWgZKIBJwPze1vYGynMrCRQeEvuVLFVFa17OzopM3o92UphYXiNRnyX599BLd2mudloNyCXOCxzGICRDwtPWOCyIZYQFLf3cNXFVruwCDJN7Vp2bzCYbrMn21UQHIzkkfOsoN6TqXHQC7dBlzHSU51RUT7TK+jYxBV1m8flA6XqIZOirZSE6gduzs6h315ncrmqYhW16O/e6SD2pKwuDPP1ev7OuQtPgTU70vzdk/QSy8BZCY28l06p1wkHz7AGuVPCekceqOat2dsSvnvn9Sbf3aivCtBCmZDCcXjTbYpg6xSFUWEXxzbfgtOST0DDRJGlXZe6HHIUuOh4tFd5ho4/bPhnRc7PGpzRftnd7o6KW5Q1DxAQbLxs/cSMRFv4aNl2h9WfJNBx6apQlFPs2rwN5pSJk6Y6T+iAmrLPfs4j4XuSWPU/tYXsCVMrV2aKngZXuEZfEw/lL9ZwfGH3QCb1IDQwS8kYYiVPamFNvgSOueX/xAn0VPmQjdQnwb+LaeeE/UDUOv7dMd01KJpDAyWRcLCHRtWlbnkuPpPi1ce0bhIwlZzK9INwCPCQ9GL0V+8XcliqObsUp0U995d0OM6f+fKNA7ui31Abnnk7NsDR0l5Qbxa2NLOcikeWi/qe7bGqtT24af0tc8tXym/bhBKuMEj5Oe0xrKkxF5OZ08bZoFQtW83baiwAB1o+34r2N86Q39qxIj3kAlcKqjPh4GcXSbaAbuyUuD5yDNBzIAyCHwrBU7kIM8QLuSDfCQ/kmNnMSar2zH7aTdWd/OysaYi5mmezB3e7f5rjeOGLruFN/OWrfCDTWOYgFfUsEvyr7Gu+7VKY9HahapqxIdtNgdUR9nUviewPJhVwgy7QpAEEZC2UH/pRsvGWZuDoTx8L1xL3sD3AdujUKTPNZV8FRwQjmDHr2YvbYWGCVqB/R8EmgIDh6Lksgsz8+6+wMxOCoyw8AjoLyKWoVgV86s+2NO6jbwpF80/VKxSFVe46Q9WWP1p9thcJTPQFR1mU+phcpjsv9T6RGZzcxXjpu7q/AhN9F+e3DAZ3z/ohERSIRhsDBmptQb7sna0ceXUk/ty8JDqnk//8zOh5YaA8kEk9eIZKSIS/gDVqSJwIQECal1CMHIwhZAR44dK5lgD1ytmiapguL26HadZ/Aw+oKQ3DCDCSng68tVE6SWiofy3wogfwo4yZ8Bwr0FZrBiLKpVZ+oSwiS3RuYGLmH1QTExn2Tn7Rm3yBekF41g+HPHJqMQlQ0kMAQgyTbvGpaxf3x7l29qJAezfhsKp7e+osTi5S0MTay95BI9qhOwJaISNTxSL1r3bL8gTTTZgg9qY6RtYnti9n8RSkmkl78BYAvlaoEOptUZ51tXgGHRGbr6ygbNBTJXznXU01tHPXmb0dYVcbihpBHUJlg1ukYpT0Bt2lBHeMUbdxsoPATIa8bw21xWMC3wsgkkdw0OiquQhcsbQKOBvpF9xTvxlg0Jpqcih0KhTPFCE2KBPtwyoa0zCnBpIdUpfOODRYW1UaYotZuCnHbfxO1DGSL5vvEtpPGPQIP9VyYVg7qRwLXYNOQa0tCaqRrfLi2EnaoAIOObiFctMgpT+o8Mqiw8HQixttpnGtoWymrU6vhZ1MDfRhJcQE1q2KRM8Hu2twELzve2Y3RI6dqcNR7ff7u645L3DVLI+Yx+l98VFkSGwqKm2zjmlFOTdCVUssBqeSkKngoG+GCsPmH6QIK+huifRGJfKC8CyvtC95eiZzkXP0jTgd1nSOs6MyNgR9qKO+rfUBfgbaNQfIGLXsp5f5i+l76pvd7oeKYmdx6jXX1EopxzKquH0kWwhEejAlYbs/P8jjS83TK5AXqhZ5Qa95glhR9h1W4fiXaVsS55g4yvABvF8kTPLitmxjn90zl3uAztWd7KS6iwUmWIfSq12IMPFyB6QKf0OKYHWcisXN4d7Z0yg79V2cK9PtNaJ82Pl4K1/uhaByQrIoLlEvc6X/99Or3nE+DW619MrslBQgEj06TOlrE2t2UiI4141LiBIHT/G8Tw0zaZ2uOBqxOhbrNM6cghw1kMyNcuAwMS0sDG+bgAureBuYV5cCLy/rluK+73PcR9wgwaPFpAkYz6VmyXuQuVMUHrfNvo1zZBEcCwl4/86OAuQ1KxY33LvnDVhxjXkUMsv4fegodBkZDBT38LY60xdJCTMRxOPvq/abrBKYqW0sks2qaG2nFpEC0nfWCRwndBYm7gpa/q71Z1J4Gu158kfOTDcrYRVvZnbFI/OxCyYX4nOBN8dTEhdcFqcYwfbY88IAihaCupbDYqZ1Qu2rBO3ILd2hiHnis3fTc7AKgqHko152aMKOi8EMydEiMgfSmK3vfeU6UQCCkvXDsaK+BJyWjEO0UImzthtBEsaU5pGpJMjVNQ+vzTPkoQziT1ZBC1uCwhNumSKLn10zOEhq+X2lkZLNqfx2rkcVyxEIsgH6erH1gATMrNU64ZsrkBJEfr2lyGp44z0nKrDVtrI0OxIHOqSWuj3jZ+iY3oQOCu+DCHRqKfn/DBostOzEFAgUh/2zaPnGvBpQbvNLVRzq/+VRi5cOZacNVyc/qU79O9GGDHDE2UGQYn79QCexYOX77jpR+N/Yxg7U6PSC8AH6H+rFELWHnwcZTJenTYh+8r9WzFMDba3LKUWzhWle76AQnUdMGTooloH4xRm9Nhbx/o874JcCMPhGDKzDUoR0AAAA==',
        isAvailable: true,
        rating: 4.7,
        noOfItems: 10,
        features: [
            'Tensor G3 chip',
            'AI-powered camera',
            'OLED display',
            'Android updates',
            'Wireless charging'
        ]
    },
    {
        id: 9,
        name: 'Xiaomi 13 Pro',
        brand: 'Xiaomi',
        price: 749,
        image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-13-pro-5g/28b8ee349755f1d201dee2c8d4b08d32.png',
        isAvailable: false,
        rating: 2.5,
        noOfItems: 18,
        features: [
            'Snapdragon 8 Gen 2',
            'Leica camera',
            'AMOLED display',
            '120W fast charging',
            '5G connectivity'
        ]
    }
];